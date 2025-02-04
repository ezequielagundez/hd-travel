import React, { useState } from "react";
import styles from "./ContactForm.module.css";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    telefono: "",
    email: "",
    comentario: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Formulario enviado:", formData);
    // Aquí puedes integrar la lógica para enviar datos al backend
  };

  return (
    <div className={styles.formContainer}>
      <h2 className={styles.title}>Contactanos</h2>
      <p className={styles.subtitle}>
        Comunicate con nosotros y uno de nuestros vendedores se comunicará con
        vos para darte asesoramiento
      </p>
      <form onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <input
            type="text"
            name="nombre"
            placeholder="Nombre"
            value={formData.nombre}
            onChange={handleChange}
            className={styles.input}
            required
          />
          <input
            type="text"
            name="apellido"
            placeholder="Apellido"
            value={formData.apellido}
            onChange={handleChange}
            className={styles.input}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <input
            type="tel"
            name="telefono"
            placeholder="Teléfono"
            value={formData.telefono}
            onChange={handleChange}
            className={styles.input}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="E-mail"
            value={formData.email}
            onChange={handleChange}
            className={styles.input}
            required
          />
        </div>
        <textarea
          name="comentario"
          placeholder="Deje su comentario..."
          value={formData.comentario}
          onChange={handleChange}
          rows="5"
          className={styles.textarea}
          required
        ></textarea>
        <div className={styles.captcha}>
          {/* Aquí podrías implementar reCAPTCHA */}
          
        </div>
        <button type="submit" className={styles.button}>
          Enviar
        </button>
      </form>
    </div>
  );
};

export default ContactForm;