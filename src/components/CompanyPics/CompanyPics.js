import React from "react"
import { Image } from "rebass"
import styles from "./CompanyPics.module.css"
import one from "../../images/company_logos/01_JPMC.png"
import two from "../../images/company_logos/02_DB.png"
import three from "../../images/company_logos/03_WF.png"
import four from "../../images/company_logos/04_MC.png"
import five from "../../images/company_logos/05_Bain.png"
import six from "../../images/company_logos/06_OW.png"
import seven from "../../images/company_logos/07_Deloitte.png"
import eight from "../../images/company_logos/08_PwC.png"
import nine from "../../images/company_logos/09_EY.png"
import ten from "../../images/company_logos/10_KPMG.png"
import eleven from "../../images/company_logos/11_Google.png"
import tweleve from "../../images/company_logos/12_Facebook.png"
import thirteen from "../../images/company_logos/13_Microsoft.png"
import fourteen from "../../images/company_logos/14_Amazon.png"
import fifteen from "../../images/company_logos/15_LinkedIn.png"
import sixteen from "../../images/company_logos/16_NBA.png"
import seventeen from "../../images/company_logos/17_Uber.png"
import eighteen from "../../images/company_logos/18_Slack.png"
import ninteen from "../../images/company_logos/19_TikTok.png"
import twenty from "../../images/company_logos/20_Disney.png"

const pictures = [
  one,
  two,
  three,
  four,
  five,
  six,
  seven,
  eight,
  nine,
  ten,
  eleven,
  tweleve,
  thirteen,
  fourteen,
  fifteen,
  sixteen,
  seventeen,
  eighteen,
  ninteen,
  twenty,
]

const CompanyPics = () => (
  <div className={styles.container}>
    {pictures.map((picture) => (
      <Image src={picture} />
    ))}
  </div>
)

export default CompanyPics
