import React from "react"
import { Image } from "rebass"
import { withPrefix } from "gatsby"
import styles from "./CompanyPics.module.css"

const pictures = [

]

const CompanyPics = () => {
    <div className={styles.container}>
        {pictures.map(picture => (
            <Image src={picture}/>
        ))}
    </div>
}

export default CompanyPics
