// REACT
import { Link } from 'react-router-dom'

// COMPONENTS 
import Footer from '../../components/5-Footer/Footer'

// CSS: 
import styles from './Services.module.css'

// IMGS:
import banner from '../../imgs/bannerTemplateCBM.jpg'
import capeCod from '../../imgs/morningMode.png'
import socialMedia from '../../imgs/socialImg.png'
import photography from '../../imgs/gearImg.png'
import video from '../../imgs/droneImg.png'

// SERVICES:
export default function Services() {
  window.scrollTo(0,0)
  
  return (

    <div>

      <img className={styles.banner} src={banner} alt="" srcset="" />
      
      <div className={styles.bannerAndIntro}>
        <h1>Services</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis doloremque molestiae maxime sunt debitis, nemo consequatur et harum quae tenetur laboriosam cumque modi aut aspernatur recusandae vitae dolor deleniti architecto!</p>
      </div>
      
      <main className={styles.servicesMain}>
        <div className={styles.servicesContent}>
            <section>
                <div>
                    <img src={socialMedia} alt="" srcset="" />
                    <h3>Social Media</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandaetur adipisicing elit. Rep amet consectetur adipisicing elit. Repudiandaeudiandae tur adipisicing elit. Repudiandae quasi elit. Repudiandae quasi</p>
                </div>
                <div>
                  <Link to='/socialmedia'><button>View Work</button></Link>
                </div>
            </section>
            <section>
                <div>
                    <img src={photography} alt="" srcset="" />
                    <h3>Photography</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicin et consectetur adipisicinet consectetur adipisicing elit. Repudiandae quasi elit. Repudiandae quasi</p>
                </div>
                <div>
                  <Link to='/photography'><button>View Work</button></Link>
                </div>
            </section>
            <section>
                <div>
                    <img src={video} alt="" srcset="" />
                    <h3>Video</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae  amet consectetur adipisicing elit. Repudiandae  amet consectetur adipisicing elit. Repudiandae quasi elit. Repudiandae quasi  </p>
                </div>
                <div>
                  <Link to='/video'><button>View Work</button></Link>
                </div>
            </section>
        </div>
      </main>

      <Footer />

    </div>

  )
}