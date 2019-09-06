import React from "react"
import { StaticQuery, graphql } from "gatsby"
import CenterHeader from "../CenterHeader"

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
        {props.children}
      </table>
    </div>
  </div>
)

class CareersTables extends React.Component {
  constructor() {
    super()
    this.state = {
      year: 2019,
    }
  }

  render() {
    return (
      <StaticQuery
        query={graphql`
          {
            internships: allCareersXlsxInternships2019 {
              nodes {
                Name
                Position
                Company
                Location
              }
            }

            fullTimeOffers: allCareersXlsxFullTimeOffers2019 {
              nodes {
                Name
                Position
                Company
                Location
              }
            }
          }
        `}
        render={data => (
          <div>
            <CareersTable title={`${this.state.year} Internships`}>
              {data.internships.nodes.map(node => (
                <tr>
                  <td>{node.Name}</td>
                  <td>{node.Position}</td>
                  <td>{node.Company}</td>
                  <td>{node.Location}</td>
                </tr>
              ))}
            </CareersTable>
            <CareersTable title={`${this.state.year} Full Time Offers`}>
              {data.fullTimeOffers.nodes.map(node => (
                <tr>
                  <td>{node.Name}</td>
                  <td>{node.Position}</td>
                  <td>{node.Company}</td>
                  <td>{node.Location}</td>
                </tr>
              ))}
            </CareersTable>
          </div>
        )}
      />
    )
  }
}

export default CareersTables
