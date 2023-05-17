// CSS:
import styles from './Reviews.module.css'

// REVIEWS:
export default function Reviews() {
    return (
        <div>

            <div className={styles.reviewsHeaderBox}>
                <h1>See What Others Are Saying</h1>
            </div>

            <main className={styles.reviewsMain}>
                <section className={styles.reviewsContent}>
                    <div className={styles.projectInfo}>
                        <h5>Moreas Construction</h5>
                        <p>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae voluptatum in, optio labore distinctio culpa quaerat, dolorem sit placeat perferendis officia dolore, dignissimos nostrum quidem deserunt architecto quia qui sapiente"</p>
                    </div>
                </section>
                <section className={styles.reviewsContent}>
                    <div className={styles.projectInfo}>
                        <h5>Moterra</h5>
                        <p>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae voluptatum in, optio labore distinctio culpa quaerat, dolorem sit placeat perferendis officia dolore, dignissimos nostrum quidem deserunt architecto quia qui sapiente"</p>
                    </div>
                </section>
                <section className={styles.reviewsContent}>
                    <div className={styles.projectInfo}>
                        <h5>Porsche Marin</h5>
                        <p>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae voluptatum in, optio labore distinctio culpa quaerat, dolorem sit placeat perferendis officia dolore, dignissimos nostrum quidem deserunt architecto quia qui sapiente"</p>
                    </div>
                </section>
                <button>View More Reviews</button>
            </main>

        </div>
    )
}
