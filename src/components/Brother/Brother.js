import React from "react"
import { Box, Image, Text } from "rebass"
import styles from "./Brother.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { Link } from "gatsby"

export default props => (
  <Box p={3} width={[1, 1 / 2, 1 / 3, 1 / 5]} className={styles.brother}>
    <Link to="/brothers">
      <Image
        className={styles.image}
        width={175}
        height={262.5}
        src="http://www.dspuci.com/images/brothers/brothers_winter2019/farbod_rafezy.jpg"
        borderRadius={8}
      />
    </Link>
    <Text className={styles.name} fontSize={[18, 16, 16, 14]}>
      {props.brotherInfo.name}
    </Text>
    <Text className={styles.class} fontSize={[14, 13, 12, 11]}>
      {props.brotherInfo.class} class
    </Text>
    <a
      href={props.brotherInfo.linkedInUrl}
      target="_blank"
      rel="noopener noreferrer"
    >
      <FontAwesomeIcon className={styles.linkedinIcon} icon={faLinkedin} />
    </a>
  </Box>
)
