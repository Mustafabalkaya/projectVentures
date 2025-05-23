import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-column">
          <h4>İletişim</h4>
          <p><a href="mailto:ventures@ventures.com.tr">ventures@ventures.com.tr</a></p>
          <p>0212 212 21 12 - 13</p>
        </div>
        <div className="footer-column">
          <h4>İstanbul</h4>
          <p>
            Hakkı Yeten Cad. Selenium Plaza No:10 Kat:5 Beşiktaş<br />
            – İstanbul, 34349
          </p>
        </div>
        <div className="footer-column footer-social">
          <div className="social-icons">
            <a href=" "><i className="fab fa-facebook-f" /></a>
            <a href=" "><i className="fab fa-x-twitter" /></a>
            <a href=" "><i className="fab fa-youtube" /></a>
            <a href=" "><i className="fab fa-instagram" /></a>
            <a href=" "><i className="fab fa-linkedin-in" /></a>
            <a href=" "><i className="fab fa-behance" /></a>
          </div>
          <Link to="/iletisim#contact">
            <button className="footer-button">Bizimle İletişime Geçin</button>
          </Link>
        </div>
      </div>

      <hr />

  <div className="footer-bottom">
  <p>© Ventures Project {new Date().getFullYear()}</p>
</div>
    </footer>
  );
};

export default Footer;
