import React from 'react';
import { FaWhatsapp, FaFacebook, FaInstagram } from 'react-icons/fa';
import './SocialLinks.css'; // Aquí pones tus estilos

const SocialLinks = () => {
  return (
    <div>
    <div className="social-links">
      <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer">
        <FaWhatsapp />
      </a>
      <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
        <FaFacebook />
      </a>
      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
        <FaInstagram />
      </a>
    </div>
    <div className="social-whatsapp">
      <img width= "300px" src="https://www.diagnosweb.com/wp-content/uploads/2021/02/whatsapp.png" alt="" />
    </div>
    </div>
  );
};

export default SocialLinks;