// REACT:
import { useState } from 'react'

// CSS:
import styles from './Contact.module.css'

// CONTACT: 
export default function Contact() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [success, setSuccess] = useState(false)

    function encode(data) {
        return Object.keys(data)
            .map(
                (key) =>
                    encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
            )
            .join("&");
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        setSuccess(false)
        fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: encode({
                "form-name": "contact",
                name, email, message
            }),
        })
            .then(() => {
                setSuccess(true)
                setName('')
                setEmail('')
                setMessage('')
            })
            .catch((error) => alert(error));
    };

    return (
        <div>
            <div className={styles.contactHeaderBox}>
                <h1 className={styles.contactHeader} id="contact">Services</h1>
            </div>
            <section className={styles.contact}>
                <div className={styles.contactMain}>
                    <div className={styles.contactLeft}>
                        <h2>Let's build your brand.</h2>
                        <p>My goal is to work with you to create a cohesive brand image that accurately reflects your business's values, personality, and offerings.
                        Whether you're looking to showcase your products, capture the essence of your services, or simply tell your brand's story through imagery, I'm 
                        here to help bring your vision to life.</p>
                        <p>
                            I understand that every business is unique, and I'm committed to providing a personalized approach to help you stand out in a crowded market. From concept development to 
                            final delivery, I'm dedicated to providing top-notch service and delivering high-quality images that capture your brand's essence and set you apart from the competition.
                            So, whether you're looking to update your website, enhance your social media presence, or create stunning visuals for your marketing materials, I'm excited to work with
                            you to build your brand and help you achieve your business goals. Let's get started!</p>
                    </div>
                    <form onSubmit={handleSubmit} className={styles.contactRight}>
                        <input type="hidden" name="form-name" value="contact" />
                        <input className={styles.contactInputNameEmail} type="text" placeholder="Name*" name="name" required value={name} onChange={(e) => setName(e.target.value)} />
                        <input className={styles.contactInputNameEmail} type="text" placeholder="Email*" name="email" required value={email} onChange={(e) => setEmail(e.target.value)} />
                        <textarea className={styles.contactInputMessage} type="text" placeholder="Message*" name="message" rows="8"
                            required value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
                            <div className={styles.sendMessageButtonBox}>
                                <button type='submit' className={styles.contactButtons}>Send Message</button>
                                <div>
                                    <div className={styles.messageSuccessMsgBox}>{success && "message sent"}</div>
                                </div>
                            </div>
                    </form>
                </div>
            </section>
        </div>
    )
}



