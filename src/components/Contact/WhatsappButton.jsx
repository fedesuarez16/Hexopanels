// components/WhatsAppButton.js
import React from 'react';
import styles from './style.module.css'; // Create a CSS module for your styles
import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppButton = ({ phoneNumber, message }) => {
  const handleWhatsAppClick = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <button className={styles.whatsappButton} onClick={handleWhatsAppClick}>
      <FaWhatsapp className={styles.whatsappIcon} />
      Contact via WhatsApp
    </button>
  );
};

export default WhatsAppButton;
