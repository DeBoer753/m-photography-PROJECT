// REACT:
import { Link } from 'react-router-dom'

// CSS:
import styles from './Reviews.module.css'

// REVIEWS:
export default function Reviews() {
    return (
        <div>

            <main className={styles.reviewsMain}>
                <div className={styles.reviewsHeaderBox}>
                    <hr />
                    <h1>See What Others Are Saying</h1>
                    <hr />
                </div>
                <section className={styles.reviewsContent}>
                    <div>
                        <h5>Moreas Construction <span> | Photography | Video</span></h5>
                        <p>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae voluptatum in, optio labore distinctio culpa quaerat, dolorem sit placeat perferendis officia dolore, dignissimos nostrum quidem deserunt architecto quia qui sapiente"</p>
                    </div>
                </section>
                <section className={styles.reviewsContent}>
                    <div>
                        <h5>Moterra<span> | Social Media | Photography | Video</span></h5>
                        <p>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae voluptatum in, optio labore distinctio culpa quaerat, dolorem sit placeat perferendis officia dolore, dignissimos nostrum quidem deserunt architecto quia qui sapiente"</p>
                    </div>
                </section>
                <section className={styles.reviewsContent}>
                    <div>
                        <h5>Porsche Marin <span> | Photography</span></h5>
                        <p>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae voluptatum in, optio labore distinctio culpa quaerat, dolorem sit placeat perferendis officia dolore, dignissimos nostrum quidem deserunt architecto quia qui sapiente"</p>
                    </div>
                </section>
                <Link to='reviews'><button>View More Reviews</button></Link>
            </main>

        </div>
    )
}
