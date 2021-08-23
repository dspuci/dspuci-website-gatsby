import React from "react"
import { Image } from "rebass"
import { withPrefix } from "gatsby"
import styles from "./ImageModal.module.css"

class ImageModal extends React.Component {
  constructor(props) {
    super(props)
    this.escFunction = this.escFunction.bind(this)
  }

  componentDidMount() {
    document.addEventListener("keydown", this.escFunction, false)
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.escFunction, false)
  }

  escFunction(event) {
    if (event.keyCode === 27) {
      this.props.action()
    }
  }

  render() {
    return (
      <div className={styles.modalContainer} onClick={this.props.action}>
        <Image className={styles.image} src={withPrefix(this.props.source)} />
      </div>
    )
  }
}

export default ImageModal
