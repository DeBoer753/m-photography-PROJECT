// IMGS:
import capeCod from '../../imgs/morningMode.png'

// CSS:
import styles from './RecentWork.module.css'

// SKILLS: 
export default function RecentWork() {
    return (
        <div>
            <div className={styles.recentWorkHeaderBox}>
                <h1>Recent Work</h1> 
            </div>

            <section className={styles.recentWorkMain}>
                <div className={styles.recentWorkContent}> 
                    <div>
                        <img src={capeCod} alt="" srcset="" />
                    </div>
                    <div>
                        <img src={capeCod} alt="" srcset="" />
                    </div>
                    <div>
                        <img src={capeCod} alt="" srcset="" />
                    </div>
                </div>
            </section>

        </div>
    )
}
