import React from "react"
import Carousel from "@brainhubeu/react-carousel"
import "@brainhubeu/react-carousel/lib/style.css"
import imageOne from "../../images/max_recruitment.jpeg"
import imageTwo from "../../images/emily_recruitment.jpeg"
import imageThree from "../../images/tiffany_recruitment.jpeg"
import imageFour from "../../images/brian_recruitment.jpeg"
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import styles from "./RecCarousel.module.css"

const SpotlightCard = (props) => {
  return (
    <div className={styles.cardContainer}>
      <img src={props.src} className={styles.img} alt={props.src} />
      <div className={styles.textContainer}>
        <h2>{props.name}</h2>
        <h3>{props.description}</h3>
        <p>{props.bio}</p>
      </div>
    </div>
  )
}

const RecCarousel = () => {
  return (
    <Carousel
      clickToChange
      arrowLeft={<FontAwesomeIcon icon={faChevronLeft} size="2x" />}
      arrowLeftDisabled={
        <FontAwesomeIcon icon={faChevronLeft} color="gray" size="2x" />
      }
      arrowRight={<FontAwesomeIcon icon={faChevronRight} size="2x" />}
      arrowRightDisabled={
        <FontAwesomeIcon icon={faChevronRight} color="gray" size="2x" />
      }
      addArrowClickHandler={true}
      centered
    >
      <SpotlightCard
        src={imageOne}
        name="Maxwell Xu"
        description="Initiated in my First Year Fall | Business Economics | Interested in Product Marketing"
        bio="With my first year of college being completely online, it felt like all the advice I got coming into freshman 
        year didn’t apply anymore. I came in directionless in both who I am, and the person that I wanted to become. However, 
        after joining DSP in the fall of my first year, I finally found a community that supported me through thick and thin, 
        no matter the circumstances. The brothers were more than willing to go out of their way to help provide resources 
        and advice on anything that I had questions about. I’ve not only gained so much insight on the professional world 
        and my personal aspirations, but I’ve also gained a group of people I can call my life-long friends. Joining DSP 
        was probably the most impactful and life-changing decision I’ve made in my college career so far!"
      />
      <SpotlightCard
        src={imageTwo}
        name="Emily Ros"
        description="Initiated in my Third Year Spring | Business Economics | Interested in Product Management and Marketing"
        bio="Before coming to UC Irvine, I felt that I never held a strong interest in a specific field and I felt lost. 
        I knew that the best way to truly understand what I wanted to pursue was by talking to other students and getting 
        involved. I discovered DSP by their various involvements in other business organizations at UC Irvine and that was 
        when I decided to come out to recruitment. I enjoyed each of my conversations with the bros and I felt that each 
        of them would support me in my professional endeavors, and I was right. DSP had introduced me to so many unique 
        individuals that care for me more than I would have ever hoped for in both personal and professional aspects. 
        I had also found my interest in Product Management and Marketing by hearing their experiences and gaining my own. 
        I am glad to have come out to DSP to have created the friendships that I have now. They have truly helped me grow 
        personally and professionally."
      />
      <SpotlightCard
        src={imageThree}
        name="Tiffany Than"
        description="Initiated in my First Year Fall | Business Administration | Interested in Human Resources"
        bio="Coming from a background where all my friends were pursuing a career in STEM, I felt as if I was 
        completely on my own as a business major. I knew I had to get involved to gain guidance and that sense 
        of belonging, especially as a first year with no professional experience. After attending my first recruitment 
        event, I realized that DSP was that one stop shop for the perfect blend of professionalism, friendships, 
        and resources. I gained so much industry knowledge, tips, and tricks that I would not have known on my own. 
        Through DSP, I was able to uncover a passion for HR and landed an internship with everything I’ve learned. 
        Every bro is so willing to help and motivate each other to succeed, and I am proud to say that I’ve found 
        some life long friendships in DSP as well."
      />
      <SpotlightCard
        src={imageFour}
        name="Brian Anderson"
        description="Initiated in my Second Year Fall | Computer Science & Engineering | Interested in Tech and Law"
        bio="As someone who is interested in a disjoint myriad of subjects and fields, I spent my first year at UCI 
        trying to get involved in as much as I possibly could, joining organizations and taking a wide breadth of 
        classes. However, it wasn’t until I joined DSP at the beginning of my second year that I truly felt like I 
        found the centralized, all-encompassing hub for professional development and, even beyond that, the home on 
        campus I had been searching for. I aspire to be an attorney, and it seems difficult to imagine a business-centric 
        fraternity as a place conducive to that kind of career path. But despite the substantial deviation, the brothers 
        have gone out of their way to aid me – from researching career avenues to providing internship opportunities. 
        I can say with certainty that I have grown unprecedented amounts as a professional and an individual in the 
        small time frame I have been a member."
      />
    </Carousel>
  )
}

export default RecCarousel
