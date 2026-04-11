import React from "react"
import { Box } from "rebass"
import styles from "./ImageBox.module.css"

class ImageBox extends React.Component {
  render() {
    const { equalHeight, ...rest } = this.props
    return (
      <Box
        className={styles.container}
        width={equalHeight ? "100%" : [1, 1 / 2, 1 / 2, 1 / 3]}
        sx={
          equalHeight
            ? {
                display: "flex",
                flexDirection: "column",
                height: "100%",
                minHeight: 0,
                width: "100%",
              }
            : undefined
        }
      >
        <div className={styles.imageWrap}>
          <img
            src={rest.image}
            style={{ borderRadius: "16px" }}
            className={styles.image}
            alt={rest.image.toString()}
          />
        </div>
        <h1 className={styles.title}>{rest.title}</h1>
        <div className={styles.cardBody}>
          <p className={styles.description}>{this.props.children}</p>
        </div>
        {rest.actions && (
          <div className={styles.cardActions}>{rest.actions}</div>
        )}
      </Box>
    )
  }
}

export default ImageBox
