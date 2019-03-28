import React from "react"
import styles from "./Navbar.module.css"
import { Link } from "gatsby"
import { lightColor, darkColor } from "../../styles/defaultColors"

const ListLink = props => (
  <li>
    <Link to={props.to} style={props.style}>
      {props.children}
    </Link>
  </li>
)

class Navbar extends React.Component {
  constructor(props) {
    super(props)
    this.textColor = this.props.textColor
    this.backgroundColor = this.props.backgroundColor
  }
  render() {
    return (
      <div
        className={this.props.className + " " + styles.navbar}
        style={{ backgroundColor: this.backgroundColor }}
      >
        <ul>
          <ListLink to="/" style={{ color: this.textColor }}>
            Home
          </ListLink>
          <ListLink to="/about" style={{ color: this.textColor }}>
            About
          </ListLink>
          <ListLink to="/brothers" style={{ color: this.textColor }}>
            Brothers
          </ListLink>
          <ListLink to="/careers" style={{ color: this.textColor }}>
            Careers
          </ListLink>
          <ListLink to="/recruitment" style={{ color: this.textColor }}>
            Recruitment
          </ListLink>
          <ListLink to="/gallery" style={{ color: this.textColor }}>
            Gallery
          </ListLink>
        </ul>
      </div>
    )
  }
}

class NavbarSolid extends React.Component {
  render() {
    return (
      <Navbar
        className={styles.navbarSolid}
        backgroundColor={
          this.props.backgroundColor ? this.props.backgroundColor : lightColor
        }
        textColor={this.props.textColor ? this.props.textColor : darkColor}
      >
        {this.props.children}
      </Navbar>
    )
  }
}

class NavbarTransparentWhite extends React.Component {
  render() {
    return (
      <Navbar
        className={styles.navbarTransparent}
        textColor={this.props.textColor ? this.props.textColor : lightColor}
      >
        {this.props.children}
      </Navbar>
    )
  }
}

class NavbarTransparentBlack extends React.Component {
  render() {
    return (
      <Navbar
        className={styles.navbarTransparent}
        textColor={this.props.textColor ? this.props.textColor : darkColor}
      >
        {this.props.children}
      </Navbar>
    )
  }
}

export { NavbarSolid, NavbarTransparentWhite, NavbarTransparentBlack }
