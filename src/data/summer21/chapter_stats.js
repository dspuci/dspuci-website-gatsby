const genderData = {
  labels: ["Male", "Female"],
  datasets: [
    {
      data: [26, 20],
      backgroundColor: ["rgb(158, 207, 230)", "rgb(151, 129, 213)"],
    },
  ],
}

const yearData = {
  labels: ["Freshman", "Sophomore", "Junior", "Senior"],
  datasets: [
    {
      data: [7, 10, 16, 13],
      backgroundColor: [
        "rgb(241,169,78)",
        "rgb(112, 226, 113)",
        "rgb(51, 124, 218)",
        "rgb(79, 39, 153)",
      ],
    },
  ],
}

const majorData = {
  legend: {
    display: false,
  },
  labels: [
    "Bus. Admin",
    "Bus. Econ",
    "Computer Science",
    "Quant. Econ",
    "Economics",
    "BIM",
    "CSE",
  ],
  datasets: [
    {
      data: [25, 10, 6, 1, 1, 2, 1],
      backgroundColor: [
        "rgb(68,179,194)",
        "rgb(241,169,78)",
        "rgb(228,86,65)",
        "rgb(93,76,70)",
        "rgb(51,153,51)",
        "rgb(123,141,142)",
        "rgb(242,237,216)",
      ],
    },
  ],
}

export { genderData, yearData, majorData }
