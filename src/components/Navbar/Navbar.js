import React from "react"
import styles from "./Navbar.module.css"
import { Link } from "gatsby"
import { lightColor, darkColor, darkOverlay } from "../../styles/defaultColors"

const ListLink = props => (
  <li>
    <Link to={props.to} style={props.style}>
      {props.children}
    </Link>
  </li>
)

const Links = props => (
  <ul>
    <ListLink to="/" style={{ color: props.textColor }}>
      Home
    </ListLink>
    <ListLink to="/about" style={{ color: props.textColor }}>
      About
    </ListLink>
    <ListLink to="/brothers" style={{ color: props.textColor }}>
      Brothers
    </ListLink>
    <ListLink to="/careers" style={{ color: props.textColor }}>
      Careers
    </ListLink>
    <ListLink to="/recruitment" style={{ color: props.textColor }}>
      Recruitment
    </ListLink>
    <ListLink to="/gallery" style={{ color: props.textColor }}>
      Gallery
    </ListLink>
  </ul>
)

class MinimalBar extends React.Component {
  render() {
    if (!this.props.show) {
      return null
    }
    return (
      <div
        className={this.props.className}
        style={{ backgroundColor: this.props.backgroundColor }}
      >
        <button
          style={{ color: this.props.textColor }}
          className={styles.menuButton}
          onClick={this.props.onClick}
        >
          <span style={{ color: this.props.textColor }}>Menu</span>
        </button>
      </div>
    )
  }
}

class FullBar extends React.Component {
  constructor(props) {
    super(props)
    this.textColor = this.props.textColor
    this.backgroundColor = this.props.backgroundColor
  }
  render() {
    return (
      <div
        className={this.props.className}
        style={{ backgroundColor: this.backgroundColor }}
      >
        <Links textColor={this.textColor} />
      </div>
    )
  }
}

class NavMobileMenu extends React.Component {
  constructor(props) {
    super(props)
    this.textColor = this.props.textColor
    this.backgroundColor = this.props.backgroundColor
      ? this.props.backgroundColor
      : darkOverlay
  }
  render() {
    if (!this.props.show) {
      return null
    }
    return (
      <div
        className={this.props.className}
        style={{ backgroundColor: this.backgroundColor }}
      >
        <button className={styles.closeButton} onClick={this.props.onClick}>
          <span style={{ color: this.props.textColor }}>Close</span>
        </button>
        <Links textColor={this.textColor} />
      </div>
    )
  }
}

class Navbar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      toggled: false,
    }

    this.handleMenuClick = this.handleMenuClick.bind(this)
    this.handleCloseButtonClick = this.handleCloseButtonClick.bind(this)
  }

  handleMenuClick() {
    this.setState({
      toggled: true,
    })
  }

  handleCloseButtonClick() {
    this.setState({
      toggled: false,
    })
  }

  render() {
    return (
      <div>
        <FullBar
          className={[
            styles.navbar,
            styles.navbarDesktop,
            this.props.className,
          ].join(" ")}
          backgroundColor={this.props.backgroundColor}
          textColor={this.props.textColor}
        />
        <MinimalBar
          className={[
            styles.navbar,
            styles.navbarMobile,
            this.props.className,
          ].join(" ")}
          backgroundColor={this.props.backgroundColor}
          textColor={this.props.textColor}
          show={!this.state.toggled}
          onClick={this.handleMenuClick}
        />
        <NavMobileMenu
          className={styles.navbarMobileMenu + " " + this.props.className}
          backgroundColor={this.props.backgroundColor}
          textColor={this.props.textColor}
          show={this.state.toggled}
          onClick={this.handleCloseButtonClick}
        />
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
