// IMGS:
import capeCod from '../../imgs/morningMode.png'
import CBMediaLogo from '../../imgs/CBMedia_White.png'

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
                        <div className={styles.imageOverlay}>
                            <div>
                                <div>
                                    <h2>Chris Blossom Media</h2>
                                    <p>Chris Blossom Media is a media freelancing business based out of Berkeley offering anywhere from photo, video, and social media marketing and consulting.</p>
                                    
                                </div>
                                <div>
                                    <img className={styles.logo} src={CBMediaLogo} alt="" srcset="" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <img src={capeCod} alt="" srcset="" />
                    </div>
                    <div>
                        <img src={capeCod} alt="" srcset="" />
                    </div>
                </div>
                <button>View More</button>
            </section>

        </div>
    )
}
