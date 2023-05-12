// REACT:
import React, {useState} from "react"
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa'

// DATA: 
import { SliderData } from "./SliderData"

// CSS:
import styles from './RealEstate.module.css'

// IMAGE SLIDER: 
const ImageSlider = ({ slides }) => {
  const [current, setCurrent] = useState(0)
  const length = slides.length

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
    if (current === 19) {
      setCurrent(0)
    }
  }

  console.log(current);

  // ISSUE: This was not working, but you were able to reset back to zero, based on the console log, by adding the if statement above by setting setCurrent(0)
  // if (!Array.isArray(slides) || slides.length <= 0 ) {
  //   return null
  // }

  return  (
    <section className="slider">
      <FaArrowAltCircleLeft className={styles.leftArrow} />
      <FaArrowAltCircleRight className={styles.rightArrow} onClick={nextSlide} />
      {SliderData.map((slide) => {
        return <img src={slide} alt="" className={styles.image}  />
      })}
    </section>
  )
}

export default ImageSlider