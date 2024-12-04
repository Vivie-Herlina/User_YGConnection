import React from "react";
import { Link } from "react-router-dom";
import "./style.css"; // Salin CSS yang sesuai di file ini

const Footer = () => {
  return (
    <footer>
      <div className="footer-links">
        <Link to="/terms-of-use">Terms of Use</Link>
        <Link to="/privacy-policy">Privacy Policy</Link>
        <Link to="/cookie-policy">Cookie Policy</Link>
        <Link to="/announcements">Announcements</Link>
      </div>
      <div className="footer-info">
        <p>
          Brand Inc. | CEO: SHABRINA ZAHRA AULIA CALL CENTER (+62)21-3452-1312 FAX
          (+62)21-4242-6565
        </p>
        <p>
          ADDRESS Jl. KH. Ahmad Dahlan Kby. No.14A, RT.2/RW.1, Kramat Pela, Kec.
          Kby. Baru, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12130
        </p>
        <p>© BRAND COMPANY Inc.</p>
      </div>
    </footer>
  );
};

export default Footer;
