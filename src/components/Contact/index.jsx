// components/Contact.js
import React from 'react';
import styles from './style.module.css';

const Contact = () => {
  const phoneNumber = '123456789'; // Replace with your phone number
  const defaultMessage = '¡Hola! Estoy interesado en obtener más información.';

  return (
    <div className={styles.contactContainer}>
      <h2 className={styles.contactHeading}>Contact Us</h2>
      <p className={styles.contactText}>Feel free to contact us via WhatsApp.</p>
    </div>
  );
};

export default Contact;
