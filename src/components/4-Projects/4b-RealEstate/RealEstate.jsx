// REACT:
import { Link } from 'react-router-dom'

// COMPONENTS:
import ImageSlider from './ImageSlider'

// DATA:
import { SliderData } from "./SliderData"

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
import styles from "./RealEstate.module.css";


// REAL ESTATE: 
export default function RealEstate() {
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
        <h1>Real Estate</h1>
        {/* <div className={styles.landscapes}> ORIGINAL STYLING FOR OPENING DIV */ }
        <div className={styles.slider}> 
          <ImageSlider slides={{SliderData}}/>
        </div>
      </section>
    </div>
  )
}

/* FREECODE CAMP REALSATE AXIS POINT ISSUE THAT YOU TOOK DOWN...USE THIS COPY AND PASTE FOR A DIFFERENT PAGE EXMAPLE LIKE SMALL BUSINESSES WHILE YOU WORK ON CAROUSEL
To start from the beginning. When visiting my site, you are brought to the home page. Then once you click ‘work’ in the nav bar, it brings you to 3 sections of Web Development, Photography, and Video. From there you click 'View / Buy" button in Photography → Issue lies here: if you scroll to view the photos, please scroll half way through the page (not all the way down), and then when your in the half way point of the scrolling axis point → then take cursor up to navbar and click ‘Real Estate’ → You will then be brought to the ‘/realestate’ path BUT you still stay in the same axis point as you were originally on the ‘Landscape’ page instead of being brought back to the top of the page as if it were a new page…Why is this? I am assuming it is a route issue, but I have no idea on how I can fix that after looking into it.

Please refer to my main routes in my index.js

Any help would be greatly appreciated
*/


/*
FIX NAV BAR -- ITS BECAUSE IT STOPS AT BOTTOM OF LANDSCAPE DIV. MAKE THE CAROUSEL FIRST 
*/