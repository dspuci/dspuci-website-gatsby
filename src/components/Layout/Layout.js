import React from "react"
import { NavbarSolid, NavbarTransparentWhite } from "../Navbar"
import Home from "../Home"
import { Container, MainContainer } from "../Container"

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
    let container
    if (this.props.home) {
      container = <Container>{this.props.children}</Container>
    } else {
      container = <MainContainer>{this.props.children}</MainContainer>
    }
    return (
      <div>
        {this.state.navbar}
        {this.props.home ? <Home /> : null}
        {container}
      </div>
    )
  }
}

export default Layout
