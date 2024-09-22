import React from "react"
import Carousel from "@brainhubeu/react-carousel"
import "@brainhubeu/react-carousel/lib/style.css"
import imageOne from "../../images/haylie_recruitment.jpeg"
import imageFive from "../../images/coca_recruitment.jpeg"
import imageTwo from "../../images/andrew_recruitment.jpg"
import imageThree from "../../images/justin_recruitment.jpg"
import imageFour from "../../images/sanika_recruitment.jpg"
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
        src={imageFour}
        name="Sanika Saitawdekar"
        description="Initiated in my First Year Spring | Business Administration | Interested in Operations and Project Management"
        bio="As an out-of-state student, finding my own community was of huge importance to me. I was very lucky and grateful to 
        see that involving myself in the business community surrounded me with driven and likeminded people that would soon become 
        some of my closest friends. Compared to other clubs on campus with members who come and go, DSP allowed me to build strong 
        relationships with people who I know I can rely on for the rest of my college career. I have loved getting to know the people 
        who surround me, and they have pushed me to grow both personally and professionally. Throughout my time so far, I’ve become 
        more outgoing and social, more professionally accomplished, and so much more. This past year has been the best of my life, 
        and it truly wouldn’t have been the same without the impact of DSP. "
      />
      <SpotlightCard
        src={imageThree}
        name="Justin Pham"
        description="Initiated in my Second Year Spring | Computer Science & Informatics | Interested in Software Engineering and Product Management"
        bio="Joining DSP in my second year has been transformative for both my personal and professional growth. Surrounded by driven peers, I've had 
        the chance to collaborate on meaningful projects, expand my network, and develop essential skills in software development and project management. 
        The mentorship and support from fellow members have guided me through internships and career planning, while reinforcing my passion for technology 
        and AI. DSP has not only enhanced my confidence but also deepened my commitment to using improving myself. I joined for the professional development, 
        but found myself gaining some of my closest friends ever. This has been one of the best decisions I have made so far in my college journey, and I 
        strongly recommend anyone who is slightly interested to come out and see what Pi Sigma has to offer!"
      />
      <SpotlightCard
        src={imageOne}
        name="Haylie Lee"
        description="Initiated in my Second Year Spring | Business Administration | Interested in Marketing and Accounting"
        bio="Of all of the decisions I’ve made in my three years of college as a current third year, joining DSP is definitely the 
        best and most invaluable one of them all. I recall being skeptical on coming out to recruitment for a while because I was nervous 
        about meeting so many new people, but I fully accept now that it is the best thing I could’ve done for myself in the long run, 
        both personally and professionally. I’ve been a brother for about almost a year now. During this year, I’ve made countless 
        amazing memories, genuine friends and connections, and great progress for my career interests. DSP has changed my 
        character in a great way, allowing me to step out of my comfort zone and become more socially and professionally confident 
        while also giving me the opportunity to strengthen the skills that I came in with. I got my first internship through the 
        connections I made here, which I am immensely excited for! However, undoubtedly, the thing I cherish the most out of 
        everything are the wonderful friendships and bonds I’ve created with my brothers, specifically, my pledge class. 
        Through DSP, I’ve gained 14 of my closest friends and supporters, people I can rely on and share my problems and 
        accomplishments with. We’ve created so many memories together that I know I will treasure for the rest of my life, 
        and I am sincerely thankful each and everyday that DSP lead me to such amazing people. I think my college experience 
        would be very different had I not joined, and I do not take for granted a single thing that this business fraternity 
        has blessed me with."
      />
      <SpotlightCard
        src={imageTwo}
        name="Andrew Ly"
        description="Initiated in my Second Year Spring | Business Information Management | Interested in Product Management and Software Engineering"
        bio="As a second-year student seeking professional growth, I joined DSP recruitment in search of a community that could both inspire me and guide 
        me toward who I want to become. Since joining, DSP has not only provided this professional support but has also introduced me to some of my closest 
        friends at UCI. Being surrounded by such motivated and inspiring individuals every day has significantly impacted me, helping me realize my potential 
        in the professional world. Everyone, including alumni, is always willing to lend a helping hand, and I’m confident that the professional community 
        our chapter has built will continue to inspire and support others, including myself.
        In addition to professional growth, DSP has also given me some of the closest friendships I've formed at UCI. Together, we’ve created unforgettable 
        memories that I’ll cherish for years to come. Ultimately, joining DSP has been one of the best decisions I’ve made at UCI, and I encourage anyone 
        interested to check it out!"
      />
      <SpotlightCard
        src={imageFive}
        name="Coca Ho"
        description="Initiated in my First Year Spring | Business Administration | Interested in Consulting and Accounting"
        bio="My decision to join DSP  stemmed from my desire to become part of a community filled with motivated and exceptional 
        individuals. Since becoming a member, DSP has greatly enriched my college journey, transcending the bounds of a mere 
        professional fraternity to become some of the closest friendships I've made. Many of my fondest college memories have 
        come from our many adventures, including our quarterly retreats and pledge class bondings. Building relationships with 
        my pledge class has truly been the highlight of my college experience. I cannot envision college—or life—without them!
        Additionally, DSP has been instrumental in shaping my career development. The fraternity's culture of mutual 
        encouragement and support has motivated me to continually strive for excellence. Being surrounded by such a diverse 
        and ambitious group of people has truly motivated me to elevate my efforts, and for that, I am immensely thankful. 
        Through DSP, I've not only honed crucial leadership and teamwork skills but also expanded my professional connections, 
        proving invaluable as I chart my career path."
      />
    </Carousel>
  )
}

export default RecCarousel
