import React from "react";
import ContactForm from "../../components/ContactForm/ContactForm";
import styles from "./Contacto.module.css"

function Contacto(params) {
    return(<>
    <div className={styles.contact}>
        <h1 >🌎 Planea tu próxima aventura con nosotros </h1>
        <p>Llámenos por teléfono para consultar sobre destinos y nuestros productos:</p>
        <p >📞 <strong>Llámanos:</strong> +54 9 351 XXXX XXXX</p>
        <p >📩 <strong>Escríbenos:</strong> contacto@hdviajes.com</p>
    </div>
    


    <ContactForm/>
    </>)
}

export default Contacto;