// REACT:
import React from 'react'
import { Route, Routes, Link } from 'react-router-dom'

// COMPONENTS:

// IMGS:

// CSS:
import styles from './Testimonials.module.css'

// PROJECTS:
export default function Testimonials() {
    return (
        <div>

            <div className={styles.testimonialsHeaderBox}>
                <h1>Testimonials</h1>
            </div>

            <main className={styles.testimonialsMain}>
                <div className={styles.testimonialsContent}>
                    <div className={styles.projectInfo}>
                        <h5>Moreas Construction</h5>
                        <p>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae voluptatum in, optio labore distinctio culpa quaerat, dolorem sit placeat perferendis officia dolore, dignissimos nostrum quidem deserunt architecto quia qui sapiente"</p>
                    </div>
                </div>
                <div className={styles.testimonialsContent}>
                    <div className={styles.projectInfo}>
                        <h5>Moterra</h5>
                        <p>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae voluptatum in, optio labore distinctio culpa quaerat, dolorem sit placeat perferendis officia dolore, dignissimos nostrum quidem deserunt architecto quia qui sapiente"</p>
                    </div>
                </div>
                <div className={styles.testimonialsContent}>
                    <div className={styles.projectInfo}>
                        <h5>Porsche Marin</h5>
                        <p>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae voluptatum in, optio labore distinctio culpa quaerat, dolorem sit placeat perferendis officia dolore, dignissimos nostrum quidem deserunt architecto quia qui sapiente"</p>
                    </div>
                </div>
            </main>

        </div>
    )
}
