export default function Experience() {
  return (
    <section className="xp container">
      <header className="xp-header">
        <div>
          <h2 className="xp-title">Stage de fin d’études — RTE Nancy (PEASI)</h2>
          <p className="xp-subtitle">Mars → Septembre 2025 • Protection, Contrôle-Commande & Outils digitaux</p>
        </div>
        <div className="xp-badges">
          <span className="badge">Coordination des protections</span>
          <span className="badge">Réseau THT/HT</span>
          <span className="badge">Excel</span>
          <span className="badge">Python/Flask</span>
          <span className="badge">MySQL</span>
          <span className="badge">Convergence</span>
          <span className="badge">Posit Connect</span>
          <span className="badge">Git</span>
        </div>
      </header>

      <p className="xp-intro">
        Réalisé au sein du Pôle Études Automatismes et Systèmes Industriels (PEASI) de RTE Nancy,
        ce stage a renforcé mes compétences en protection, contrôle-commande et
        exploitation des réseaux, tout en contribuant à la digitalisation des outils internes.
      </p>

      {/* --- PARTIE 1 : ParamTranche --- */}
      <article className="card">
        <div className="card-head">
          <h3> ParamTranche (Accès instantané via QR codes)</h3>
          <span className="status success"> En production — Lorraine</span>
        </div>

        <div className="grid-2">
          <div className="col">
            <p>
              J’ai conçu et déployé une application interne qui permet aux intervenants d’accéder immédiatement
              aux paramètres de protection et de contrôle-commande,
              aux schémas électriques et aux documents d’une tranche (départ/liaison) en
              scannant un QR code apposé sur l’équipement.
            </p>

            <div className="callout">
              <strong>Principe</strong>  On saisit le <em>nom du site</em> → l’application génère les QR pour
               tous les départs  les étiquettes sont collées sur chaque tranche BT.
              Un scan affiche une page dynamique (PX, TC/TCT, schémas électriques/Télécom, rapports,Capteurs,Equipemens CC...).
            </div>
          </div>

          <div className="col">
            <h4 className="h4-muted">Fonctionnement & outils</h4>
            <ul className="list">
              <li>Python (Flask), API + vues</li>
              <li>Base de données <strong>MySQL</strong> (sites, départs, paramètres)</li>
              <li>Front simple : HTML/CSS/JS</li>
              <li>génération QR, logs, variables d’environnement</li>
              <li>Versionning <strong>Git</strong></li>
            </ul>
          </div>
        </div>

        <div className="chips">
          <span className="chip">QR codes uniques / départ</span>
          <span className="chip">Paramètres CC / protection</span>
          <span className="chip">Réduction des recherches terrain</span>
          <span className="chip">Traçabilité & fiabilité</span>
        </div>
      </article>

      {/* --- PARTIE 2 : Études de réglages --- */}
      <article className="card">
        <h3>Études de réglages (Protections & Contrôle-Commande)</h3>
        <p>
          Études de réglage et de coordination des protections HTA/HTB pour garantir
           sélectivité et continuité de service.
        </p>

        <div className="grid-2">
          <div className="col">
            <h4 className="h4-muted">Missions principales</h4>
            <ul className="list">
              <li>Analyse des schémas unifilaires et périmètres de protection</li>
              <li>Réglages relais de distance (PX) : zones Z1→Z4 & temporisations T1→T4</li>
              <li>Simulations défauts (tri/mono) sous Convergence (coeff. d’injection)</li>
              <li>Contrôle-commande : calculateurs, capteur, TéléAction(verr,acc) Automates</li>
            </ul>
          </div>

          <div className="col">
            <div className="kpi">
              <div><span className="kpi-num">Z1–Z4</span><span className="kpi-label">Zones distance</span></div>
              <div><span className="kpi-num">T1–T4</span><span className="kpi-label">Temporisations</span></div>
              <div><span className="kpi-num">Automates,Capteurs,Smart Electre , Rspace</span><span className="kpi-label">Contrôle-commande </span></div>
              
              <div><span className="kpi-num">HTA/HTB</span><span className="kpi-label">Niveaux</span></div>
            </div>
          </div>
        </div>
      </article>

      {/* --- PARTIE 3 : Végétalisation --- */}
      <article className="card">
        <h3> Étude de faisabilité Végétalisation poste RTE (zéro phyto)</h3>
        <p>
          Évaluation de la compatibilité d’une végétalisation avec les contraintes de sécurité électrique
          et de résistivité du sol.
        </p>

        <div className="grid-2">
          <div className="col">
            <h4 className="h4-muted">Méthodologie</h4>
            <ul className="list">
              <li>Rapports de résistivité, câbles de garde, schémas de mise à la terre</li>
              <li>Apports homopolaires (Convergence)</li>
              <li>Temps de déclenchement maximaux (postes encadrants + temps disjoncteur)</li>
              <li>Rapport technique : zones végétalisables & recommandations</li>
            </ul>
          </div>
          <div className="col">
            <div className="callout info">
              <strong>Impact</strong> — Mise en cohérence <em>aspects électriques</em>, <em>géotechniques</em> et
              <em> environnementaux</em> pour une approche opérationnelle.
            </div>
          </div>
        </div>
      </article>

      {/* --- PARTIE 4 : Bilan --- */}
      <article className="card">
        <h3>Bilan du stage</h3>
        <p>
          Vision globale du réseau de transport, des outils numériques et des exigences de sûreté.
          Développement de l’<strong>autonomie</strong>, de la <strong>rigueur</strong> et de l’<strong>adaptabilité</strong>.
        </p>
        <div className="chips">
          <span className="chip">Études protections</span>
          <span className="chip">Contrôle-commande</span>
          <span className="chip">Digitalisation outils</span>
          <span className="chip">Documentation technique</span>
        </div>
      </article>
      {/* --- PARTIE 5 : ONCF --- */}
<article className="card oncf">
  <header className="card-head">
    <h3> Stagiaire Électrotechnique Alimentation Sans Interruption & Signalisation Ferroviaire</h3>
     <span className="status warm"> Office National des Chemins de Fer (ONCF) — Maroc</span>
  </header>

  <p className="xp-subtitle">Avril 2022 → Juillet 2022 • Stage sur site (4 mois)</p>

  <p>
    Durant ce stage, j’ai travaillé sur mon sujet principal intitulé 
    Alimentation sans interruption de la signalisation ferroviaire , 
    un enjeu essentiel pour garantir la continuité du service et la 
     sécurité des circulations en cas de coupure d’électricité.
  </p>

  <div className="grid-2">
    <div className="col">
      <h4 className="h4-muted">Sujet et objectifs</h4>
      <p>
        L’objectif était de concevoir et d’analyser un système d’alimentation de secours  
        capable de maintenir la signalisation opérationnelle lors d’une perte du réseau principal.  
        Ce système repose sur une chaîne d’alimentation intégrant :
      </p>
      <ul className="list">
        <li>Un <strong>groupe électrogène</strong> pour la reprise automatique de la charge en cas de coupure.</li>
        <li>Un <strong>onduleur</strong> pour fournir une tension continue stable sans interruption.</li>
        <li>Des <strong>batteries</strong> et un <strong>redresseur</strong> pour le stockage et la conversion d’énergie.</li>
        <li>Un <strong>moteur à courant continu</strong> simulant la charge du système de signalisation.</li>
      </ul>
    </div>

    <div className="col">
      <h4 className="h4-muted">Travaux réalisés</h4>
      <ul className="list">
        <li>Conception et modélisation du schéma global de l’ASI sous <strong>PSIM</strong> et <strong>Simulink</strong>.</li>
        <li>Analyse du comportement dynamique lors du basculement réseau → secours.</li>
        <li>Étude des temps de réponse et de la stabilité des tensions de sortie.</li>
        <li>Participation aux essais et à la maintenance des équipements sur site ONCF.</li>
      </ul>
    </div>
  </div>

  <div className="callout info" style={{ marginTop: "12px" }}>
    <strong>Bilan :</strong> cette expérience m’a permis de relier la <em>théorie de l’électrotechnique</em> 
    à des applications ferroviaires réelles. J’ai approfondi ma compréhension des 
    <strong> systèmes d’alimentation de secours</strong> et acquis une solide expérience en 
    <strong> modélisation, diagnostic</strong> et <strong>fiabilité énergétique</strong>.
  </div>

  <div className="chips">
    <span className="chip">Alimentation sans interruption</span>
    <span className="chip">Signalisation ferroviaire</span>
    <span className="chip">Groupes électrogènes</span>
    <span className="chip">Onduleurs & Batteries</span>
    <span className="chip">PSIM</span>
    <span className="chip">Simulink</span>
  </div>
</article>

    </section>
  );
}
