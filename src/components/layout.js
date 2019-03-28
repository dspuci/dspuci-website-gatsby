import React from "react"
import { NavbarSolid, NavbarTransparentWhite } from "./navbar"
import styles from "./layout.module.css"

export default props => (
  <div className={props.home ? styles.layoutHome : styles.layout}>
    {props.home ? <NavbarTransparentWhite /> : <NavbarSolid />}
    <div className={styles.container}>{props.children}</div>
  </div>
)
