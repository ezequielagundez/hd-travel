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

  const [mensaje, setMensaje] = useState(""); // Para mostrar mensajes de éxito o error

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
        const response = await fetch("https://script.google.com/macros/s/AKfycbxtilCRJAeJM2Xn0ouaKVA_T69IbbCiy68L0ZweErD-_RJzvXr0Ln5rVc2CP2MfjT_9/exec", {
            method: "POST",
            mode: "no-cors", // 🔥 Esto evita el error de CORS
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        });

        console.log("Formulario enviado con éxito");
    } catch (error) {
        console.error("Error al enviar formulario:", error);
    }
};

  return (
    <div className={styles.formContainer}>
      <h2 className={styles.title}>Contáctanos</h2>
      <p className={styles.subtitle}>
        Comunícate con nosotros y uno de nuestros vendedores se pondrá en contacto para asesorarte.
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
        
        <button type="submit" className={styles.button}>
          Enviar
        </button>
      </form>
      
      {mensaje && <p className={styles.mensaje}>{mensaje}</p>}
    </div>
  );
};

export default ContactForm;
