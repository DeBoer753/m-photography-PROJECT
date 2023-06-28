// REACT:
import react from 'react'

// COMPONENTS: 
import Footer from '../../components/5-Footer/Footer'

// CSS:
import styles from './About.module.css'

// IMGS:
import banner from '../../imgs/banner3TemplateCBM.jpg'
import photo from '../../imgs/gearImg.png'

// ABOUT:
export default function About() {
  window.scrollTo(0,0)

  return (
    <>

      <img className={styles.banner} src={banner} alt="" srcset="" />

      <main className={styles.aboutMain}>

        <div className={styles.aboutHeaderBox}>
          <h1>About Chris</h1>
        </div>

        <div className={styles.aboutContent}>
          <img src={photo} alt="" srcset="" />
          <div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, iure delectus. Ratione sint molestiae accusamus minima ab, voluptatem doloribus asperiores accusantium at, dolor hic. Ipsa natus earum quam ipsum eum!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, iure delectus. Ratione sint molestiae accusamus minima ab, voluptatem doloribus asperiores accusantium at, dolor hic. Ipsa natus earum quam ipsum eum!</p>
          </div>
        </div>

      </main>

      <Footer />


    </>
  )
}