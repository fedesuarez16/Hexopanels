import React from 'react';
import styles from './style.module.css'; // Create a CSS module for your styles
import Image from 'next/image';

// Dummy data for the gallery images
const galleryImages = [
  '/images/paneles.jpg',
  '/images/paneles 06.jpg',
  '/images/paneles 07.jpg',
  '/images/4.webp',
  '/images/3.webp',
  '/images/5.webp',
  '/images/6.webp',
  '/images/7.webp',
  '/images/8.webp',
  // Add more image paths as needed
];

export default function Gallery()  {

  return (
    <div className={styles.galleryContainer}>
      <h2 className={styles.galleryTitle}>Customiza cualquier ambiente</h2>
      <div className={styles.imageGrid}>
        {galleryImages.map((image, index) => (
          <div key={index} className={styles.imageItem}>
            <Image
              src={image}
              alt={`Gallery Image ${index + 1}`}
              width={300} // Set the width according to your design
              height={200} // Set the height according to your design
            />
          </div>
        ))}
      </div>
    </div>
  );
}