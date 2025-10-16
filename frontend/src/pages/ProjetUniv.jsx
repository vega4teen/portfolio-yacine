import { useState } from "react";

export default function ProjetUniv() {
  /* ===== PFE ÉOLIEN — Galerie 5 ===== */
  const pfePhotos = [
    { src: "/projets/pfe/1.png", alt: "Schéma REM global" },
    { src: "/projets/pfe/2.png", alt: "Modèle parc éolien (Simulink)" },
    { src: "/projets/pfe/3.png", alt: "Profil de vent & P éolienne" },
    { src: "/projets/pfe/4.png", alt: "Couplage réseau–charge" },
    { src: "/projets/pfe/5.png", alt: "Réglage Q & réponse tension" },
  ];
  const [pfeLb, setPfeLb] = useState({ open: false, idx: 0 });
  const openPfe = (i) => setPfeLb({ open: true, idx: i });
  const closePfe = () => setPfeLb({ open: false, idx: 0 });
  const nextPfe = () => setPfeLb((s) => ({ ...s, idx: (s.idx + 1) % pfePhotos.length }));
  const prevPfe = () => setPfeLb((s) => ({ ...s, idx: (s.idx - 1 + pfePhotos.length) % pfePhotos.length }));

  /* ===== VE — Étude biblio — Galerie 3 ===== */
  const evPhotos = [
    { src: "/projets/pfe/8.png", alt: "Courbe de charge quotidienne avec VE" },
    { src: "/projets/pfe/9.png", alt: "Schéma V2G / V2L" },
    { src: "/projets/pfe/10.png", alt: "Transformateur HTA/BT et contraintes" },
  ];
  const [evLb, setEvLb] = useState({ open: false, idx: 0 });
  const openEv = (i) => setEvLb({ open: true, idx: i });
  const closeEv = () => setEvLb({ open: false, idx: 0 });
  const nextEv = () => setEvLb((s) => ({ ...s, idx: (s.idx + 1) % evPhotos.length }));
  const prevEv = () => setEvLb((s) => ({ ...s, idx: (s.idx - 1 + evPhotos.length) % evPhotos.length }));

  /* ===== STADE DE FRANCE — Galerie 3 ===== */
  const sdPhotos = [
    { src: "/projets/pfe/11.png", alt: "Schéma de distribution électrique HTA " },
    { src: "/projets/pfe/12.png", alt: "Schéma unifilaire du TGBT1 Courants Poste satellite  " },
    { src: "/projets/pfe/13.png", alt: "Sélectivité D1 (bleu foncé) et D2 (bleu clair à gauche) " },
  ];
  const [sdLb, setSdLb] = useState({ open: false, idx: 0 });
  const openSd = (i) => setSdLb({ open: true, idx: i });
  const closeSd = () => setSdLb({ open: false, idx: 0 });
  const nextSd = () => setSdLb((s) => ({ ...s, idx: (s.idx + 1) % sdPhotos.length }));
  const prevSd = () => setSdLb((s) => ({ ...s, idx: (s.idx - 1 + sdPhotos.length) % sdPhotos.length }));

  return (
    <section className="uni">
      <header className="uni-head">
        <h2>Projets universitaires</h2>
        <p className="uni-sub">Modélisation réseau & transition énergétique</p>
      </header>

      {/* ===== PFE EN VEDETTE (ÉOLIEN) ===== */}
      <article className="card pfe-feature">
        <header className="card-head">
          <div>
            <h3>Intégration éolienne & réglage du système électrique (PFE)</h3>
            <div className="uni-meta">M2 GR2E — Université de Lille • MATLAB/Simulink • REM</div>
          </div>
          <span className="status success">✅ Résultats validés</span>
        </header>

        <div className="pfe-grid">
          <div className="pfe-text">
            <p className="lead">
              Projet sur l’intégration technique de l’éolien dans le
             réglage du système électrique . Objectif : démontrer la contribution de l’éolien à la
              régulation de la tension via l’injection de puissance réactive.
            </p>

            <details className="pfe-details" open>
              <summary> Méthodologie (REM & modélisation)</summary>
              <ul className="list">
                <li>Étude réseau & raccordement des éoliennes (production décentralisée).</li>
                <li>Modélisation par REM : parc éolien, lignes, charges, réseaux puissants.</li>
                <li>Validation séparée puis intégration en modèle global.</li>
                <li>Simulink : contrôle bus DC, injection Q, scénarios réseau.</li>
              </ul>
            </details>

            <details className="pfe-details">
              <summary>Résultats principaux</summary>
              <ul className="list">
                <li>Ligne simple : pertes ≈ 1,3 % (théorie = simu).</li>
                <li>Ferme éolienne : profil de vent réaliste, Pmax ≈ 150 MW.</li>
                <li>Deux réseaux puissants couplés : chute de tension au nœud faible 2,48 %.</li>
                <li>Régulation par Q :
                  <ul>
                    <li>Stratégie fixe : Q constant → meilleure tenue de tension.</li>
                    <li>Stratégie dynamique : Q adapté → stabilité nettement meilleure.</li>
                  </ul>
                </li>
                <li>Point optimal : Q ≈ 740 kVAR , dynamique optimale pour α = 0,02.</li>
              </ul>
            </details>

            <div className="chips">
              <span className="chip">REM</span>
              <span className="chip">Régulation de tension</span>
              <span className="chip">Puissance réactive (Q)</span>
              <span className="chip">MATLAB/Simulink</span>
              <span className="chip">150 MW</span>
            </div>
          </div>

          {/* Galerie 5 */}
          <div className="pfe-gallery">
            {pfePhotos.map((ph, i) => (
              <button
                key={i}
                className="pfe-thumb"
                onClick={() => openPfe(i)}
                aria-label={`Ouvrir l’image ${i + 1}`}
              >
                <img src={ph.src} alt={ph.alt} loading="lazy" />
              </button>
            ))}
          </div>
        </div>
      </article>

      {/* ===== PROJET VE — ÉTUDE BIBLIO + GALERIE 3 ===== */}
      <article className="card uni-card" style={{ animationDelay: "80ms" }}>
        <header className="card-head">
          <div>
            <h3>Impact des véhicules électriques sur les réseaux de distribution</h3>
            <div className="uni-meta">Étude bibliographique — Réseaux BT/HTA • Qualité d’énergie</div>
          </div>
        </header>

        <p className="uni-summary">
          Intégration massive des VE : effets sur profils de charge, baisses de tension en bout de ligne,
          saturation des transformateurs HTA/BTbaux pointes et harmoniques liées aux chargeurs.
          Focus sur V2G/V2L et smart charging comme leviers de flexibilité.
        </p>

        <details className="uni-details" open>
          <summary>Voir détails</summary>
          <ul className="list">
            <li>Modes de charge (lente/accélérée/rapide) & technologies batteries/convertisseurs.</li>
            <li>Concepts V2G (véhicule→réseau) et V2L (véhicule→charge) : services réseau potentiels.</li>
            <li>Avec ~20–30 % de VE connectés simultanément : baisses de tension, transformateurs saturés, qualité d’énergie dégradée.</li>
            <li>Mesures : charge différée hors pointe (1h–7h), smart charging, puis V2G pour soutien tension/fréquence.</li>
          </ul>
        </details>

        <div className="chips">
          <span className="chip">Smart Charging</span>
          <span className="chip">V2G / V2L</span>
          <span className="chip">HTA/BT</span>
          <span className="chip">Harmoniques</span>
          <span className="chip">Qualité d’énergie</span>
          <span className="chip">Étude biblio</span>
        </div>

        {/* Galerie 3 */}
        <div className="ev-gallery">
          {evPhotos.map((p, i) => (
            <button key={i} className="ev-thumb" onClick={() => openEv(i)} aria-label={`Ouvrir image ${i + 1}`}>
              <img src={p.src} alt={p.alt} loading="lazy" />
            </button>
          ))}
        </div>
      </article>

      {/* ===== PROJET : Stade de France — Distribution élec ===== */}
      <article className="card uni-card" style={{ animationDelay: "120ms" }}>
        <header className="card-head">
          <div>
            <h3>Étude de la distribution électrique du Stade de France</h3>
            <div className="uni-meta">M2 GR2E — Université de Lille • Caneco BT • AutoCAD • Ecodial • NFC 15-100</div>
          </div>
        </header>

        <p className="uni-summary">
          Conception et analyse du réseau d’alimentation d’une grande infrastructure (17&nbsp;MVA installés,
          21 transformateurs HTA/BT, 6 groupes électrogènes).
        </p>

        <details className="uni-details" open>
          <summary>Travaux réalisés</summary>
          <ul className="list">
            <li>Analyse du schéma unifilaire HTA/BT et repérage des postes satellites.</li>
            <li>Dimensionnement & protections des canalisations principales selon NFC&nbsp;15-100.</li>
            <li>Vérification des chutes de tension et des pouvoirs de coupure des disjoncteurs.</li>
            <li>Traçage & modélisation BT sous Caneco BT : sections, protections, sélectivité.</li>
            <li>Élaboration d’un dossier technique (schémas unifilaires, réglages, bilans de puissance).</li>
          </ul>
        </details>

        <div className="chips">
          <span className="chip">Caneco BT</span>
          <span className="chip">Choix des cables </span>
          <span className="chip">Iccmax et choix Disjoncteur </span>
          <span className="chip">Sélectivité </span>
          <span className="chip">NFC 15-100</span>
          <span className="chip">HTA/BT</span>
        </div>

        {/* Galerie 3 — Stade */}
        <div className="stade-gallery">
          {sdPhotos.map((p, i) => (
            <button key={i} className="stade-thumb" onClick={() => openSd(i)} aria-label={`Ouvrir image ${i + 1}`}>
              <img src={p.src} alt={p.alt} loading="lazy" />
            </button>
          ))}
        </div>

        {/* (Optionnel) Bouton PDF si tu as un dossier */}
        {/* <div className="uni-actions" style={{ marginTop: 10 }}>
          <a className="btn small" href="/projets/stade/dossier_technique.pdf" download>📄 Dossier technique</a>
        </div> */}
      </article>

      {/* ===== Lightboxes ===== */}
      {pfeLb.open && (
        <div className="lb" onClick={closePfe} role="dialog" aria-modal="true">
          <button className="lb-close" onClick={closePfe} aria-label="Fermer">×</button>
          <button className="lb-prev" onClick={(e)=>{e.stopPropagation(); prevPfe();}} aria-label="Précédent">‹</button>
          <img className="lb-img" src={pfePhotos[pfeLb.idx].src} alt={pfePhotos[pfeLb.idx].alt} />
          <button className="lb-next" onClick={(e)=>{e.stopPropagation(); nextPfe();}} aria-label="Suivant">›</button>
          <div className="lb-caption">{pfePhotos[pfeLb.idx].alt}</div>
        </div>
      )}

      {evLb.open && (
        <div className="lb lb-ev" onClick={closeEv} role="dialog" aria-modal="true">
          <button className="lb-close" onClick={closeEv} aria-label="Fermer">×</button>
          <button className="lb-prev" onClick={(e)=>{e.stopPropagation(); prevEv();}} aria-label="Précédent">‹</button>
          <img className="lb-img" src={evPhotos[evLb.idx].src} alt={evPhotos[evLb.idx].alt} />
          <button className="lb-next" onClick={(e)=>{e.stopPropagation(); nextEv();}} aria-label="Suivant">›</button>
          <div className="lb-caption">{evPhotos[evLb.idx].alt}</div>
        </div>
      )}

      {sdLb.open && (
        <div className="lb lb-stade" onClick={closeSd} role="dialog" aria-modal="true">
          <button className="lb-close" onClick={closeSd} aria-label="Fermer">×</button>
          <button className="lb-prev" onClick={(e)=>{e.stopPropagation(); prevSd();}} aria-label="Précédent">‹</button>
          <img className="lb-img" src={sdPhotos[sdLb.idx].src} alt={sdPhotos[sdLb.idx].alt} />
          <button className="lb-next" onClick={(e)=>{e.stopPropagation(); nextSd();}} aria-label="Suivant">›</button>
          <div className="lb-caption">{sdPhotos[sdLb.idx].alt}</div>
        </div>
      )}
    </section>
  );
}
