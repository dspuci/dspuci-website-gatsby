import React from "react"
import Carousel from "@brainhubeu/react-carousel"
import "@brainhubeu/react-carousel/lib/style.css"
import imageOne from "../../images/haylie_recruitment.jpeg"
import imageFive from "../../images/coca_recruitment.jpeg"
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
        name="Haylie Lee"
        description="Initiated in my Second Year Spring | Businesss Administration | Interested in Marketing and Accounting"
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
