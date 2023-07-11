  // REACT:
import { Link } from 'react-router-dom'

// COMPONENTS:
import Footer from '../../components/5-Footer/Footer'

// CSS:
import styles from './Work.module.css'

// IMGS:
import banner from '../../imgs/banner3TemplateCBM.jpg'
import photo from '../../imgs/gearImg.png'

// SERVICES:
export default function Work() {
  window.scrollTo(0,0)

  return (
    <>

      <img className={styles.banner} src={banner} alt="" srcset="" />

      <main className={styles.workMain}>

        <div className={styles.workHeaderBox}>
          <h1>Work</h1>
        </div>

        <div className={styles.workButtonBox}>
          <Link to='/socialmedia'><button>Social Media</button></Link>
          <Link to='/photography'><button>Photography</button></Link>
          <Link to='/video'><button>Video</button></Link>
        </div>

        <div className={styles.workContent}>
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