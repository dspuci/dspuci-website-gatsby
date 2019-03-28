import React from "react"
import { NavbarSolid, NavbarTransparentWhite } from "./navbar"
import styles from "./layout.module.css"
import Home from "./home"

class Layout extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      navbar: this.props.home ? <NavbarTransparentWhite /> : <NavbarSolid />,
    }

    this.handleScroll = this.handleScroll.bind(this)
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll)
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll)
  }

  handleScroll() {
    if (window.scrollY > 60) {
      this.setState({
        navbar: <NavbarSolid />,
      })
    } else {
      this.setState({
        navbar: this.props.home ? <NavbarTransparentWhite /> : <NavbarSolid />,
      })
    }
  }

  render() {
    return (
      <div className={styles.layout}>
        {this.state.navbar}
        {this.props.home ? <Home /> : null}
        <div
          className={styles.container}
          style={this.props.home ? null : { paddingTop: 110 }}
        >
          {this.props.children}
        </div>
      </div>
    )
  }
}

export default Layout
