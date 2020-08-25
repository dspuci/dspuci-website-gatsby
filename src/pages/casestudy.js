import React from 'react'
import { Fade } from "react-reveal"

import { CoverLayout } from "../components/Layout"
import ImageCover from "../components/ImageCover"
import Section from "../components/Section"
import {Helmet} from "react-helmet";

export default () => (
  <CoverLayout
    navbarTextColor="white"
    coverElement={
      <ImageCover
        text="Case Study Competition Sample Case"
        coverImage="casestudy.jpg"
        textColor="white"
        darkGradient
      />
    }
  >
    <Helmet>
        <title>Case Study Competition | Delta Sigma Pi - Pi Sigma Chapter</title>
        <meta name="Delta Sigma Pi - Pi Sigma Chapter Case Study Competition Page" content="Delta Sigma Pi - Pi Sigma Chapter Case Study Competition Page" />
    </Helmet>
    <Fade>
      <Section sx={{ justifyContent: "left" }}>
        <h1 style={{ marginBottom: 10, fontSize: 40}}>Delta Sigma Pi: Professionalism Week - Winter 2020</h1>
        <h1 style={{ marginBottom: 10, fontSize: 40}}>Case Study Competition - Sample Case</h1>
      </Section>

      <Section sx={{ justifyContent: "left" }}>
        <h1 style={{ marginBottom: 10 }}>Case Instructions:</h1>
        <div>
          - You have 20 minutes to review this case with your teammates. No phones/tech during case prep.
          <br/>
          - You may take notes (notecards/pens provided at event) and use them during the presentation.
          <br/>
          - You will assume the role of a consulting firm hired to present the case deliverables to the client (judges).
          <br/>
          - Presentation to judges: 5-7 minutes, Q&A: 3 minutes, Feedback/Discussion: 5 minutes 
        </div>
      </Section>

      <Section sx={{ justifyContent: "left" }}>
        <h1 style={{ marginBottom: 10 }}>Case Introduction:</h1>
        <div>
          You are to assume the role of a consultant working for your client, 
          ANTEATER HOTELS, a moderately priced hotel chain with properties across the country. 
          The C-Suite of the company (judges) has asked you to create marketing strategies and 
          recommend operational changes that focus on teenagers and young adults as the target market. 
        </div>
        <br/>
        <div>
          ANTEATER HOTELS has over 1,500 properties across the United States. Each ANTEATER HOTEL 
          location boasts full-service restaurants, spa and fitness centers, and pools with playground 
          areas along with beautifully appointed guest rooms and suites. The company has the highest 
          rating in overall customer service and is in tight competition with its closest competitor 
          for most rewards club members. While business isn’t hurting, the C-Suite (judges) feels 
          that more attention needs to be focused on expanding brand loyalty, especially to 
          teenagers (age 13-18) and young adults (age 18-25). Company data also shows that young 
          adults make up the smallest portion of their rewards club members. 
        </div>
        <br/>
        <div>
          ANTEATER HOTELS is interested in hearing about effective marketing strategies that can 
          draw in teenagers and young adults to their hotels. Your client is also interested in 
          operational changes to restaurants, fitness centers, and other amenities offered. Lastly, 
          touch upon how the rewards program can be modified to appeal to young adults. 
          The C-Suite (judges) will begin the role-play by greeting you and asking to hear your ideas. 
          After you have presented your strategies and have answered their questions, the C-Suite (judges) 
          will conclude by thanking you for your work and breaking character to go into feedback/discussion of the case.
        </div>
      </Section>

      <Section sx={{ justifyContent: "left" }}>
        <h1 style={{ marginBottom: 10 }}>Case Deliverables:</h1>
        <div>
          - Identify company’s unique value proposition.
          <br />
          - Identify steps and information needed prior to implementing a marketing campaign.
          <br />
          - Explain trends in the industry pertaining to teenagers and young adults.
          <br />
          - Conduct a cost-benefit analysis on potential amenities and offerings at hotel restaurants, spa, fitness centers, and other operations
          <br />
          - Identify potential pain-points of the current rewards program for young adult club members.  
        </div>
      </Section>

      <Section sx={{ justifyContent: "left" }}>
        <h1 style={{ marginBottom: 10 }}>Case Solution:</h1>
        <div>
          The solution and detailed breakdown of this case, along with why case studies are 
          used in interviews, case techniques/frameworks, and general business topics will 
          be reviewed at:
        </div>
      </Section>
      <Section >
        <h1 style={{ marginBottom: 10 }}>Case Study Workshop - Business 101</h1>
        <h1 style={{ marginBottom: 10 }}>February 13th, 2020 | 4-6PM</h1>
        <h1 style={{ marginBottom: 10 }}>UCI Student Center | Doheny Beach B</h1>
      </Section>
    </Fade>

  </CoverLayout >
)
