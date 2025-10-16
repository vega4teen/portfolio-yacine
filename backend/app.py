# app.py
from pathlib import Path
from flask import Flask, request, jsonify, send_from_directory
from flask_cors import CORS
import os, re, smtplib, time
from email.message import EmailMessage

# Sert les fichiers statiques React depuis backend/dist
app = Flask(__name__, static_folder="dist", static_url_path="")
CORS(app, resources={r"/api/*": {"origins": "*"}})

EMAIL_RE = re.compile(r"^[^@\s]+@[^@\s]+\.[^@\s]+$")
RATE_BUCKET = {}

def rate_limit(ip, limit=6, window=60):
    now = time.time()
    t = [x for x in RATE_BUCKET.get(ip, []) if now - x < window]
    if len(t) >= limit:
        return False
    t.append(now)
    RATE_BUCKET[ip] = t
    return True

@app.get("/api/health")
def health():
    return jsonify({"status": "ok", "service": "portfolio-backend"})

@app.post("/api/contact")
def contact():
    ip = request.headers.get("X-Forwarded-For", request.remote_addr)
    if not rate_limit(ip):
        return jsonify({"ok": False, "error": "rate-limit"}), 429

    d = request.get_json(silent=True) or {}
    name = (d.get("name") or "").strip()
    email = (d.get("email") or "").strip()
    message = (d.get("message") or "").strip()
    honeypot = (d.get("company") or "").strip()

    if honeypot:
        return jsonify({"ok": True, "message": "Message reçu."}), 200

    if not name or not email or not message:
        return jsonify({"ok": False, "error": "missing-fields"}), 400
    if not EMAIL_RE.match(email):
        return jsonify({"ok": False, "error": "invalid-email"}), 400

    try:
        smtp_host = os.environ.get("SMTP_HOST", "smtp.gmail.com")
        smtp_port = int(os.environ.get("SMTP_PORT", "587"))
        smtp_user = os.environ["SMTP_USER"]
        smtp_pass = os.environ["SMTP_PASS"]
        contact_to = os.environ.get("CONTACT_TO", smtp_user)

        msg = EmailMessage()
        msg["Subject"] = f"[Portfolio] Nouveau message de {name}"
        msg["From"] = smtp_user
        msg["To"] = contact_to
        msg["Reply-To"] = email
        msg.set_content(f"Nom: {name}\nEmail: {email}\nIP: {ip}\n\nMessage:\n{message}\n")

        with smtplib.SMTP(smtp_host, smtp_port, timeout=20) as s:
            s.starttls()
            s.login(smtp_user, smtp_pass)
            s.send_message(msg)

        return jsonify({"ok": True, "message": "Message envoyé ✅"}), 201

    except KeyError as e:
        print("Config missing:", e)
        return jsonify({"ok": False, "error": "server-misconfig"}), 500
    except smtplib.SMTPAuthenticationError as e:
        print("SMTP auth failed:", e)
        return jsonify({"ok": False, "error": "smtp-auth"}), 500
    except Exception as e:
        print("SMTP error:", e)
        return jsonify({"ok": False, "error": "smtp-error"}), 500

# Routes statiques + fallback SPA React
@app.route("/", defaults={"path": ""})
@app.route("/<path:path>")
def serve_spa(path):
    dist = Path(app.static_folder)
    file_path = dist / path
    if path and file_path.exists():
        return send_from_directory(dist, path)
    return send_from_directory(dist, "index.html")

if __name__ == "__main__":
    # 0.0.0.0 + PORT env pour Render
    app.run(host="0.0.0.0", port=int(os.environ.get("PORT", 5000)))
