// TODO: NOTE -- This navbar component is used for routed pages only. navbar inside app.js is for being able to scroll on click for logo.

// IMGS:
import midnightIcon from "../../imgs/midnightIcon.jpg"

// CSS: 
import styles from './NavBar.module.css'

// NAVBAR: 
export default function NavBar() {

    return (
        <div>

          <header className={styles.navBarHeaderBox}>
            <section className={styles.navBarHeaderContent}>
              <div className={styles.cbmNameBox}>
                <div>Chris Blossom Media</div>
              </div>

              <nav>
                <ul>
                  <li>Services</li>
                  <li>Work</li>
                  <li>Reviews</li>
                  <li>About</li>
                  <li>Contact</li>
                  <li><img src={midnightIcon} alt="" border="0" /></li>
                </ul>
              </nav>
            
            </section>
          </header> 

        </div>
    )
}