import { useState } from "react"
import { Mail, Linkedin, Phone, MapPin, Send } from "lucide-react"

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" })

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((s) => ({ ...s, [name]: value }))
  }

  // Formulaire sans backend : ouvre le client e-mail avec un message prérempli
  const handleSubmit = (e) => {
    e.preventDefault()
    const to = "malmiyacine14@gmail.com"
    const subject = encodeURIComponent(`Contact portfolio — ${form.name || "Visiteur"}`)
    const body = encodeURIComponent(
      `Nom: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`
    )
    window.location.href = `mailto:${to}?subject=${subject}&body=${body}`
  }

  return (
    <section className="contact">
      <header className="contact-header">
        <h2>Contact</h2>
        <p>Restons connectés — disponible pour échanges et opportunités.</p>
      </header>

      <div className="contact-card">
        {/* Coordonnées */}
        <div className="contact-info">
          <div className="contact-item">
            <Mail className="icon" />
            <a href="mailto:malmiyacine14@gmail.com">malmiyacine14@gmail.com</a>
          </div>

          <div className="contact-item">
            <Phone className="icon" />
            <a href="tel:+33783302469">+33 7 83 30 24 69</a>
          </div>

          <div className="contact-item">
            <Linkedin className="icon" />
            <a
              href="https://www.linkedin.com/in/yacine-malmi-2b3865254/"
              target="_blank"
              rel="noreferrer"
            >
              Mon profil LinkedIn
            </a>
          </div>

          <div className="contact-item">
            <MapPin className="icon" />
            <span>Basé en France • Mobilité possible</span>
          </div>
        </div>

        {/* Boutons rapides */}
        <div className="contact-cta">
          <a href="mailto:malmiyacine14@gmail.com" className="btn primary">📩 Envoyer un e-mail</a>
          <a
            href="https://www.linkedin.com/in/yacine-malmi-2b3865254/"
            target="_blank"
            rel="noreferrer"
            className="btn secondary"
          >
            🔗 Voir mon LinkedIn
          </a>
        </div>
      </div>
    </section>
  )
}
