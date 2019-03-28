import React from "react";
import styles from "./navbar.module.css";
import { Link } from "gatsby";

const ListLink = props => (
  <li>
    <Link to={props.to}>
      {props.children}
    </Link>
  </li>
);

export default props => (
  <div className={(props.home ? styles.navbarHome : styles.navbar)}>
    <ul>
        <ListLink to="/">Home</ListLink>
        <ListLink to="/about">About</ListLink>
        <ListLink to="/brothers">Brothers</ListLink>
        <ListLink to="/careers">Careers</ListLink>
        <ListLink to="/recruitment">Recruitment</ListLink>
        <ListLink to="/gallery">Gallery</ListLink>
    </ul>
  </div>
);
