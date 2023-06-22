// IMGS:
import capeCod from '../../imgs/morningMode.png'
import porscheLogo from '../../imgs/porscheLogo.png'
import porscheMarin from '../../imgs/porscheImg.png'

// CSS:
import styles from './RecentWork.module.css'

// RECENT WORK: 
export default function RecentWork() {
    return (
        <div>

            <main className={styles.recentWorkMain}>
                <div className={styles.recentWorkHeaderBox}>
                    <hr />
                    <h1>Recent Work</h1> 
                    <hr />
                </div>
                <section className={styles.recentWorkContent}>
                    <div className={styles.mainBox}>
                        <div className={styles.topBox}>
                            <img className={styles.backgroundImg} src={porscheMarin} alt="" srcset="" />
                            <div className={styles.imageOverlay}>
                                <h2>"insert testimonial quote review from client here"</h2>
                            </div>
                        </div>
                        <div className={styles.bottomBox}>
                            <div>
                                <h3>Porsche Marin</h3>
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit exercitationem, labore pariatur libero quo itaque </p> 
                            </div>
                            <div>
                                <img className={styles.logo} src={porscheLogo} alt="" srcset="" />
                            </div>
                        </div>
                    </div>
                </section>
                {/* <button>View More</button> */}
            </main>

        </div>
    )
}
