import React from "react"
import styles from "./AboutCover.module.css"
import { Text } from "rebass"
import { lightColor } from "../../styles/defaultColors"

export default props => (
  <div className={styles.aboutCover}>
    <div className={styles.coverTitleContainer}>
      <Text
        className={styles.coverTitle}
        color={lightColor}
        fontSize={[6, 6, 7, 7]}
        fontFamily="Heebo"
        fontWeight="bold"
      >
        {/* America's <Text fontWeight="bold">Foremost</Text> Business Fraternity */}
        About Us
      </Text>
    </div>
  </div>
)
