// import React from "react";
// import { Link, navigate } from "gatsby"
// import styles from "./ProWeekCover.module.css";

// const Button = ({to, text}) => (
//     <div className={styles.button}>
//         <Link to={to}>
//             <p>{text}</p>
//         </Link>
//     </div>
// )

// export default props => (
//   <div className={styles.proWeekCover}>
//     <div className={styles.homeTitle}>
//       <h1>Coming Soon</h1>
//       <p>ΔΣΠ Professionalism Week 2020</p>
//       <Button text="Register Now" to="/registration"/>
//       <Button text="Sample Case Study" to="/casestudy"/>
//     </div>
//   </div>
// )

import React from "react"
import styles from "./ProWeekCover.module.css"
import { Text } from "rebass"
import { withPrefix } from "gatsby"
import { darkColor, lightColor } from "../../styles/defaultColors"
import Typical from 'react-typical'

class ProWeekCover extends React.Component {
  render() {
    let textColor
    if (this.props.textColor === "white") {
      textColor = lightColor
    } else if (this.props.textColor === "black") {
      textColor = darkColor
    }

    return (
      <div
        className={styles.proWeekCover}
        style={{
          backgroundImage:
            (this.props.darkGradient
              ? "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), "
              : "") +
            "url(" +
            withPrefix(`/images/cover_images/${this.props.coverImage}`) +
            ")",
        }}
      >
        <div className={styles.coverTitleContainer}>
            <Text
            className={styles.coverTitle}
            color={textColor}
            fontSize={[5, 6, 6, 8]}
            fontFamily="Heebo"
          >
            {this.props.text}
          </Text>
        </div>
      </div>
    )
  }
}

export default ProWeekCover
