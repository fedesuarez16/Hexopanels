// Import necessary libraries and styles
import React from 'react';
import styles from './style.module.css'; // Assuming you have a CSS module for your styles
import Image from 'next/image';

export default function Navbar() {
    return (
        <nav className={styles.navbar}>
            <div className={styles.navbarContent}>
                {/* You can add your logo or any other content here */}
                <div className={styles.logoContainer}>
                    <Image
                        src={`/images/logo.png`}
                        width={60} // Set the width according to your design
                        height={50} // Set the height according to your design
                        objectFit="contain" // Ensure the image is contained within the dimensions
                        alt="project image"
                        priority={true}
                    /> 
                </div>

                {/* Navigation items */}
                <ul className={styles.navList}>
                    <li className={styles.navItem}>
                        <a href="#section1">Producto</a>
                    </li>
                    <li className={styles.navItem}>
                        <a href="#section2">Acerca</a>
                    </li>
                    <li className={styles.navItem}>
                        <a href="#section2">Contacto</a>
                    </li>
                    {/* Add more navigation items as needed */}
                </ul>
            </div>
        </nav>
    );
}
