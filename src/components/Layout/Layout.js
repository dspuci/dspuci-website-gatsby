import React from "react"
import { NavbarSolid, NavbarTransparent, NavbarOpaque } from "../Navbar"
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

    let navbar
    if (props.navbarTransparent) {
      navbar = <NavbarTransparent textColor={props.navbarTextColor} />
    } else {
      navbar = <NavbarSolid />
    }

    this.state = {
      initialNavbar: navbar,
      navbar: navbar,
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
        navbar: <NavbarOpaque />,
      })
    } else {
      this.setState({
        navbar: this.state.initialNavbar,
      })
    }
  }

  render() {
    return (
      <div className={styles.layout}>
        {this.state.navbar}
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

export { CoverLayout, StandardLayout }
