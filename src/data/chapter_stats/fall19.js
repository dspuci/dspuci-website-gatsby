const genderData = {
  labels: ["Male", "Female"],
  datasets: [
    {
      data: [29, 22],
      backgroundColor: ["#349beb", "#cf60d1"],
    },
  ],
}

const yearData = {
  labels: ["2nd", "3rd", "4th"],
  datasets: [
    {
      data: [12, 18, 22],
      backgroundColor: ["#8223c2", "#c2a223", "#63c223"],
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
      data: [25, 13, 8, 2],
      backgroundColor: ["#d6406d", "#6dd640", "#409ad6", "#d67440"],
    },
  ],
}

export { genderData, yearData, majorData }
