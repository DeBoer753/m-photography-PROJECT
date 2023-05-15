// IMGS:
import capeCod from '../../imgs/morningMode.png'

// CSS: 
import styles from './Services.module.css'

// ABOUT ME: 
export default function Services() {
    return (
        <div>

            <div className={styles.servicesHeaderBox}>
                <h1>Services</h1>
            </div>

            <main className={styles.servicesMain}>
                <div className={styles.servicesContent}>
                    <section>
                        <img src={capeCod} alt="" srcset="" />
                        <h2>Social Media Marketing</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae quasi elit. Repudiandae quasi</p>
                        <div>
                            <button>View Work</button>
                        </div>
                    </section>
                    <section>
                        <img src={capeCod} alt="" srcset="" />
                        <h2>Photography</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae quasi elit. Repudiandae quasi</p>
                        <div>
                            <button>View Prints</button>
                            <button>View Portraits</button>
                            <button>View Headshots</button>
                            <button>View Real Estate</button>
                        </div>
                    </section>
                    <section>
                        <img src={capeCod} alt="" srcset="" />
                        <h2>Video</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae quasi elit. Repudiandae quasi  </p>
                        <div>
                            <button>View Video</button>
                        </div>
                    </section>
                </div>
            </main>

        </div>
    )
}