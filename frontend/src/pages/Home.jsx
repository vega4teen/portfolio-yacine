import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Home() {
  // --- Welcome modal (first visit) ---
  const [showWelcome, setShowWelcome] = useState(false);
  const [lang, setLang] = useState("fr"); // "fr" | "en"

  useEffect(() => {
    const seen = localStorage.getItem("welcomeSeen");
    if (!seen) setShowWelcome(true);
  }, []);

  const closeWelcome = () => {
    localStorage.setItem("welcomeSeen", "1");
    setShowWelcome(false);
  };

  const T = {
    fr: {
      title: "Bienvenue !",
      subtitle: "Merci de visiter mon portfolio.",
      lead:
        "Je suis Yacine Malmi, ingénieur électricien. Parcourez mes projets d’intégration éolienne et réseaux.",
      cta: "Entrer sur le site",
      langLabel: "Langue",
    },
    en: {
      title: "Welcome!",
      subtitle: "Thanks for visiting my portfolio.",
      lead:
        "I’m Yacine Malmi, an electrical engineer. Explore my wind integration and power systems projects.",
      cta: "Enter the website",
      langLabel: "Language",
    },
  };

  // --- Contact form state (unchanged) ---
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
    company: "", // honeypot
  });
  const [status, setStatus] = useState({ state: "idle", message: "" });

  const onChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setStatus({ state: "loading", message: "Envoi en cours…" });

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();

      if (!res.ok || !data.ok) {
        const msg =
          data?.error === "missing-fields"
            ? "Merci de remplir tous les champs."
            : data?.error === "invalid-email"
            ? "Adresse email invalide."
            : "Une erreur est survenue. Réessaie.";
        setStatus({ state: "error", message: msg });
        return;
      }

      setStatus({ state: "success", message: data.message || "Message envoyé ✅" });
      setForm({ name: "", email: "", message: "", company: "" });
    } catch {
      setStatus({ state: "error", message: "Impossible de joindre le serveur." });
    }
  };

  return (
    <>
      {/* --- Welcome Modal (first visit) --- */}
      {showWelcome && (
        <div className="welcome-overlay" role="dialog" aria-modal="true" onClick={closeWelcome}>
          <div
            className="welcome-card"
            onClick={(e) => e.stopPropagation()}
            aria-labelledby="welcome-title"
          >
            <div className="welcome-lang">
              <span>{T[lang].langLabel} :</span>
              <div className="welcome-lang-buttons" role="group" aria-label="Language switch">
                <button
                  className={`chip ${lang === "fr" ? "active" : ""}`}
                  onClick={() => setLang("fr")}
                >
                  🇫🇷 Français
                </button>
                <button
                  className={`chip ${lang === "en" ? "active" : ""}`}
                  onClick={() => setLang("en")}
                >
                  🇬🇧 English
                </button>
              </div>
            </div>

            <h2 id="welcome-title" className="welcome-title">
              {T[lang].title}
            </h2>
            <p className="welcome-sub">{T[lang].subtitle}</p>
            <p className="welcome-lead">{T[lang].lead}</p>

            <div className="welcome-cta">
              <button className="btn primary" onClick={closeWelcome}>
                {T[lang].cta}
              </button>
              <Link to="/projets-universitaires" className="btn btn-secondary" onClick={closeWelcome}>
                🔎 {lang === "fr" ? "Voir mes projets" : "See my projects"}
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* --- Hero section --- */}
      <section className="hero">
        <div className="hero-photo">
          <img src="/yacine.jpg" alt="Yacine Malmi" />
        </div>

        <div className="hero-text">
          <h1>
            Je suis <span className="accent">Yacine MALMI</span>, récemment diplômé
            en ingénierie électrique.
          </h1>

          <p>
            Je suis actuellement à la recherche de mon premier poste en CDI,
            au sein d’une entreprise qui pourrait m’accompagner dans ma progression
            technique et me permettre de travailler sur des projets concrets
            et stimulants.
          </p>

          <p>
            Mon intérêt se porte particulièrement sur les métiers liés à
            l’exploitation, la protection et l’optimisation des réseaux électriques,
            qui représentent pour moi une étape essentielle dans la construction
            de mon parcours professionnel.
          </p>

          <div className="hero-buttons">
            <a href="/CV_Yacine_Malmi.pdf" download className="btn">
              Télécharger mon CV
            </a>
            <a href="#experience" className="btn btn-secondary">
             Mes Expériences Professionnelles
            </a>

          </div>

          {/* --- Contact form --- */}
          <div className="contact-section">
            <h2>💬 Me contacter</h2>
            <form className="form" onSubmit={onSubmit}>
              <input
                type="text"
                name="company"
                value={form.company}
                onChange={onChange}
                style={{ display: "none" }}
                autoComplete="off"
                tabIndex={-1}
              />

              <input
                name="name"
                placeholder="Votre nom"
                value={form.name}
                onChange={onChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Votre email"
                value={form.email}
                onChange={onChange}
                required
              />
              <textarea
                name="message"
                rows="5"
                placeholder="Votre message…"
                value={form.message}
                onChange={onChange}
                required
              />

              <button className="btn" disabled={status.state === "loading"}>
                {status.state === "loading" ? "Envoi…" : "Envoyer le message"}
              </button>
            </form>

            {status.state !== "idle" && (
              <p
                className={
                  status.state === "success" ? "notice success" :
                  status.state === "error" ? "notice error" : "notice"
                }
                style={{ marginTop: 10 }}
              >
                {status.message}
              </p>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
