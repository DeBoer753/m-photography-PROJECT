// IMGS:
// import test from '../../imgs/morningMode.png'
import introImg from '../../imgs/introImg.png'

// CSS:
import styles from './IntroArt.module.css'

// CREATIVE INTRO:
export default function IntroBackground() {
    return (
        <div id="home">
            <section>
                <img className={styles.introImg} src={introImg} alt=""></img>
            </section>
        </div>
    )
}