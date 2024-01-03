

import React, { useState, useEffect, useRef } from 'react';
import styles from './style.module.css';
import Image from 'next/image';
import gsap from 'gsap';

const projects = [
    {
        title: "Salar de Atacama",
        src: "Paneles.jpg"
    },
    // ... (other project details)
];

export default function Index() {
    const [selectedProject, setSelectedProject] = useState(0);
    const container = useRef(null);
    const imageContainer = useRef(null);

    useEffect(() => {
        gsap.from(imageContainer.current, {
            opacity: 0,
            duration: .3,
            scrollTrigger: {
                trigger: container.current,
                start: 'top center+=100',
                end: 'bottom center-=100',
                scrub: true,
            },
        });
    }, []);

    return (
        <section id='description' className={styles.projectsContainer}>
            <div ref={container} className={styles.projects}>
                <div className={styles.projectDescription}>
                    <div ref={imageContainer} className={styles.imageContainer}>
                        <Image
                            src={`/images/${projects[selectedProject].src}`}
                            fill={true}
                            alt="project image"
                            priority={true}
                        />
                    </div>
                    <div className={styles.column}>
                    <p>Iluminación- inteligente y colorida. Diseño modular y personalización única para experiencias visuales cautivadoras.</p>
                    </div>
                    <div className={styles.column}>
                    <p>-Unicos productores en Argentina-</p>
                    </div>          
      </div>
            </div>
        </section>
    );
}
