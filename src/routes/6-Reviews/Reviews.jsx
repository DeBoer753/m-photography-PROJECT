// REACT:
import react from 'react'

// COMPONENETS: 
import Footer from '../../components/5-Footer/Footer'

// CSS: 
import styles from './Reviews.module.css'

// SERVICES:
export default function Reviews() {
  return (
    <div>

    <main className={styles.reviewsMain}>
      <div className={styles.reviewsHeaderBox}>
          <h1>Reviews</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem quia, neque reiciendis quaerat dignissimos repellendus illo adipisci alias saepe quisquam iste a, quam aspernatur error! Porro quos nostrum laboriosam fuga?</p>
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
    </main>
    
    <Footer />

</div>
  )
}