import React from "react"
import { StaticQuery, graphql } from "gatsby"
import CenterHeader from "../CenterHeader"
import styles from "./CareersTables.module.css"

const CareersTable = props => (
  <div>
    <CenterHeader>{props.title}</CenterHeader>
    <div style={{ overflowX: "auto" }}>
      <table style={{ fontSize: 16 }}>
        <col width="160" />
        <tr>
          <th>Name</th>
          <th>Position</th>
          <th>Company</th>
          <th>Location</th>
        </tr>
        {props.data.nodes.map(node => (
          <tr>
            <td>{node.Name}</td>
            <td>{node.Position}</td>
            <td>{node.Company}</td>
            <td>{node.Location}</td>
          </tr>
        ))}
      </table>
    </div>
  </div>
)

class YearButton extends React.Component {
  handleClick = () => {
    this.props.onYearButtonClick(this.props.value)
  }

  render() {
    return (
      <button
        onClick={this.handleClick}
        className={[
          styles.button,
          this.props.currentYear === this.props.value
            ? styles.activeButton
            : styles.inactiveButton,
        ].join(" ")}
      >
        {this.props.value}
      </button>
    )
  }
}

class CareersTables extends React.Component {
  constructor() {
    super()
    this.state = {
      currentYear: "2019",
    }
  }

  handleYearButtonClick = year => {
    this.setState({ currentYear: year })
  }

  render() {
    return (
      <StaticQuery
        query={graphql`
          {
            fullTimeOffers2020: allCareersXlsxFullTimeOffers2020 {
              nodes {
                Name
                Position
                Company
                Location
              }
            }
            internships2019: allCareersXlsxInternships2019 {
              nodes {
                Name
                Position
                Company
                Location
              }
            }
            fullTimeOffers2019: allCareersXlsxFullTimeOffers2019 {
              nodes {
                Name
                Position
                Company
                Location
              }
            }
          }
        `}
        render={data => {
          const careersData = {
            "2019": [
              {
                name: "Internships",
                data: data.internships2019,
              },
              {
                name: "Full Time Offers",
                data: data.fullTimeOffers2019,
              },
            ],
            "2020": [
              {
                name: "Full Time Offers",
                data: data.fullTimeOffers2020,
              },
            ],
          }

          return (
            <div>
              {Object.keys(careersData)
                .reverse()
                .map(key => (
                  <YearButton
                    value={key}
                    currentYear={this.state.currentYear}
                    onYearButtonClick={this.handleYearButtonClick}
                  />
                ))}
              {careersData[this.state.currentYear].map(table => (
                <CareersTable
                  title={`${this.state.currentYear} ${table.name}`}
                  data={table.data}
                />
              ))}
            </div>
          )
        }}
      />
    )
  }
}

export default CareersTables
