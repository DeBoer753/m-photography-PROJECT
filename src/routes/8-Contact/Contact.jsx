// REACT:
import { useState } from 'react'

// COMPONENTS: 
import Footer from '../../components/5-Footer/Footer'

// IMGS:
import banner from '../../imgs/banner2TemplateCBM.jpg'

// CSS: 
import styles from './Contact.module.css'

// SERVICES:
export default function Contact() {
  // window.scrollTo(0,0) - this function interrupts user while filling out form.

  const [clientName, setClientName] = useState('')
  const [clientPhone, setClientPhone] = useState('')
  const [clientEmail, setClientEmail] = useState('')
  const [clientMsg, setClientMsg] = useState('')
  const [success, setSuccess] = useState(false)

  function encode(data) {
    return Object.keys(data).map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])).join("&")
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    setSuccess(false)
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": "contact",
        clientName, clientEmail, clientMsg
      }),
    }).then(() => {
      setSuccess(true)
      setClientName('')
      setClientPhone('')
      setClientEmail('')
      setClientMsg('')
    }).catch((error) => alert(error))
  }


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

          <form onSubmit={handleSubmit} className={styles.contactContentMsgBox}>
            <input type="hidden" name="form-name" value="contact" />
            <label htmlFor="">Name*</label>
            <input type="text" required value={clientName} onChange={(e) => setClientName(e.target.value)}/>
            <label htmlFor="">Phone</label>
            <input type="text" value={clientPhone} onChange={(e) => setClientPhone(e.target.value)}/>
            <label htmlFor="">Email*</label>
            <input type="text" required value={clientEmail} onChange={(e) => setClientEmail(e.target.value)}/>
            <label htmlFor="">Message*</label>
            <textarea name="" id="" cols="30" rows="10" required value={clientMsg} onChange={(e) => setClientMsg(e.target.value)}></textarea>
            <div>
              <button type="submit">Send</button>
              <p>{success && "message sent!"}</p>
            </div>
          </form>

        </div>

      </main>

      <Footer />

  </>
  )
}