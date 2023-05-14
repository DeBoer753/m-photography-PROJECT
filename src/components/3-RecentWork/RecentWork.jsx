// IMGS:
import capeCod from '../../imgs/morningMode.png'
import CBMediaLogo from '../../imgs/CBMedia_White.png'
import porscheLogo from '../../imgs/Porsche-Logo.png'

// CSS:
import styles from './RecentWork.module.css'

// SKILLS: 
export default function RecentWork() {
    return (
        <div>

            <div className={styles.recentWorkHeaderBox}>
                <h1>Recent Work</h1> 
            </div>

            <main className={styles.recentWorkMain}>
                <div className={styles.recentWorkContent}>
                    <div>
                        <img src={capeCod} alt="" srcset="" />
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
                </div>
                <button>View More</button>
            </main>

        </div>
    )
}
