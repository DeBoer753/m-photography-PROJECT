// REACT:
import { Link } from 'react-router-dom'

// IMGS:
import midnightIcon from "/Users/myles_deboer/Desktop/Desktop 2.0/Coding/Photography/m-photo-project/src/imgs/midnightIcon.jpg"
import image1 from '/Users/myles_deboer/Desktop/Desktop 2.0/Coding/Photography/m-photo-project/src/components/4-Projects/4a-Landscape/imgs-Landscape/_MG_0481.jpg'
import image2 from '/Users/myles_deboer/Desktop/Desktop 2.0/Coding/Photography/m-photo-project/src/components/4-Projects/4a-Landscape/imgs-Landscape/_MG_0725-3.jpg'
import image3 from '/Users/myles_deboer/Desktop/Desktop 2.0/Coding/Photography/m-photo-project/src/components/4-Projects/4a-Landscape/imgs-Landscape/_MG_0870.jpg'
import image4 from '/Users/myles_deboer/Desktop/Desktop 2.0/Coding/Photography/m-photo-project/src/components/4-Projects/4a-Landscape/imgs-Landscape/_MG_1178-2.jpg'
import image5 from '/Users/myles_deboer/Desktop/Desktop 2.0/Coding/Photography/m-photo-project/src/components/4-Projects/4a-Landscape/imgs-Landscape/_MG_1370-2.jpg'
import image6 from '/Users/myles_deboer/Desktop/Desktop 2.0/Coding/Photography/m-photo-project/src/components/4-Projects/4a-Landscape/imgs-Landscape/_MG_5229-2.jpg'
import image7 from '/Users/myles_deboer/Desktop/Desktop 2.0/Coding/Photography/m-photo-project/src/components/4-Projects/4a-Landscape/imgs-Landscape/_MG_7884-4.jpg'
import image8 from '/Users/myles_deboer/Desktop/Desktop 2.0/Coding/Photography/m-photo-project/src/components/4-Projects/4a-Landscape/imgs-Landscape/_MG_8090.jpg'
import image9 from '/Users/myles_deboer/Desktop/Desktop 2.0/Coding/Photography/m-photo-project/src/components/4-Projects/4a-Landscape/imgs-Landscape/_MG_9436.jpg'
import image10 from '/Users/myles_deboer/Desktop/Desktop 2.0/Coding/Photography/m-photo-project/src/components/4-Projects/4a-Landscape/imgs-Landscape/_MG_9962-2.jpg'
import image11 from '/Users/myles_deboer/Desktop/Desktop 2.0/Coding/Photography/m-photo-project/src/components/4-Projects/4a-Landscape/imgs-Landscape/ArbourPS-6.jpg'
import image12 from '/Users/myles_deboer/Desktop/Desktop 2.0/Coding/Photography/m-photo-project/src/components/4-Projects/4a-Landscape/imgs-Landscape/DJI_0227-6.jpg'
import image13 from '/Users/myles_deboer/Desktop/Desktop 2.0/Coding/Photography/m-photo-project/src/components/4-Projects/4a-Landscape/imgs-Landscape/DSC00655-4.jpg'
import image14 from '/Users/myles_deboer/Desktop/Desktop 2.0/Coding/Photography/m-photo-project/src/components/4-Projects/4a-Landscape/imgs-Landscape/DSC03089-3.jpg'
import image15 from '/Users/myles_deboer/Desktop/Desktop 2.0/Coding/Photography/m-photo-project/src/components/4-Projects/4a-Landscape/imgs-Landscape/final.jpg'
import image16 from '/Users/myles_deboer/Desktop/Desktop 2.0/Coding/Photography/m-photo-project/src/components/4-Projects/4a-Landscape/imgs-Landscape/flowershed-7.jpg'
import image17 from '/Users/myles_deboer/Desktop/Desktop 2.0/Coding/Photography/m-photo-project/src/components/4-Projects/4a-Landscape/imgs-Landscape/nusanoman.jpg'
import image18 from '/Users/myles_deboer/Desktop/Desktop 2.0/Coding/Photography/m-photo-project/src/components/4-Projects/4a-Landscape/imgs-Landscape/test2-4.jpg'

// CSS:
import styles from "./Landscape.module.css";

// MAPPED IMAGES: 
const images = [ 
  image1, 
  image2, 
  image3, 
  image4, 
  image5, 
  image6, 
  image7, 
  image8, 
  image9, 
  image10, 
  image11, 
  image12, 
  image13, 
  image14, 
  image15, 
  image16, 
  image17, 
  image18 
]

const imageElements = images.map((image, i ) => (
  <img className={styles.imgsLandscape} key={i} src={image} alt={`Image ${i + 1}`}  />
))


// LANDSCAPE: 
export default function Landscape() {
  return (
    <div>
      <header className={styles.pageHeader}>
        <div className={styles.pageHeaderContent}>
          <div className={styles.logo}>
            <Link to="/" style={{textDecoration: 'none'}}><home>← Home</home></Link>
          </div>
          <nav className={styles.primaryNav}>
            <ul className={styles.headerLinks}>
            <Link to="/landscape" style={{textDecoration: 'none'}}><landscape>Landscape</landscape></Link>
            <Link to="/realestate" style={{textDecoration: 'none'}}><realestate>Real Estate</realestate></Link>
            <Link to="/smallbusiness" style={{textDecoration: 'none'}}><smallbusiness>Small Businesses</smallbusiness></Link>
            <Link to="/virtualgallery" style={{textDecoration: 'none'}}><virtual>Virtual Gallery</virtual></Link>
              <theme><img src={midnightIcon} alt="" border="0" /></theme>
            </ul>
          </nav>
        </div>
      </header> 
      <section className={styles.landscape}>
        <h1>Landscape</h1>
        <div className={styles.landscapes}>
          {imageElements}
        </div>
      </section>
    </div>
  )
}