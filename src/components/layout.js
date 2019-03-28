import React from "react";
import Navbar from "./navbar";
import styles from "./layout.module.css";

export default props => (
  <div className={(props.home ? styles.layoutHome : styles.layout)}>
    <Navbar type={(props.home ? 'transparent' : 'solid')} />
    <div className={styles.container}>{props.children}</div>
  </div>
);
