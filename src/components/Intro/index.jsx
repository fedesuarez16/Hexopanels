'use client';
import React, { useLayoutEffect, useRef } from 'react'
import styles from './style.module.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function Index() {

    const background = useRef(null);
    const introVideo = useRef(null);

    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const timeline = gsap.timeline({
            scrollTrigger: {
                trigger: document.documentElement,
                scrub: true,
                start: "top",
                end: "+=500px",
            },
        })

        timeline
            .from(background.current, { clipPath: `inset(15%)` })
            .to(introVideo.current, { height: "200px" }, 0)
    }, [])

// ... (tu código anterior)

return (
    <div className={styles.homeHeader}>
        <div className={styles.backgroundImage} ref={background}></div>
        <div className={styles.intro}>
            <div ref={introVideo} data-scroll data-scroll-speed="0.3" className={styles.introVideo}>
                <video autoPlay loop muted playsInline>
                    <source src="/images/video.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
                <h1 data-scroll data-scroll-speed="0.7">HEXOPANELS <br/>   <p className={styles.introSpan}>Paneles luminicos estilo nanoleaf</p></h1>
        
          

            <button data-scroll data-scroll-speed="0.3" className={styles.introButton}>Ver video</button>
        </div>
    </div>
)


}
