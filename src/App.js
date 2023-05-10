// REACT:
import { useRef } from "react";
import { Link, Router, Route, Routes } from 'react-router-dom'

// COMPONENTS:
import IntroArt from "./components/1-IntroArt/IntroArt";
import About from "./components/2-About/About";
import Skills from "./components/3-Skills/Skills";
import Projects from "./components/4-Projects/Projects";
import Contact from "./components/5-Contact/Contact";
import MyLinks from "./components/6-MyLinks/MyLinks";

import Landscape from "./components/4-Projects/4a-Landscape/Landscape";

// IMGS:
import midnightIcon from "./imgs/midnightIcon.jpg"

// CSS:
import styles from "./App.module.css";

// APP:
export default function App() {
  const home = useRef(null)
  const scrollToHome = () => {
    home.current?.scrollIntoView({behavior: 'smooth'})
  }
  const about = useRef(null);
  const scrollToAbout = () => {
    about.current?.scrollIntoView({behavior: 'smooth'})
  }
  const projects = useRef(null) 
  const scrollToProjects = () => {
    projects.current?.scrollIntoView({behavior: 'smooth'})
  }
  const contact = useRef(null)
  const scrollToContact = () => {
    contact.current?.scrollIntoView({behavior: 'smooth'})
  }
  
  return (

    <div className={styles.App}>
      <header className={styles.pageHeader}>
        <div className={styles.pageHeaderContent}>
          <div className={styles.logo}>
            <home onClick={scrollToHome}>Myles DeBoer</home>
          </div>
          <nav className={styles.primaryNav}>
            <ul className={styles.headerLinks}>
              <about onClick={scrollToAbout}>About</about>
              <projects onClick={scrollToProjects}>Work</projects>
              <contact onClick={scrollToContact}>Services</contact>
              <theme><img src={midnightIcon} alt="" border="0" /></theme>
            </ul>
          </nav>
        </div>
      </header> 
      <section ref={home}> 
        <IntroArt />
      </section>
      <section ref={about}>
        <About />
      </section>
      <section >
        <Skills />
      </section>
      <section ref={projects}>
        <Projects />
      </section>
      <section>
        <Contact />
      </section>
      <section ref={contact}>
        <MyLinks />
      </section>
      <Routes>
        <Route path="/landscape" element={<Landscape/>}/>
      </Routes>
    </div>
    
  )
}