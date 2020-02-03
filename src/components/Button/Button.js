import React from 'react';
import { Link } from "gatsby"
import styles from "./Button.module.css"


const Button = ({to, text}) => (
    <div className={styles.button}>
        <Link to={to} style={{ textDecoration: 'none', color: 'white' }}>
            <p>{text}</p>
        </Link>
    </div>
)

export default Button;