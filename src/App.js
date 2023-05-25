// REACT:
import { useRef } from "react";

// ROUTER:
import { BrowserRouter as Router } from "react-router-dom";

// ROUTES:
import Home from "./routes/0-Home/Home.jsx";

// COMPONENTS: 
import NavBar2 from "./components/0.5-NavBar2/NavBar2.jsx";

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

      {/* <header className={styles.pageHeader}>
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
      </header>  */}
      <Router>
        <NavBar2 /> 
      </Router>
      <section ref={home}> 
        <Home />
      </section>

    </main>
    
  )
}