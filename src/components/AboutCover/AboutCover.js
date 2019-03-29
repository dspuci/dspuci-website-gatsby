import React from "react"
import styles from "./AboutCover.module.css"
import { Text } from "rebass"

export default props => (
  <div className={styles.aboutCover}>
    <div className={styles.coverTitleContainer}>
      <Text className={styles.coverTitle} fontSize={[5, 6]} fontFamily="Heebo">
        America's <Text fontWeight="bold">Foremost</Text> Business Fraternity
      </Text>
    </div>
  </div>
)
