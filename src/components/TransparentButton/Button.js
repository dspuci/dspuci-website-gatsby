import React from 'react';
import { Link } from "gatsby"
import styles from "./Button.module.css"


const Button = ({to, text}) => (
    <Link to={to} style={{ textDecoration: 'none', color: 'white' }}>
        <button className={styles.button}>{text}</button>
    </Link>
)

export default Button;