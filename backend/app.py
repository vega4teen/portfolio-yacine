from flask import send_from_directory, make_response
@app.route("/", defaults={"path": ""})
@app.route("/<path:path>")
def serve_spa(path):
    dist = Path(app.static_folder)
    p = dist / path
    if path and p.exists():
        return send_from_directory(dist, path)
    resp = make_response(send_from_directory(dist, "index.html"))
    resp.headers["Cache-Control"] = "no-store"
    return resp
