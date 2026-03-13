import React from "react"
import { Link } from "gatsby"
import styles from "./Button.module.css"

const Button = ({ to, text, hero }) => (
  <Link to={to} style={{ textDecoration: "none", color: hero ? "#000000" : "white" }}>
    <button className={hero ? `${styles.button} ${styles.buttonHero}` : styles.button}>{text}</button>
  </Link>
)

export default Button
