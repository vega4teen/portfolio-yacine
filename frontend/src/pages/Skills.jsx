export default function Skills() {
  const categories = [
    {
      title: "Contrôle-commande",
      items: [
        "Réglage et paramétrage des protections HTA/HTB",
        "Conception de logiques câblées",
      ],
    },
    {
      title: "Études électriques",
      items: [
        "Coordination des protections",
        "Calculs d’impédances et chutes de tension",
        "Dimensionnement d’équipements et de postes HTA/BT",
      ],
    },
    {
      title: "Simulation",
      items: [
        "Modélisation sous MATLAB/Simulink & PSIM",
        "Validation des schémas de contrôle et de protection",
      ],
    },
    {
      title: "Programmation",
      items: [
        "Python (avancé), Flask (API & vues), MySQL (expert)",
        "Excel (outillage, automatisation de calculs)",
        "Git (workflow, branches, déploiement)",
      ],
    },
    {
      title: "CAO & Documentation",
      items: [
        "Caneco BT, AutoCAD",
        "Rédaction de notes techniques et dossiers de réglages",
      ],
    },
  ];

  // Place ces fichiers dans: frontend/public/icons/ (noms à respecter)
  const tools = [
    { name: "Python", file: "python.png" },
    { name: "JavaScript", file: "flask.png" },
    { name: "MySQL", file: "mysql.png" },
    { name: "MATLAB", file: "matlab.png" },
    { name: "Simulink", file: "simulink.png" },
    { name: "PSIM", file: "psim.png" },
    { name: "Excel", file: "excel.png" },
    { name: "Caneco BT", file: "caneco.png" },
    { name: "AutoCAD", file: "autocad.png" },
    { name: "Plecs", file: "plecs.png" },
    { name: "Step7", file: "step.png" },
    { name: "TinkerCard", file: "tinkercard.png" },
    { name: "GIT", file: "git.png" },
    { name: "Html", file: "html.png" },
    { name: "Css", file: "css.png" },
    { name: "React", file: "react.png" },
    { name: "Arduino", file: "arduino.png" },
    
  ];

  return (
    <section className="skills">
      <header className="skills-head">
        <h2>Compétences</h2>
        <p className="skills-sub">Synthèse des savoir-faire acquis en formation et en stages</p>
      </header>

      {/* Catégories */}
      <div className="skills-cats">
        {categories.map((c, i) => (
          <article key={i} className="skills-cat">
            <h3>{c.title}</h3>
            <ul>
              {c.items.map((it, j) => <li key={j}>{it}</li>)}
            </ul>
          </article>
        ))}
      </div>

      {/* Outils & logiciels */}
      <h3 className="tools-title">Outils & logiciels</h3>
      <div className="tools-grid">
        {tools.map((t) => (
          <div className="tool" key={t.name} title={t.name}>
            <div className="tool-icon">
              <img
                src={`/icons/${t.file}`}
                alt={t.name}
                onError={(e) => {
                  // Fallback si le logo est manquant
                  e.currentTarget.style.display = "none";
                  e.currentTarget.parentElement?.classList.add("fallback");
                  e.currentTarget.parentElement?.setAttribute("data-fallback", t.name[0]);
                }}
              />
            </div>
            <div className="tool-name">{t.name}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
