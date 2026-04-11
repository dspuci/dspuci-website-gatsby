import React from "react"
import styles from "./HomepageCard.module.css"

const HomepageCard = ({ image, title, children, actions }) => (
  <article className={styles.card}>
    <div className={styles.cardImageWrap}>
      <img src={image} alt="" className={styles.cardImage} />
    </div>
    <div className={styles.cardBody}>
      <h2 className={styles.cardTitle}>{title}</h2>
      <div className={styles.cardCopy}>
        <p className={styles.cardParagraph}>{children}</p>
      </div>
      <div className={styles.cardButtonWrap}>{actions}</div>
    </div>
  </article>
)

export default HomepageCard
