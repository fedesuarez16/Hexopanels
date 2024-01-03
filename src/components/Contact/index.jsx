// components/Contact.js
import React from 'react';
import { FaWhatsapp } from 'react-icons/fa'; // Importa el ícono de WhatsApp
import styles from './style.module.css';

const Contact = () => {
  const phoneNumber = '123456789'; // Reemplaza con tu número de teléfono
  const defaultMessage = '¡Hola! Estoy interesado en obtener más información.';

  return (
    <div className={styles.contactContainer}>
      <h2 className={styles.contactHeading}>HACE TU PEDIDO</h2>
      <p className={styles.contactText}>Hace tu consulta y responderemos en breve.</p>
      
      {/* Botón de contacto con el logo de WhatsApp */}
      <a
        href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(defaultMessage)}`}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.whatsappButton}
      >
        <FaWhatsapp className={styles.whatsappIcon} />
        Contactar por WhatsApp
      </a>
    </div>
  );
};

export default Contact;
