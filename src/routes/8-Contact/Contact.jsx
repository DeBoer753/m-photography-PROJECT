// REACT:
import react from 'react'

// COMPONENTS: 
import Footer from '../../components/5-Footer/Footer'

// IMGS:
import banner from '../../imgs/banner2TemplateCBM.jpg'

// CSS: 
import styles from './Contact.module.css'

// SERVICES:
export default function Contact() {
  window.scrollTo(0,0)

  return (
    <>

      <img className={styles.banner} src={banner} alt="" srcset="" />

      <main className={styles.contactMain}>

        <div className={styles.contactHeaderBox}>
          <h1>Let's Chat!</h1>
        </div>

        <div className={styles.contactContent}>

          <div className={styles.contactContentInfoBox}>
            <h2>Stuff</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores nobis id nisi fuga dicta ullam explicabo reiciendis amet doloremque aliquid impedit, accusantium laboriosam tempora earum odit eos necessitatibus ab velit.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores nobis id nisi fuga dicta ullam explicabo reiciendis amet doloremque aliquid impedit, accusantium laboriosam tempora earum odit eos necessitatibus ab velit.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores nobis id nisi fuga dicta ullam explicabo reiciendis amet doloremque aliquid impedit, accusantium laboriosam tempora earum odit eos necessitatibus ab velit.</p>
          </div>

          <div className={styles.contactContentMsgBox}>
            <label htmlFor="">Name*</label>
            <input type="text" required/>
            <label htmlFor="">Phone</label>
            <input type="text" />
            <label htmlFor="">Email*</label>
            <input type="text" required />
            <label htmlFor="">Message*</label>
            <textarea name="" id="" cols="30" rows="10" required></textarea>
          </div>

        </div>

      </main>

      <Footer />

  </>
  )
}