// IMGS:
import capeCod from '../../imgs/morningMode.png'
import porscheLogo from '../../imgs/Porsche-Logo.png'

// CSS:
import styles from './RecentWork.module.css'

// RECENT WORK: 
export default function RecentWork() {
    return (
        <div>

            <div className={styles.recentWorkHeaderBox}>
                <h1>Recent Work</h1> 
            </div>

            <main className={styles.recentWorkMain}>
                <section className={styles.recentWorkContent}>
                    <div>
                        <img className={styles.backgroundImg} src={capeCod} alt="" srcset="" />
                        <div className={styles.imageOverlay}>
                            <h2>"insert testimonial quote review from client here"</h2>
                            <div>
                                <div>
                                    <h3>Porsche Marin</h3>
                                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit exercitationem, labore pariatur libero quo itaque </p> 
                                </div>
                                <div>
                                    <img className={styles.logo} src={porscheLogo} alt="" srcset="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <button>View More</button>
            </main>

        </div>
    )
}
