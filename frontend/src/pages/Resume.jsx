export default function Resume() {
  return (
    <section className="edu">
      <header className="edu-head">
        <h2>Parcours</h2>
        <p className="edu-sub">Formations en électrotechnique, réseaux électriques, énergies renouvelables, automatique et informatique industrielle.</p>
      </header>

      <div className="edu-timeline">
        {/* M2 */}
        <article className="edu-item" style={{ animationDelay: "0ms" }}>
          <div className="edu-dot" />
          <div className="edu-card">
            <div className="edu-row">
              <h3 className="edu-title">Master 2 — Gestion des Réseaux d’Énergie Électrique (GR2E)</h3>
              <span className="edu-period">2024–2025</span>
            </div>
            <div className="edu-meta">Université de Lille</div>
            <p className="edu-details">
              Réseaux électriques, protections HTA/HTB, stabilité système, smart grids, marchés de l’énergie.
            </p>

            {/* Contenu détaillé M2 */}
            <details className="edu-details-block">
              <summary>Voir la maquette M2 (UE)</summary>
              <ul className="edu-list">
                <li><strong>A/C</strong> — Anglais / Communication (TOEIC, communication pro orale & écrite)</li>
                <li><strong>RE</strong> — Généralités des Réseaux Électriques (modélisation, qualité d’énergie, protection & sécurité)</li>
                <li><strong>RT</strong> — Réseaux Électriques Terrestres (production, transport, distribution)</li>
                <li><strong>PB</strong> — Projet bibliographique</li>
                <li><strong>PFE</strong> — Projet de fin d’étude</li>
                <li><strong>EB</strong> — Énergie électrique & Bâtiment (bâtiment producteur, stockage/optimisation)</li>
                <li><strong>GSE</strong> — Gestion des Systèmes Électriques (gestion de l’énergie dans les systèmes)</li>
              </ul>
            </details>

            <div className="edu-actions">
              {/* Mets ton PDF M2 dans /public et ajuste le nom si besoin */}
              <a href="/Maquette_Master2_GR2E.pdf" download className="btn small">📄 Maquette M2</a>
            </div>
          </div>
        </article>

        {/* M1 */}
        <article className="edu-item" style={{ animationDelay: "100ms" }}>
          <div className="edu-dot" />
          <div className="edu-card">
            <div className="edu-row">
              <h3 className="edu-title">Master 1 — Automatique & Systèmes Électriques</h3>
              <span className="edu-period">2023–2024</span>
            </div>
            <div className="edu-meta">Université de Lille</div>
            <p className="edu-details">Commande, modélisation, électronique de puissance, systèmes & signaux.</p>

            {/* Détail M1 (selon l’image fournie) */}
            <details className="edu-details-block">
              <summary>Voir la maquette M1 (BCC & UE)</summary>
              <div className="edu-bcc">
                <div className="bcc">
                  <div className="bcc-head">
                    <span className="bcc-title">BCC 1 — Maîtrise de la modélisation & commande des systèmes</span>
                    <span className="bcc-credits">10 crédits</span>
                  </div>
                  <ul className="edu-list">
                    <li>UE 1 — Systèmes automatisés</li>
                    <li>UE 2 — Signaux & systèmes</li>
                  </ul>
                </div>

                <hr className="bcc-sep" />

                <div className="bcc">
                  <div className="bcc-head">
                    <span className="bcc-title">BCC 2 — Concepts & outils pour la conversion d’énergie</span>
                    <span className="bcc-credits">10 crédits</span>
                  </div>
                  <ul className="edu-list">
                    <li>UE 1 — Systèmes énergétiques</li>
                    <li>UE 2 — Composants de conversion d’énergie</li>
                  </ul>
                </div>
              </div>
            </details>

            <div className="edu-actions">
              <a href="/Maquette_Master1_ASE.pdf" download className="btn small">📄 Maquette M1</a>
            </div>
          </div>
        </article>

        {/* L3 */}
        <article className="edu-item" style={{ animationDelay: "200ms" }}>
          <div className="edu-dot" />
          <div className="edu-card">
            <div className="edu-row">
              <h3 className="edu-title">Licence 3 — Électronique, Énergie Électrique, Automatique (EEA)</h3>
              <span className="edu-period">2022–2023</span>
            </div>
            <div className="edu-meta">Université de Perpignan</div>
            <p className="edu-details">Électrotechnique, électronique, automatique, instrumentation.</p>

            <div className="edu-actions">
              {/* Lien direct vers le PDF joint — garde le nom exact OU renomme en L3_EEA.pdf */}
              <a
                href="/L3%20Electronique%20Energie%20Energie%20Automatique.pdf"
                download
                className="btn small"
                title="Télécharger la maquette L3 (PDF)"
              >
                📄 Maquette L3
              </a>
            </div>
          </div>
        </article>

        {/* DUT */}
        <article className="edu-item" style={{ animationDelay: "300ms" }}>
          <div className="edu-dot" />
          <div className="edu-card">
            <div className="edu-row">
              <h3 className="edu-title">DUT — Génie Électrique & Informatique Industrielle (GEII)</h3>
              <span className="edu-period">2020–2022</span>
            </div>
            <div className="edu-meta">Université Mohammed V (Rabat, Maroc)</div>
            <p className="edu-details">Machines électriques, automatisme, réseaux industriels, maintenance.</p>
          </div>
        </article>

        {/* Bac */}
        <article className="edu-item" style={{ animationDelay: "400ms" }}>
          <div className="edu-dot" />
          <div className="edu-card">
            <div className="edu-row">
              <h3 className="edu-title">Baccalauréat — Sciences & Techniques Électriques</h3>
              <span className="edu-period">2019–2020</span>
            </div>
            <div className="edu-meta">Maroc</div>
            <p className="edu-details">Electrotechnique, informatique Industrielle.</p>
          </div>
        </article>
      </div>
    </section>
  );
}
