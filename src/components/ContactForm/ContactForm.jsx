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

  const [mensaje, setMensaje] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const mensajeTexto = `Hola! Mi nombre es ${formData.nombre} ${formData.apellido}. 
Tel: ${formData.telefono} 
Email: ${formData.email} 
Comentario: ${formData.comentario}`;

    const telefonoDestino = "5493512499855"; // <-- Cambiá por el tuyo
    const url = `https://wa.me/${telefonoDestino}?text=${encodeURIComponent(mensajeTexto)}`;

    window.open(url, "_blank");
    setMensaje("Redireccionando a WhatsApp...");
  };

  return (
    <div className={styles.formContainer}>
      <h2 className={styles.title}>Contáctanos</h2>
      <p className={styles.subtitle}>
        Completá el formulario y uno de nuestros vendedores se comunicará con vos.
      </p>
      <form onSubmit={handleSubmit}>
        <div className={styles.row}>
          <input type="text" name="nombre" placeholder="Nombre" value={formData.nombre} onChange={handleChange} required />
          <input type="text" name="apellido" placeholder="Apellido" value={formData.apellido} onChange={handleChange} required />
        </div>
        <div className={styles.row}>
          <input type="tel" name="telefono" placeholder="Teléfono" value={formData.telefono} onChange={handleChange} required />
          <input type="email" name="email" placeholder="E-mail" value={formData.email} onChange={handleChange} required />
        </div>
        <textarea name="comentario" placeholder="Dejá tu mensaje..." value={formData.comentario} onChange={handleChange} rows="5" required />
        <button type="submit">Enviar</button>
      </form>
      {mensaje && <p className={styles.mensaje}>{mensaje}</p>}
    </div>
  );
};

export default ContactForm;
