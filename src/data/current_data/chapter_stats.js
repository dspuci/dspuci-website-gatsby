const genderData = {
  labels: ["Male", "Female"],
  datasets: [
    {
      data: [30, 29],
      backgroundColor: ["rgb(158, 207, 230)", "rgb(151, 129, 213)"],
    },
  ],
}

const yearData = {
  labels: ["Freshman", "Sophomore", "Junior", "Senior"],
  datasets: [
    {
      data: [6, 13, 21, 12],
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
    "Business Administration",
    "Business Economics",
    "Economics",
    "Computer Science",
    "Informatics",
    "Business Information Management",
    "Mechanical Engineering",
    "Computer Engineering",
    "Mechanical Engineering",
    "Psychological Science"
  ],
  datasets: [
    {
      data: [26, 8, 3, 6, 3, 9, 1, 1, 1, 1],
      backgroundColor: [
        "rgb(199, 206, 234)",
        "rgb(181, 234, 215)",
        "rgb(226, 240, 203)",
        "rgb(255, 218, 193)",
        "rgb(255, 183, 178)",
        "rgb(255, 154, 162)",
        "rgb(210, 145, 188)",
        "rgb(149, 125, 173)",
        "rgb(255, 223, 186)",
        "rgb(174, 198, 207)"
      ]
    },
  ],
}

export { genderData, yearData, majorData }