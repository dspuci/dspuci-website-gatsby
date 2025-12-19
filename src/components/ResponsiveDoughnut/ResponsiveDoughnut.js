
import React from "react"
import { Box } from "rebass"
import { Doughnut } from "react-chartjs-2"
import Chart from "chart.js"

// Set global legend label color to white for all charts
if (Chart && Chart.defaults && Chart.defaults.global && Chart.defaults.global.legend && Chart.defaults.global.legend.labels) {
  Chart.defaults.global.legend.labels.fontColor = "#fff";
}

export default (props) => (
  <Box
    width={[1, 1 / 2, 1 / 2, 1 / 3]}
    sx={{ textAlign: "center", padding: [20, 20, 20] }}
  >
    <Doughnut
      height={200 + (props.legendLines - 1) * 15}
      width={220}
      legend={{ position: "bottom" }}
      options={{
        legend: {
          position: "bottom",
          labels: {
            fontColor: "#fff"
          }
        },
        title: {
          display: true,
          text: props.text,
          fontSize: 24,
          fontColor: "#fff"
        }
      }}
      data={props.data}
    />
  </Box>
)
