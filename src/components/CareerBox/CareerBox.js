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
              fontSize: 32,
            }}
          />
          <h2
            style={{
              marginTop: 20,
              fontWeight: 500,
            }}
          >
            {this.props.title}
          </h2>
          <div
            style={{
              color: "#999",
              fontWeight: 100,
              fontSize: 16,
              lineHeight: 1.9,
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
