import React from "react"
import Navbar from "../Navbar"
import Container from "../Container"
import { lightColor, darkColor } from "../../styles/defaultColors"
import { Flex, Box, Image } from "rebass"
import styles from "./Layout.module.css"

import uciLogo from "../../images/uci-logo.png"
import phoneIcon from "../../images/phone.png"
import emailIcon from "../../images/email.png"
import facebookIcon from "../../images/facebook.png"
import instagramIcon from "../../images/instagram.png"

class Layout extends React.Component {
  constructor(props) {
    super(props)

    let navbarType
    if (props.navbarTransparent) {
      if (props.navbarTextColor === "white") {
        navbarType = "transparent-white"
      } else if (props.navbarTextColor === "black") {
        navbarType = "transparent-black"
      } else {
        navbarType = "transparent-white"
      }
    } else {
      navbarType = "solid"
    }

    this.state = {
      initialNavbarType: navbarType,
      navbarType: navbarType,
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
    if (window.scrollY > 40 && this.props.navbarTransparent) {
      this.setState({
        navbarType: "opaque",
      })
    } else {
      this.setState({
        navbarType: this.state.initialNavbarType,
      })
    }
  }

  render() {
    return (
      <div className={styles.layout}>
        <Navbar type={this.state.navbarType} />
        {this.props.children}
        <Footer />
      </div>
    )
  }
}

class CoverLayout extends React.Component {
  render() {
    return (
      <Layout navbarTransparent navbarTextColor={this.props.navbarTextColor}>
        {this.props.coverElement}
        <Container>{this.props.children}</Container>
      </Layout>
    )
  }
}

class StandardLayout extends React.Component {
  render() {
    return (
      <Layout>
        <Container>{this.props.children}</Container>
      </Layout>
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
          <Image src={phoneIcon} width={20} />
          <div>808-359-1585</div>
        </Box>
        <Box mb={30} width={[1 / 2, 1 / 4, 1 / 5, 1 / 6]}>
          <Image src={emailIcon} width={30} />
          <div>svp@dspuci.com</div>
        </Box>
        <Box mb={30} width={[1 / 2, 1 / 4, 1 / 5, 1 / 6]}>
          <Image src={uciLogo} width={30} />
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
            <Image src={facebookIcon} width={24} />
          </a>
        </Box>
        <Box mb={30} width={[1 / 6, 1 / 12]}>
          <a href="https://www.instagram.com/dspuci/">
            <Image src={instagramIcon} width={24} />
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

export { CoverLayout, StandardLayout }
