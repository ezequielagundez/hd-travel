import React from 'react';
import { FaWhatsapp, FaFacebook, FaInstagram } from 'react-icons/fa';
import './SocialLinks.css';

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
        <div className="modal-container">
          <div className="modal-content">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/1022px-WhatsApp.svg.png" alt="WhatsApp" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialLinks;
