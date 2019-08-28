const genderData = {
  labels: ["Male", "Female"],
  datasets: [
    {
      data: [26, 25],
      backgroundColor: ["rgb(158, 207, 230)", "rgb(151, 129, 213)"],
    },
  ],
}

const yearData = {
  labels: ["1st", "2nd", "3rd", "4th"],
  datasets: [
    {
      data: [14, 12, 18, 22],
      backgroundColor: [
        "rgb(34,139,34)",
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
  labels: ["Bus. Admin", "Bus. Econ", "Computer Science", "BIM"],
  datasets: [
    {
      data: [22, 16, 6, 2],
      backgroundColor: [
        "rgb(36, 49, 72)",
        "rgb(218, 64, 69)",
        "rgb(227, 103, 49)",
        "rgb(251, 205, 73)",
      ],
    },
  ],
}

export { genderData, yearData, majorData }
