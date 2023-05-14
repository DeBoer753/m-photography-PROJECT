// REACT:
import { useRef } from "react";

// COMPONENTS:
import IntroBackground from "./components/1-IntroBackground/IntroBackground";
import Services from "./components/2-Services/Services";
import RecentWork from "./components/3-RecentWork/RecentWork";
import Testimonials from "./components/4-Testimonials/Testimonials";
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
  
  return (
    
    <main className={styles.App}>
      <header className={styles.pageHeader}>
        <div className={styles.pageHeaderContent}>
          <div className={styles.logo}>
            <div onClick={scrollToHome}>Chris Blossom Media</div>
          </div>
          <nav className={styles.primaryNav}>
            <ul className={styles.headerLinks}>
              <li>Services</li>
              <li>Work</li>
              <li>Reviews</li>
              <li>About</li>
              <li>Contact</li>
              <li><img src={midnightIcon} alt="" border="0" /></li>
            </ul>
          </nav>
        </div>
      </header> 
      <section ref={home}> 
        <IntroBackground />
      </section>
      <section>
        <Services /> 
      </section>
      <section >
        <RecentWork />
      </section>
      <section>
        <Testimonials />
      </section>
      {/* <section>
        <Contact />
      </section>
      <section ref={contact}>
        <MyLinks />
      </section> */}
    </main>
    
  )
}