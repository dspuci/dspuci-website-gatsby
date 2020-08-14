import React from 'react';
import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import imageOne from '../../images/ryan_recruitment.jpeg'
import imageTwo from '../../images/tiffany_recruitment.jpeg'
import imageThree from '../../images/brian_recruitment.jpeg'
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import styles from "./RecCarousel.module.css"

const SpotlightCard = (props) => {
  return(
    <div className={styles.cardContainer}>
      <img src={props.src} className={styles.img}/>
      <div className={styles.textContainer}>
        <h2>{props.name}</h2>
        <h3>{props.description}</h3>
        <p>{props.bio}</p>
      </div>
    </div>
  )
}

const RecCarousel = (props) => {
  return(
    <Carousel
      clickToChange
      arrowLeft={<FontAwesomeIcon icon={faChevronLeft} size="2x"/>}
      arrowLeftDisabled={<FontAwesomeIcon icon={faChevronLeft} color="gray" size="2x"/>}
      arrowRight={<FontAwesomeIcon icon={faChevronRight} size="2x"/>}
      arrowRightDisabled={<FontAwesomeIcon icon={faChevronRight} color="gray" size="2x"/>}
      addArrowClickHandler={true}
      centered
    >
      <SpotlightCard 
        src={imageOne}
        name="Ryan Lau"
        description="Initiated in my Third Year Fall | Business Economics | Interested in Corporate Strategy"
        bio="When I was looking to get involved during my third year at UCI, I wanted a community that aligned 
        with my personal and professional goals, and what I found was beyond anything I expected. In all honesty, 
        I wasn’t very happy at UCI during my first two years. I didn’t have that community at school to fall back 
        on, and this translated into a cycle of me feeling like I wasn’t getting the most out of my college years. 
        Frankly, I wanted to get college over with as fast as I could. However, I found a group of people I can 
        call my family, and that’s never something I thought I’d be able to say. After finding DSP, I’ve enjoyed 
        every second I’ve had at school and am sad to see it come to an end this school year. I can confidently 
        say that joining DSP was one of the best decisions I’ve ever made in college."
      />
      <SpotlightCard 
        src={imageTwo}
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
        src={imageThree}
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

export default RecCarousel;
