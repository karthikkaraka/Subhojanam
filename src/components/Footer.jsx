import "../styles/footer.css"
import logo from "../assets/logo.png"
import { FaWhatsapp, FaYoutube, FaInstagram, FaFacebookF, FaRss } from "react-icons/fa"



function Footer() {
  return (
    <footer className="footer">

      <div className="footer-top">

        <div className="footer-left">
          <img src={logo} alt="Logo" />
          <h3>Subhojanam – ISKCON Hospital Feeding Program</h3>
        </div>

        <div className="footer-center">
          <h4>Address</h4>
          <p>
            📍 KGH Down Rd, beside orthopedic ward,<br />
            Maharani Peta, Visakhapatnam, AP 530002
          </p>
        </div>

        <div className="footer-right">
          <h4>Quick Links</h4>
          <ul>
            <li>About</li>
            <li>Impact</li>
            <li>Stories</li>
            <li>Transparency</li>
            <li>FAQ</li>
            <li>Donate</li>
          </ul>
        </div>

      </div>

      <div className="footer-social">
         <FaWhatsapp />
        <FaYoutube />
        <FaInstagram />
        <FaFacebookF />
        <FaRss />
      </div>

      <hr />

      <div className="footer-bottom">
        © 2026 ISKCON Visakhapatnam — Subhojanam Seva | Privacy | Terms
      </div>

    </footer>
  )
}

export default Footer
