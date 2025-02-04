import React from "react";
import styles from "./Footer.module.css";

function Footer() {

  const currentYear = new Date().getFullYear();
  return (
    <footer className={styles.footer}>
      {/* Sección Superior */}
      <div className={styles.footerTop}>
        <div className={styles.socialMedia}>
          <p>Seguinos</p>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/733/733547.png"
              alt="Facebook"
            />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/733/733558.png"
              alt="Instagram"
            />
          </a>
        </div>
        <div className={styles.footerInfo}>
          <p>
            <i className="fa-solid fa-location-dot"></i> Córdoba
          </p>
          <p>
            <i className="fa-solid fa-clock"></i> Lunes a Viernes de 09:00 hs a
            18:30 hs
          </p>
        </div>
        <div className={styles.footerLinks}>
          <a href="#docs">Documentación para salir del país</a>
          <a href="#terms">Condiciones Generales de Contratación</a>
          <a href="#cancelation">Políticas de cancelación</a>
        </div>
      </div>

      {/* Sección Inferior */}
      <div className={styles.footerBottom}>
        <p>
          HD Travel <br />
          <strong>Razón Social:</strong> --------------- <br />
          <strong>CUIT:</strong> ------------ <br />
          <strong>Tipo:</strong> --------- (<a href="#license">ver licencia</a>)
        </p>
        <img
          src="https://via.placeholder.com/100x50"
          alt="Certificado Local Virtual"
          className={styles.certificado}
        />
        <p>
          &copy; {currentYear} Dai Viajes. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
