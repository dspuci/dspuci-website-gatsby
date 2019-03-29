import React from "react"
import { NavbarSolid, NavbarTransparentWhite } from "../Navbar"
import Home from "../Home"
import { Container, MainContainer } from "../Container"
import { lightColor, darkColor } from "../../styles/defaultColors"
import { Flex, Box, Image } from "rebass"

import uciLogo from "../../images/uci-logo.png"
import phoneIcon from "../../images/phone.png"
import emailIcon from "../../images/email.png"
import facebookIcon from "../../images/facebook.png"
import instagramIcon from "../../images/instagram.png"

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
        <Box mb={30} width={[1 / 2, 1 / 4, 1 / 5, 1 / 6]}>
          <Image src={phoneIcon} height={15} />
          <div>808-359-1585</div>
        </Box>
        <Box mb={30} width={[1 / 2, 1 / 4, 1 / 5, 1 / 6]}>
          <Image src={emailIcon} height={15} />
          <div>svp@dspuci.com</div>
        </Box>
        <Box mb={30} width={[1 / 2, 1 / 4, 1 / 5, 1 / 6]}>
          <Image src={uciLogo} height={15} />
          <div>Irvine, CA</div>
        </Box>
      </Flex>
      <Flex
        color={lightColor}
        fontSize={16}
        flexWrap="wrap"
        justifyContent="center"
        style={{ textAlign: "center" }}
      >
        <Box mb={30} width={[1 / 6, 1 / 12]}>
          <a href="https://www.facebook.com/DSPUCI/">
            <Image src={facebookIcon} height={24} />
          </a>
        </Box>
        <Box mb={30} width={[1 / 6, 1 / 12]}>
          <a href="https://www.instagram.com/dspuci/">
            <Image src={instagramIcon} height={24} />
          </a>
        </Box>
      </Flex>
      <Flex
        color={lightColor}
        fontSize={16}
        flexWrap="wrap"
        justifyContent="center"
        style={{ textAlign: "center" }}
      >
        <Box width={1}>
          ©{new Date().getFullYear()} Delta Sigma Pi - Pi Sigma Chapter
        </Box>
      </Flex>
    </Container>
  </footer>
)

export default Layout
