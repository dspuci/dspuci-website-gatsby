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
import VideoCover from "../VideoCover"

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
    const layoutClassName = [
      styles.layout,
      this.props.layoutClassName,
    ].filter(Boolean).join(" ")

    return (
      <div className={layoutClassName}>
        <Navbar
          type={this.state.navbarType}
          className={this.props.navbarClassName}
        />
        {this.props.children}
        <Footer />
      </div>
    )
  }
}

class CoverLayout extends React.Component {
  render() {
    const navbarTransparent =
      this.props.navbarTransparent !== undefined
        ? this.props.navbarTransparent
        : true

    return (
      <Layout
        navbarTransparent={navbarTransparent}
        navbarTextColor={this.props.navbarTextColor}
        navbarClassName={this.props.navbarClassName}
        layoutClassName={this.props.layoutClassName}
      >
        {this.props.coverElement}
        <Container>{this.props.children}</Container>
      </Layout>
    )
  }
}

class VideoCoverLayout extends React.Component {
  render() {
    return (
      <Layout navbarTransparent navbarTextColor={this.props.navbarTextColor}>
        <VideoCover
          textColor="white"
          backupImage={this.props.image}
          coverVideo={this.props.video}
          coverImage={this.props.coverImage}
          textOne={this.props.textOne}
          textTwo={this.props.textTwo}
        ></VideoCover>
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

const Footer = (props) => (
  <footer style={{ backgroundColor: "#f5f0e6" }}>
    <hr style={{
      border: 0,
      height: '2px',
      background: '#666',
      margin: '0 auto 40px',
      width: '90%'
    }} />
    <Container>
      <Flex
        color="#1a1a1a"
        fontSize={16}
        flexWrap="wrap"
        justifyContent="center"
        style={{ textAlign: "center", paddingTop: 40 }}
      >
        <Box mb={30} width={[1 / 2, 1 / 4, 1 / 5, 1 / 6]}>
          <Image
            src={phoneIcon}
            width={20}
            sx={{ filter: "brightness(0) saturate(100%)" }}
          />
          <div>SVP: (925) 478-9787</div>
        </Box>
        <Box mb={30} width={[1 / 2, 1 / 4, 1 / 5, 1 / 6]}>
          <Image
            src={emailIcon}
            width={30}
            sx={{ filter: "brightness(0) saturate(100%)" }}
          />
          <div>svp@dspuci.com</div>
        </Box>
        <Box mb={30} width={[1 / 2, 1 / 4, 1 / 5, 1 / 6]}>
          <Image
            src={uciLogo}
            width={30}
            sx={{ filter: "brightness(0) saturate(100%)" }}
          />
          <div>Irvine, CA</div>
        </Box>
      </Flex>
      <Flex
        color="#1a1a1a"
        fontSize={16}
        flexWrap="wrap"
        justifyContent="center"
        style={{ textAlign: "center" }}
      >
        <Box mb={30} width={[1 / 6, 1 / 12]}>
          <a href="https://www.facebook.com/DSPUCI/">
            <Image
              src={facebookIcon}
              width={24}
              sx={{ filter: "brightness(0) saturate(100%)" }}
            />
          </a>
        </Box>
        <Box mb={30} width={[1 / 6, 1 / 12]}>
          <a href="https://www.instagram.com/dspuci/">
            <Image
              src={instagramIcon}
              width={24}
              sx={{ filter: "brightness(0) saturate(100%)" }}
            />
          </a>
        </Box>
      </Flex>
      <Flex
        color="#1a1a1a"
        fontSize={16}
        flexWrap="wrap"
        justifyContent="center"
        style={{ textAlign: "center" }}
      >
        <Box width={1}>
          ©{new Date().getFullYear()} Delta Sigma Pi - Pi Sigma Chapter
        </Box>
        <Box width={1}>
          Developed by{" "}
          <a style={{ color: "#1a1a1a" }} href="https://linkedin.com/in/frafezy">
            Farbod Rafezy
          </a>
        </Box>
      </Flex>
    </Container>
  </footer>
)

export { CoverLayout, VideoCoverLayout, StandardLayout }
