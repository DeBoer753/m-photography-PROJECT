// IMGS:
import aboutPhoto from '../../imgs/aboutPhoto.png'

// CSS: 
import styles from './About.module.css'

// ABOUT ME: 
export default function About() {
    return (
        <div>
            <div className={styles.aboutMeHeaderBox}>
                <h1 className={styles.aboutMeHeader} id="about">About Me</h1> {/*AUTO SCROLL ON CLICK FROM NAVABAR*/}
            </div>
            <section className={styles.aboutMeBackground}>
                <div className={styles.aboutMeContent}>
                    <div className={styles.aboutMePortrait}>
                        <img src={aboutPhoto} alt="" />
                    </div>
                    <div className={styles.aboutMeText}>
                        <h2>Photographer</h2>
                        <p>My passion for photography started when I was growing up in Napa Valley, surrounded by rolling landscapes and vineyards.
                            I was fascinated by the way the light hit the hills at different times of day and how the colors of the sky changed during
                            the evenings and early mornings. I started taking pictures with handheld cameras laying around the house and soon enough
                            became obsessed with the art of capturing moments through a lens.</p>
                        <p>During high school, my family traveled internationally, and I had the opportunity to document our adventures through my photography 
                            and after graduating from Academy of Art University, I lived in Australia for a year, where I continued to hone my skills and develop
                            my style. I was fortunate enough to work with some amazing photographers and mentors who taught me the importance of capturing the 
                            essence of a moment and telling a story through my pictures</p>
                        <p> Now, I have the privilege of working not only as a software developer and build websites like the one you are viewing, but also as
                            a photographer here in the Bay Area. I love being able to explore new locations and meet new people through my work. Whether I am
                            photographing landscapes, real estate, or working alongside small businesses to grow their brand my goal is always to create
                            images that evoke emotion and tell a story. Photography has become an outlet for me to express my attention to detail
                            and connect with the world around me, and I feel incredibly lucky to be able to pursue it as both a hobby and a career.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    )
}