import { useEffect, useState } from "react";

export default function NavBar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onResize = () => { if (window.innerWidth > 960) setOpen(false); };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <header className="nav" role="banner">
      <div className="nav-brand">
        <a href="#home" className="brand" onClick={close}>
          <span className="brand-dot" aria-hidden="true" /> Yacine<span className="brand-accent">.👨‍💻ML⚡</span>
        </a>
      </div>

      <button
        className="nav-toggle"
        aria-expanded={open}
        aria-controls="nav-panel"
        aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
        onClick={() => setOpen(v => !v)}
      >
        <span className={`bar ${open ? "x" : ""}`} />
      </button>

      <nav className="links desktop" aria-label="Navigation principale">
        <a href="#home" className="link">Accueil</a>
        <a href="#experience" className="link">Expériences</a>
        <a href="#resume" className="link">Parcours</a>
        <a href="#projects" className="link">Projets</a>
        <a href="#skills" className="link">Savoir-faire</a>
        <a href="#contact" className="link">Contact</a>
      </nav>

      <div className={`nav-panel ${open ? "open" : ""}`} id="nav-panel" role="dialog" aria-modal="true">
        <nav className="links mobile" aria-label="Navigation mobile">
          <a href="#home" className="mlink" onClick={close}>Accueil</a>
          <a href="#experience" className="mlink" onClick={close}>Expériences</a>
          <a href="#resume" className="mlink" onClick={close}>Parcours</a>
          <a href="#projects" className="mlink" onClick={close}>Projets</a>
          <a href="#skills" className="mlink" onClick={close}>Savoir-faire</a>
          <a href="#contact" className="mlink" onClick={close}>Contact</a>
        </nav>
      </div>

      {open ? <button className="nav-backdrop" aria-label="Fermer" onClick={close} /> : null}
    </header>
  );
}
