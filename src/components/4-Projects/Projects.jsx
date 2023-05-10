// REACT:
import React from 'react'
import { Route, Routes, Link } from 'react-router-dom'

// COMPONENTS:
import Landscape from './4a-Landscape/Landscape'

// IMGS:
import landscapeStack from '../../imgs/landscapeStack.png'

// CSS:
import styles from './Projects.module.css'

// PROJECTS:
export default function Projects() {
    return (
        <div>
            <div className={styles.projectsHeaderBox}>
                <h1 className={styles.projectsHeader} id="projects"></h1>
            </div>
            <section className={styles.projects}>
                <div className={styles.project}>
                    <img src={landscapeStack} alt="" border="0" />
                    <div className={styles.projectInfo}>
                        <h5>Landscape</h5>
                        <p>Being able to photograph landscapes is a wonderful experience that offers countless benefits. 
                            It allows you to capture the beauty of the natural world and create stunning images that can 
                            be enjoyed for years to come. It also gives you the opportunity to explore and appreciate your 
                            surroundings, as you search for the perfect shot. Landscape photography can be a relaxing and 
                            therapeutic activity, as you immerse yourself in nature and focus on the present moment.</p>
                        <p>
                            <Link to='/landscape'><button className={styles.projectButtons}>View / Buy</button></Link>
                        </p>
                    </div>
                </div>
                <div className={styles.project}>
                    <img src={landscapeStack} alt="" border="0" />
                    <div className={styles.projectInfo}>
                        <h5>Real Estate</h5>
                        <p>Being able to photograph landscapes is a wonderful experience that offers countless benefits. 
                            It allows you to capture the beauty of the natural world and create stunning images that can 
                            be enjoyed for years to come. It also gives you the opportunity to explore and appreciate your 
                            surroundings, as you search for the perfect shot. Landscape photography can be a relaxing and 
                            therapeutic activity, as you immerse yourself in nature and focus on the present moment.</p>
                        <p>
                            {/* <Link to='/landscape'><button className={styles.projectButtons}>View / Buy</button></Link> */}
                        </p>
                    </div>
                </div>
                <div className={styles.project}>
                    <img src={landscapeStack} alt="" border="0" />
                    <div className={styles.projectInfo}>
                        <h5>Small Businesses</h5>
                        <p>Being able to photograph landscapes is a wonderful experience that offers countless benefits. 
                            It allows you to capture the beauty of the natural world and create stunning images that can 
                            be enjoyed for years to come. It also gives you the opportunity to explore and appreciate your 
                            surroundings, as you search for the perfect shot. Landscape photography can be a relaxing and 
                            therapeutic activity, as you immerse yourself in nature and focus on the present moment.</p>
                        <p>
                            {/* <Link to='/landscape'><button className={styles.projectButtons}>View / Buy</button></Link> */}
                        </p>
                    </div>
                </div>
                <div className={styles.project}>
                    <img src={landscapeStack} alt="" border="0" />
                    <div className={styles.projectInfo}>
                        <h5>Virtual Gallery</h5>
                        <p>Being able to photograph landscapes is a wonderful experience that offers countless benefits. 
                            It allows you to capture the beauty of the natural world and create stunning images that can 
                            be enjoyed for years to come. It also gives you the opportunity to explore and appreciate your 
                            surroundings, as you search for the perfect shot. Landscape photography can be a relaxing and 
                            therapeutic activity, as you immerse yourself in nature and focus on the present moment.</p>
                        <p>
                            {/* <Link to='/landscape'><button className={styles.projectButtons}>View / Buy</button></Link> */}
                        </p>
                    </div>
                </div>
            </section>
        </div>
    )
}
