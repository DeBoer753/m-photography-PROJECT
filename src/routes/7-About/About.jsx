// REACT:
import react from 'react'

// COMPONENTS: 
import Footer from '../../components/5-Footer/Footer'

// CSS:
import styles from './About.module.css'

// IMGS:
import banner from '../../imgs/banner3TemplateCBM.jpg'

// ABOUT:
export default function About() {
  return (
    <>

      <img className={styles.banner} src={banner} alt="" srcset="" />

      <main className={styles.aboutMain}>

        <div className={styles.aboutHeaderBox}>
          <h1>About Chris</h1>
        </div>

        <div>
          <img src="" alt="" srcset="" />
          <div>
            <p></p>
            <p></p>
          </div>
        </div>



      </main>

      <Footer />


    </>
  )
}