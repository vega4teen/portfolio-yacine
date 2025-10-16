import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
       

        {/* Bloc centre : bouton contact */}
        <div className="footer-action">
          <Link to="/contact" className="btn btn-footer"> Me contacter</Link>
        </div>

        {/* Bloc droit : signature */}
        <div className="footer-right">
          <p className="footer-msg">
            Développé et programmé avec ❤️ par <strong>Yacine Malmi</strong>.
          </p>
          <p className="footer-copy">© {new Date().getFullYear()} Tous droits réservés</p>
        </div>
      </div>
    </footer>
  );
}
