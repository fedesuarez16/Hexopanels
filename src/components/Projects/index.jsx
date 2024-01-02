

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
            duration: 1,
            scrollTrigger: {
                trigger: container.current,
                start: 'top center+=100',
                end: 'bottom center-=100',
                scrub: true,
            },
        });
    }, []);

    return (
        <section className={styles.projectsContainer}>
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
<p>The flora is characterized by the presence of high elevation wetland, as well as yellow straw, broom sedge, tola de agua and tola amaia.</p>
</div>
<div className={styles.column}>
<p>Some, like the southern viscacha, vicuña and Darwins rhea, are classified as endangered species. Others, such as Andean goose, horned coot, Andean gull, puna tinamou and the three flamingo species inhabiting in Chile (Andean flamingo, Chilean flamingo, and Jamess flamingo) are considered vulnerable.</p>
</div>                </div>
            </div>
        </section>
    );
}
