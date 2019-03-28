import React from "react";
import Navbar from "./navbar";
import styles from "./layout.module.css";

export default props => (
  <div className={(props.home ? styles.layoutHome : styles.layout)}>
    <Navbar home={props.home} />
    <div className={styles.container}>{props.children}</div>
  </div>
);
