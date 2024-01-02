// components/Footer.js
import React from 'react';
import { FaInstagram } from 'react-icons/fa';
import styles from './style.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <a href="https://www.instagram.com/your_instagram_account" target="_blank" rel="noopener noreferrer">
        <FaInstagram className={styles.instagramIcon} />
      </a>
      <p>&copy; 2023 Hexopanels. Un producto de <a href="https://www.instagram.com/BJmakers" target="_blank" rel="noopener noreferrer">@BJmakers</a>.</p>
      <p>Pagina hecha por <a href='https://www.flipwebco.com' target="_blank" rel="noopener noreferrer">@FlipWebco</a>.</p>
    </footer>
  );
};

export default Footer;
