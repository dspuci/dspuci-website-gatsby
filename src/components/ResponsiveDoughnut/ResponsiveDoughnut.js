
import React from "react"
import { Box } from "rebass"
import { Doughnut } from "react-chartjs-2"

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
            fontColor: "#000000"
          }
        },
        title: {
          display: true,
          text: props.text,
          fontSize: 24,
          fontColor: "#000000",
          fontFamily: "Georgia, serif"
        },
        // Chart.js v2 global tooltip callback uses yLabel/value from Cartesian scales; doughnut arcs
        // do not populate those the same way, so tooltips can show wrong or empty numbers unless we
        // read values from the chart data (same as Chart.js doughnut defaults).
        tooltips: {
          callbacks: {
            title: () => "",
            label: (tooltipItem, data) => {
              const dataLabel = data.labels[tooltipItem.index]
              const raw =
                data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index]
              if (Array.isArray(dataLabel)) {
                const copy = dataLabel.slice()
                copy[0] = `${copy[0]}: ${raw}`
                return copy
              }
              return `${dataLabel != null ? dataLabel : ""}: ${raw}`
            },
          },
        },
      }}
      data={props.data}
    />
  </Box>
)
