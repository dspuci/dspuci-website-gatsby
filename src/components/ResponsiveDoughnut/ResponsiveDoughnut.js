import React from "react"
import { Box } from "rebass"
import { Doughnut } from "react-chartjs-2"

export default props => (
  <Box
    width={[1, 1 / 2, 1 / 3]}
    sx={{ textAlign: "center", padding: [20, 0, 0] }}
  >
    <Doughnut
      height={200 + (props.legendLines - 1) * 15}
      width={220}
      legend={{ position: "bottom" }}
      options={{
        title: {
          display: true,
          text: props.text,
          fontSize: 24,
        },
      }}
      data={props.data}
    />
  </Box>
)
