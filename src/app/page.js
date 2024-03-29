'use client';
import { useEffect } from 'react';
import styles from './page.module.css'
import Intro from '../components/Intro';
import Description from '../components/Description';
import Projects from '../components/Projects';
import Navbar from '../components/Navbar';
import Gallery from '@/components/Gallery';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';


export default function Home() {

  useEffect( () => {
    (
      async () => {
          const LocomotiveScroll = (await import('locomotive-scroll')).default
          const locomotiveScroll = new LocomotiveScroll();
      }
    )()
  }, [])

  return (
      <main className={styles.main}>
        <Navbar/>
        <Intro />
        <Description />
        <Projects />
        <Gallery/>
        <Contact/>
        <Footer/>
      </main>
  )
}
