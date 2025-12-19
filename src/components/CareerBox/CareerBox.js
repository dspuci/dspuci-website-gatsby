import React from "react"
import { Box } from "rebass"
import HoverShadowBox from "../HoverShadowBox"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

class CareerBox extends React.Component {
  render() {
    return (
      <Box width={[1, 1 / 2, 1 / 2, 1 / 3]}>
        <HoverShadowBox raise>
          <FontAwesomeIcon
            icon={this.props.icon}
            style={{
              fontSize: 36,
              color: "#9284cf",
            }}
          />
          <h2
            style={{
              marginTop: 20,
              fontWeight: 600,
              letterSpacing: "-0.01em",
            }}
          >
            {this.props.title}
          </h2>
          <div
            style={{
              color: "#999",
              fontWeight: 400,
              fontSize: 16,
              lineHeight: 1.8,
            }}
          >
            {this.props.children}
          </div>
        </HoverShadowBox>
      </Box>
    )
  }
}

export default CareerBox
