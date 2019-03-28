import React from "react"
import { NavbarSolid, NavbarTransparentWhite } from "../Navbar"
import Home from "../Home"
import { Container, MainContainer } from "../Container"
import { lightColor, darkColor } from "../../styles/defaultColors"
import { Flex, Box, Image } from "rebass"
import uciLogo from "../../images/uci-logo.png"
import phoneIcon from "../../images/phone.png"
import emailIcon from "../../images/email.png"

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
        <Footer />
      </div>
    )
  }
}

const Footer = props => (
  <footer style={{ backgroundColor: darkColor }}>
    <Container>
      <Flex
        color={lightColor}
        fontSize={16}
        flexWrap="wrap"
        justifyContent="center"
        style={{ textAlign: "center" }}
      >
        <Box mb={30} width={[1, 1 / 5]}>
          <Image src={phoneIcon} height={15} />
          <div>(310) 447-4011</div>
        </Box>
        <Box mb={30} width={[1, 1 / 5]}>
          <Image src={emailIcon} height={15} />
          <div>svp@dspuci.com</div>
        </Box>
        <Box mb={30} width={[1, 1 / 5]}>
          <Image src={uciLogo} height={15} />
          <div>Irvine, CA</div>
        </Box>
        <Box width={1}>©2019 Delta Sigma Pi - Pi Sigma Chapter</Box>
      </Flex>
    </Container>
  </footer>
)

export default Layout
