import React from "react";
import { Link, navigate } from "gatsby"
import styles from "./ProWeekCover.module.css";

const Button = ({to, text}) => (
    <div className={styles.button}>
        <Link to={to}>
            <p>{text}</p>
        </Link>
    </div>
)

export default props => (
  <div className={styles.proWeekCover}>
    <div className={styles.homeTitle}>
      <h1>Coming Soon</h1>
      <p>ΔΣΠ Pro Week 2020</p>
      <Button text="Register Now" to="/registration"/>
      <Button text="Sample Case Study" to="/casestudy"/>
    </div>
  </div>
)
