import React from "react"
import Carousel from "@brainhubeu/react-carousel"
import "@brainhubeu/react-carousel/lib/style.css"
import imageOne from "../../images/max_recruitment.jpeg"
import imageTwo from "../../images/julia_recruitment.png"
import imageThree from "../../images/forest_recruitment.png"
import imageFour from "../../images/mirsab_recruitment.jpeg"
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
        description="Initiated in my First Year Fall | Economics | Interested in Product Marketing"
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
        name="Julia Lin"
        description="Initiated in my First Year Fall | Business Administration | Interested in Marketing, Strategy and Consulting"
        bio="Before coming to UCI, I felt a little bit lost because I came in not knowing anybody and also wasn't quite sure what 
        I was looking for out of college or a career post-graduation. DSP has absolutely been my family away from home and has been 
        the best well-rounded community I could've ever asked for in college. The people I've met in DSP are not only some of my closest 
        friends but people that I've been able to rely on all throughout college. I've also grown in huge ways not only professionally 
        but also personally that I could have never even imagined before joining DSP. DSP has been a perfect environment for me to find 
        mentorship, support, and community but also an environment that pushes me to achieve new heights and challenge myself to do things 
        I never thought I could do. This community has immensely helped guide my direction in terms of professionalism and career but 
        also has helped me navigate college as a whole!"
      />
      <SpotlightCard
        src={imageThree}
        name="Forest Huang"
        description="Initiated in my First Year Fall | Business Administration | Interested in Consulting, Esports/Gaming and Product Management"
        bio="As an out-of-state student, my decision to join the DSP (Delta Sigma Pi) fraternity was driven by my desire to be a part of a 
        community of motivated and outstanding individuals. From the moment I joined, DSP has significantly enriched my college experience. 
        It's more than just a fraternity; it's a family. Some of my fondest memories have been created during our adventures, like our unforgettable 
        trip to Big Bear and the memorable Duffy Boating excursion. These experiences have forged lifelong friendships and provided me with a 
        strong support system throughout my academic journey. Moreover, DSP has played a pivotal role in my career development. The fraternity's 
        ethos of mutual encouragement and support has pushed me to constantly strive for excellence. The members are always willing to lend a helping 
        hand or offer valuable advice when needed. Through DSP, I've not only developed essential leadership and teamwork skills, but also expanded my 
        professional network, which has proved invaluable as I navigate my career path."
      />
      <SpotlightCard
        src={imageFour}
        name="Mirsab Mirza"
        description="Initiated in my Second Year Fall | Economics, Social Policy & Public Service | Interested in Marketing and Public Health"
        bio="Coming out of high school where I was involved in many business related organizations, I completed my first year at UCI knowing 
        I was missing something. I wanted to be a part of a professional organization that promoted diverse thought and the importance of 
        being yourself, but whether or not that organization existed was something I wasn’t sure about. It wasn’t until my second year that 
        I properly sought into DSP and after meeting so many unique individuals with various aspirations, I knew it would fill the void I was
         seeking for. Looking back, I can whole-heartedly say that DSP has become an integral part of my college experience and one that has 
         shaped me both professionally and personally. Most of all, I have established bonds with people within the chapter that I hope to 
         carry on much beyond my time here at UCI."
      />
    </Carousel>
  )
}

export default RecCarousel
