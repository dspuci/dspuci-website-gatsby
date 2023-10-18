import React from "react"
import styles from "./Navbar.module.css"
import { Link, navigate } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons"

const ListLink = (props) => (
  <li>
    <Link to={props.to} style={props.style}>
      {props.children}
    </Link>
  </li>
)

const Links = () => (
  <ul>
    <ListLink to="/">Home</ListLink>
    <ListLink to="/about">About Us</ListLink>
    {/* <ListLink to="/proweek">Professionalism Event</ListLink> */}
    <ListLink to="/recruitment">How to Join</ListLink >
    {/*<ListLink to="/recruitment_spring23">F'23 Recruitment</ListLink>*/}
    <ListLink to="/brothers">Brothers</ListLink>
    <ListLink to="/careers">Careers</ListLink>
    {/* <ListLink to="/gallery">Gallery</ListLink> */}
  </ul>
)

const NavTopMargin = () => <div style={{ height: 80 }} />

class MinimalBar extends React.Component {
  handleBrandButtonClick() {
    navigate("/")
  }

  render() {
    return (
      <div className={this.props.className}>
        <button
          className={styles.brandButton}
          onClick={this.handleBrandButtonClick}
        >
          ΔΣΠ
        </button>
        <button className={styles.menuButton} onClick={this.props.onClick}>
          <FontAwesomeIcon icon={faBars} />
        </button>
      </div>
    )
  }
}

class FullBar extends React.Component {
  render() {
    return (
      <div className={this.props.className}>
        <Links />
      </div>
    )
  }
}

class NavMobileMenu extends React.Component {
  constructor(props) {
    super(props)
    this.className = this.props.className
  }
  render() {
    if (!this.props.show) {
      this.className = styles.hidden + " " + this.props.className
    } else {
      this.className = this.props.className
    }
    return (
      <div className={this.className}>
        <button className={styles.closeButton} onClick={this.props.onClick}>
          <FontAwesomeIcon icon={faTimes} />
        </button>
        <Links />
      </div>
    )
  }
}

class Navbar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      toggled: false,
      type: this.props.type,
    }

    this.handleMenuClick = this.handleMenuClick.bind(this)
    this.handleCloseButtonClick = this.handleCloseButtonClick.bind(this)
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.type !== this.state.type) {
      this.setState({ type: nextProps.type })
    }
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
    const typeStyles = {
      solid: styles.navbarSolid,
      opaque: styles.navbarSolid,
      "transparent-white": styles.navbarTransparentWhite,
      "transparent-black": styles.navbarTransparentBlack,
    }
    const typeStylesBackground = {
      solid: styles.navbarBackgroundSolid,
      opaque: styles.navbarBackgroundSolid,
      "transparent-white": styles.navbarBackgroundTransparent,
      "transparent-black": styles.navbarBackgroundTransparent,
    }

    return (
      <div>
        <div className={typeStylesBackground[this.state.type]}></div>
        <FullBar
          className={[
            styles.navbar,
            styles.navbarDesktop,
            typeStyles[this.state.type],
            this.props.className,
          ].join(" ")}
        />
        <MinimalBar
          className={[
            styles.navbar,
            styles.navbarMobile,
            typeStyles[this.state.type],
            this.props.className,
          ].join(" ")}
          onClick={this.handleMenuClick}
        />
        <NavMobileMenu
          className={[styles.navbarMobileMenu, this.props.className].join(" ")}
          show={this.state.toggled}
          onClick={this.handleCloseButtonClick}
        />
        {this.props.type === "solid" ? <NavTopMargin /> : null}
      </div>
    )
  }
}

export default Navbar
