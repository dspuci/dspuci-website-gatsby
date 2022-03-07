import React from "react"
import { Box, Image, Text } from "rebass"
import styles from "./Brother.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import { Link } from "gatsby"
import { withPrefix } from "gatsby"
import coatofarms from "../../images/coatofarms.jpg"
import { Fade } from "react-reveal"

const term = "winter20"

class Brother extends React.Component {

  // Adding the Coat of Arms to anyone who does not have a profile picture
  addDefaultSrc(ev) {
    ev.target.src = coatofarms
  }

  render() {
    let brotherInfo = {
      firstName: this.props.brotherInfo.First_Name.trim(),
      lastName: this.props.brotherInfo.Last_Name.trim(),
      codeName: `${this.props.brotherInfo.First_Name.trim()} ${this.props.brotherInfo.Last_Name.trim()}`
        .split(" ")
        .join("_")
        .toLowerCase(),

      subtitle: this.props.brotherInfo.Class.trim() + " class",
      linkedInUrl: this.props.brotherInfo.LinkedIn_URL.trim(),
      email: "mailto:" + this.props.brotherInfo.Email.trim(),
    }
    
    return (
      <Box p={3} width={[1, 1 / 2, 1 / 3, 1 / 5]} className={styles.brother}>
        <Fade>
          <Link to={`${brotherInfo.codeName}`}>
            <Image
              onError={this.addDefaultSrc}
              className={styles.image}
              width={175}
              height={262.5}
              src={withPrefix(
                `/images/brothers/${term}/${brotherInfo.codeName}.jpg`)}
              borderRadius={8}
            />
          </Link>
          <Text className={styles.name} fontSize={[18, 16, 16, 14]}>
            {brotherInfo.firstName} {brotherInfo.lastName}
          </Text>
          <Text className={styles.class} fontSize={[14, 13, 12, 11]}>
            {brotherInfo.subtitle}
          </Text>
          <a
            href={brotherInfo.linkedInUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              className={styles.linkedinIcon}
              icon={faLinkedin}
              size="xs"
            />
          </a>
          <a
            href={brotherInfo.email}
            target="_blank"
            rel="noopener noreferrer"
            style={{ marginLeft: "20px" }}
          >
            <FontAwesomeIcon
              className={styles.linkedinIcon}
              icon={faEnvelope}
              size="xs"
            />
          </a>
        </Fade>
      </Box>
    )
  }
}

class LeaderBrother extends React.Component {
  addDefaultSrc(ev) {
    ev.target.src = coatofarms
  }

  render() {
    let fullName = this.props.name
    let codeName = fullName.split(" ").join("_").toLowerCase()
    let subtitle = this.props.title.trim()
    return (
      <Box p={3} width={[1, 1 / 2, 1 / 3, 1 / 5]} className={styles.brother}>
        <Fade>
          <Link to={`${codeName}`}>
            <Image
              onError={this.addDefaultSrc}
              className={styles.image}
              width={175}
              height={262.5}
              src={withPrefix(`/images/brothers/${term}/${codeName}.jpg`)}
              borderRadius={8}
            />
          </Link>
          <Text className={styles.name} fontSize={[18, 16, 16, 14]}>
            {fullName}
          </Text>
          <Text className={styles.class} fontSize={[14, 13, 12, 11]}>
            {subtitle}
          </Text>
        </Fade>
      </Box>
    )
  }
}

export { Brother, LeaderBrother }
