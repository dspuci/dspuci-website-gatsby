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
    this.props.onClick(this.props.value)
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

class IndustryButton extends React.Component {
  handleClick = () => {
    this.props.onClick(this.props.value)
  }

  render() {
    return (
      <button
        onClick={this.handleClick}
        className={[
          styles.button,
          this.props.currentIndustry === this.props.value
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
  constructor(props) {
    super(props)
    this.state = {
      currentYear: props.defaultYear,
      currentIndustry: "All"
    }
    this.handleYearButtonClick = this.handleYearButtonClick.bind(this);
    this.handleIndustryButtonClick = this.handleIndustryButtonClick.bind(this);
  }

  handleYearButtonClick = year => {
    this.setState({ currentYear: year })
  }

  handleIndustryButtonClick = industry => {
    this.setState({ currentIndustry: industry});
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
            internships2020: allCareersXlsxInternships2020 {
              nodes {
                Name
                Position
                Company
                Location
              }
            }
            internshipsOperations2020: allCareersXlsxInternships2020(filter: {Industry: {eq: "Operations"}}) {
              nodes {
                Name
                Position
                Company
                Location
              }
            }
            internshipsOperations2019: allCareersXlsxInternships2019(filter: {Industry: {eq: "Operations"}}) {
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
                data: {
                  "All": data.internships2019,
                  "Operations": data.internshipsOperations2019
                }
              },
              {
                name: "Full Time Offers",
                data: {
                  "All": data.internships2019,
                  "Operations": data.internshipsOperations2019
                }
              },
            ],
            "2020": [
              {
                name: "Internships",
                data: {
                  "All": data.internships2020,
                  "Operations": data.internshipsOperations2020
                }
              },
              {
                name: "Full Time Offers",
                data: {
                  "All": data.fullTimeOffers2020,
                  "Operations": data.internshipsOperations2020
                }
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
                    onClick={this.handleYearButtonClick}
                  />
                ))}
              <div></div>
              {Object.keys(careersData[this.state.currentYear][0].data)
              .reverse()
              .map(key => (
                <IndustryButton
                  value={key}
                  currentIndustry={this.state.currentIndustry}
                  onClick={this.handleIndustryButtonClick}
                />
              ))}
              {careersData[this.state.currentYear].map(table => (
                <CareersTable
                  title={`${this.state.currentYear} ${table.name} ${this.state.currentIndustry}`}
                  data={table.data[this.state.currentIndustry]}
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
