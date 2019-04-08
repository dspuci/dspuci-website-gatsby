import React from "react"
import { Box, Image, Text } from "rebass"
import styles from "./Brother.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { Link } from "gatsby"
import { withPrefix } from "gatsby"
import coatofarms from "../../images/coatofarms.jpg"
import { Fade } from "react-reveal"

class Brother extends React.Component {
  addDefaultSrc(ev) {
    ev.target.src = coatofarms
  }

  render() {
    let brotherInfo = {
      firstName: this.props.brotherInfo.First_Name.trim(),
      lastName: this.props.brotherInfo.Last_Name.trim(),
      codeName:
        this.props.brotherInfo.First_Name.trim() +
        "_" +
        this.props.brotherInfo.Last_Name.trim(),
      class: this.props.brotherInfo.Class.trim(),
      linkedInUrl: this.props.brotherInfo.LinkedIn_URL.trim(),
    }
    return (
      <Box p={3} width={[1, 1 / 2, 1 / 3, 1 / 5]} className={styles.brother}>
        <Fade>
          <Link to="/brothers">
            <Image
              onError={this.addDefaultSrc}
              className={styles.image}
              width={175}
              height={262.5}
              src={withPrefix(
                `/images/brothers/winter19/${brotherInfo.codeName}.jpg`
              )}
              borderRadius={8}
            />
          </Link>
          <Text className={styles.name} fontSize={[18, 16, 16, 14]}>
            {brotherInfo.firstName} {brotherInfo.lastName}
          </Text>
          <Text className={styles.class} fontSize={[14, 13, 12, 11]}>
            {brotherInfo.class} class
          </Text>
          <a
            href={brotherInfo.linkedInUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              className={styles.linkedinIcon}
              icon={faLinkedin}
            />
          </a>
        </Fade>
      </Box>
    )
  }
}

export default Brother
