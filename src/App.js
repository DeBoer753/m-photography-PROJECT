// REACT:
import { useRef } from "react";

// COMPONENTS:
import IntroArt from "./components/1-IntroArt/IntroArt";
import Services from "./components/2-About/Services";
import RecentWork from "./components/3-Skills/RecentWork";
import Projects from "./components/4-Projects/Projects";
import Contact from "./components/5-Contact/Contact";
import MyLinks from "./components/6-MyLinks/MyLinks";

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
            <home onClick={scrollToHome}>Made In Marin Media</home>
          </div>
          <nav className={styles.primaryNav}>
            <ul className={styles.headerLinks}>
              <about>About</about>
              <projects>Work</projects>
              <contact>Services</contact>
              <theme><img src={midnightIcon} alt="" border="0" /></theme>
            </ul>
          </nav>
        </div>
      </header> 
      <section ref={home}> 
        <IntroArt />
      </section>
      <section ref={about}>
        <Services />
      </section>
      <section >
        <RecentWork />
      </section>
      {/* <section ref={projects}>
        <Projects />
      </section>
      <section>
        <Contact />
      </section>
      <section ref={contact}>
        <MyLinks />
      </section> */}
    </div>
    
  )
}