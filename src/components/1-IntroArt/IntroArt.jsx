// CSS:
import styles from './IntroArt.module.css'
import test from '../../imgs/morningMode.png'

// CREATIVE INTRO:
export default function CreativeIntro() {
    return (
        <div className={styles.introArtBackground} id="home">
            <section className={styles.introBackground}>
                <img className={styles.capeCod} src={test} alt=""></img>
            </section>
        </div>
    )
}