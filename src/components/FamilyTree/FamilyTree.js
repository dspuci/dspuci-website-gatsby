import React from "react"
import { Box, Image, Text } from "rebass"
import styles from "./FamilyTree.module.css"
import { Link } from "gatsby"
import { withPrefix } from "gatsby"
import { Fade } from "react-reveal"

class FamilyTree extends React.Component {
  render() {
    return (
      <Box p={3} width={[1, 1 / 2, 1 / 3]} className={styles.brother}>
        <Fade>
          <Link to={`brothers/${brotherInfo.codeName}`}>
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
            />
          </a>
        </Fade>
      </Box>
    )
  }
}

export default FamilyTree
