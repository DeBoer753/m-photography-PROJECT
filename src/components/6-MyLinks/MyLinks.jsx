// IMGS:
import igIcon from '../../imgs/igIcon.png'
import linkedinIcon from '../../imgs/linkedinIcon.png'

// CSS:
import styles from './MyLinks.module.css'

// MYLINKS:
export default function MyLinks() {
  return (
  <div className={styles.myLinksBox}>
      <div className={styles.socialsAndDownloads}>
        <a href="https://www.linkedin.com/in/mylesdeboer/" target="_blank" rel='noreferrer'><p className={styles.socials}><img src={igIcon} alt="" border="0" /></p></a>
        <a href="https://www.linkedin.com/in/mylesdeboer/" target="_blank" rel='noreferrer'><p className={styles.socials}><img src={linkedinIcon} alt="" border="0" /></p></a>
        <a href="https://www.linkedin.com/in/mylesdeboer/" target="_blank" rel='noreferrer'><button className={styles.contactButtons}>Partners</button></a>
        <a href="/Resume.pdf" download><button className={styles.contactButtons}>Download Pricing</button></a>
      </div> 
  </div>

  )
}

