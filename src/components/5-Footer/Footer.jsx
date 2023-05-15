// CSS: 
import styles from './Footer.module.css'

// FOOTER: 
export default function Footer() {
    return (
        <div>

            <div className={styles.footerHeaderBox}>
                <h1>Ready To Work Together?</h1>
                <h2>Short description here to express your interest in working with your future clients</h2>
                <button>Let's Chat</button>
            </div>

            <main className={styles.footerMain}>
              <section>
                <ul className={styles.footerLinks}>
                  <li>Services</li>
                  <li>Work</li>
                  <li>Reviews</li>
                  <li>About</li>
                  <li>Contact</li>
                </ul>
                <p>San Francisco Bay Area, CA</p>
                <p>Chris Blossom | Sole Proprietor</p>
                <p>420 College Blvd, Berkeley, CA 94720</p>
              </section>
            </main>

        </div>
    )
}