import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

export default function NavBar() {
  const [open, setOpen] = useState(false);

  // Ferme le menu quand on change de taille (ex. rotation) ou quand on navigue
  useEffect(() => {
    const onResize = () => { if (window.innerWidth > 960) setOpen(false); };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // Empêche le scroll du body quand le menu mobile est ouvert
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <header className="nav" role="banner">
      <div className="nav-brand">
        <NavLink to="/" className="brand" onClick={close}>
          <span className="brand-dot" aria-hidden="true" /> Yacine<span className="brand-accent">.👨‍💻ML⚡ </span>
        </NavLink>
      </div>

      {/* Bouton hamburger visible seulement en mobile */}
      <button
        className="nav-toggle"
        aria-expanded={open}
        aria-controls="nav-panel"
        aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
        onClick={() => setOpen(v => !v)}
      >
        <span className={`bar ${open ? "x" : ""}`}/>
      </button>

      {/* Liens desktop */}
      <nav className="links desktop" aria-label="Navigation principale">
         <a href="#home" className="link">Accueil</a>
        <a href="#experience" className="link">Expériences</a>
         <a href="#resume" className="link">Parcours</a>
         <a href="#projects" className="link">Projets</a>
         <a href="#skills" className="link">Savoir Faire</a>
        <a href="#contact" className="link">Contact</a>
      </nav>

      {/* Panneau mobile */}
      <div className={`nav-panel ${open ? "open" : ""}`} id="nav-panel" role="dialog" aria-modal="true">
        <nav className="links mobile" aria-label="Navigation mobile">
          <NavLink to="/" end className="mlink" onClick={close}>Accueil</NavLink>
          <NavLink to="/experience" className="mlink" onClick={close}>Expériences</NavLink>
          <NavLink to="/resume" className="mlink" onClick={close}>Parcours</NavLink>
          <NavLink to="/projets-universitaires" className="mlink" onClick={close}>Projets universitaires</NavLink>
          <NavLink to="/Skills" className="link">Savoir Faire</NavLink>
          <NavLink to="/contact" className="mlink" onClick={close}>Contact</NavLink>
        </nav>
      </div>

      {/* Voile de fond quand menu ouvert (mobile) */}
      {open && <button className="nav-backdrop" aria-label="Fermer" onClick={close} />}
    </header>
  );
}
