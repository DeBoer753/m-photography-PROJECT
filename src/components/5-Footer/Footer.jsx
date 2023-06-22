// ROUTER:
import { Link } from 'react-router-dom'

// IMGS:
import linkedIn from '../../imgs/linkedInIcon.png'
import instagram from '../../imgs/igIcon.png'
import mail from '../../imgs/mailIcon.png'

// CSS: 
import styles from './Footer.module.css'

// FOOTER: 
export default function Footer() {
    return (
        <div>

          <div className={styles.footerHeaderBox}>
            <h1>Ready To Work Together?</h1>
            <div className={styles.socials}>
              <img src={linkedIn} alt="" srcset="" />
              <img src={instagram} alt="" srcset="" />
              <img src={mail} alt="" srcset="" />
            </div>
            <h2>Short description here to express your interest in working with your future clients</h2>
            <button>Let's Chat</button>
          </div>

          <main className={styles.footerMain}>
            <section>
              <ul className={styles.footerLinks}>
                <li><Link to='/services'>Services</Link></li>
                <li><Link to='/work'>Work</Link></li>
                <li><Link to='/reviews'>Reviews</Link></li>
                <li><Link to='/contact'>Contact</Link></li>
              </ul>
              <p>San Francisco Bay Area, CA</p>
              <p>Chris Blossom | Sole Proprietor</p>
              <p>420 College Blvd, Berkeley, CA 94720</p>
            </section>
          </main>

        </div>
    )
}