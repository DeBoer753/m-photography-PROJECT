// IMGS:
import capeCod from '../../imgs/morningMode.png'

// CSS: 
import styles from './Services.module.css'

// SERVICES: 
export default function Services() {
    return (
        <div>

            <div className={styles.servicesHeaderBox}>
                <h1>"Providing professional media production to the bay area since 2020"</h1>
                <h2>Services</h2>
                <hr />
            </div>

            <main className={styles.servicesMain}>
                <div className={styles.servicesContent}>
                    <section>
                        <div>
                            <img src={capeCod} alt="" srcset="" />
                            <h3>Social Media Marketing</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandaetur adipisicing elit. Rep amet consectetur adipisicing elit. Repudiandaeudiandae tur adipisicing elit. Repudiandae quasi elit. Repudiandae quasi</p>
                        </div>
                        <div>
                            <button>View Work</button>
                        </div>
                    </section>
                    <section>
                        <div>
                            <img src={capeCod} alt="" srcset="" />
                            <h3>Photography</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicin et consectetur adipisicinet consectetur adipisicing elit. Repudiandae quasi elit. Repudiandae quasi</p>
                        </div>
                        <div>
                            <button>View Prints</button>
                            <button>View Portraits</button>
                            <button>View Headshots</button>
                            <button>View Real Estate</button>
                        </div>
                    </section>
                    <section>
                        <div>
                            <img src={capeCod} alt="" srcset="" />
                            <h3>Video</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae  amet consectetur adipisicing elit. Repudiandae  amet consectetur adipisicing elit. Repudiandae quasi elit. Repudiandae quasi  </p>
                        </div>
                        <div>
                            <button>View Video</button>
                        </div>
                    </section>
                </div>
            </main>

        </div>
    )
}