import React from "react";
import { Image } from "rebass";
import styles from "./CompanyPics.module.css";
import Carousel from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";

import one from "../../images/company_logos/01_JPMC.png";
import two from "../../images/company_logos/02_DB.png";
import three from "../../images/company_logos/03_WF.png";
import four from "../../images/company_logos/04_MC.png";
import five from "../../images/company_logos/05_Bain.png";
import six from "../../images/company_logos/06_VISA.png";
import seven from "../../images/company_logos/07_Deloitte.png";
import eight from "../../images/company_logos/08_NASA.png";
import nine from "../../images/company_logos/09_KP.png";
import ten from "../../images/company_logos/10_KPMG.png";
import eleven from "../../images/company_logos/11_Google.png";
import twelve from "../../images/company_logos/12_Facebook.png";
import thirteen from "../../images/company_logos/13_Microsoft.png";
import fourteen from "../../images/company_logos/14_Amazon.png";
import fifteen from "../../images/company_logos/15_PayPal.png";
import sixteen from "../../images/company_logos/16_NBA.png";
import seventeen from "../../images/company_logos/17_Uber.png";
import eighteen from "../../images/company_logos/18_Slack.png";
import nineteen from "../../images/company_logos/19_TikTok.png";
import twenty from "../../images/company_logos/20_Disney.png";

const pictures = [
  one, two, three, four, five, six, seven, eight, nine, ten,
  eleven, twelve, thirteen, fourteen, fifteen, sixteen, seventeen,
  eighteen, nineteen, twenty
];

const CompanyPics = () => (
  <div className={styles.container}>
    <Carousel
      infinite
      autoPlay={200} // Smaller value for smoother scroll
      animationSpeed={15000} // Slow transition for a smooth effect
      slidesPerPage={5}
      slidesPerScroll={1} // Moves one slide at a time
      itemWidth={180} // Adjust as needed for a smoother effect
      stopAutoPlayOnHover={false} // Keeps it moving
    >
      {pictures.map((picture, index) => (
        <Image key={index} src={picture} className={styles.logo} />
      ))}
    </Carousel>
  </div>
);

export default CompanyPics;
