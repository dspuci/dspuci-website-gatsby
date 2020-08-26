import React from "react"
import { StaticQuery, graphql } from "gatsby"
import CenterHeader from "../CenterHeader"
import SubHeader from "../SubHeader"
import styles from "./CareersTables.module.css"

const CareersTable = props => (
  <div>
    <CenterHeader>{props.title}</CenterHeader>
    <SubHeader>{props.subTitle !== "All" ? props.subTitle : null}</SubHeader>
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
    this.setState({ 
      currentYear: year, 
      currentIndustry: "All" 
    })
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
            fullTimeOffersOperations2020: allCareersXlsxFullTimeOffers2020(filter: {Industry: {eq: "Operations"}}) {
              nodes {
                Name
                Position
                Company
                Location
              }
            }
            fullTimeOffersFinanceAndAccounting2020: allCareersXlsxFullTimeOffers2020(filter: {Industry: {eq: "Finance & Accounting"}}) {
              nodes {
                Name
                Position
                Company
                Location
              }
            }
            fullTimeOffersMarketingAndSales2020: allCareersXlsxFullTimeOffers2020(filter: {Industry: {eq: "Marketing & Sales"}}) {
              nodes {
                Name
                Position
                Company
                Location
              }
            }
            fullTimeOffersTechnologyAndPM2020: allCareersXlsxFullTimeOffers2020(filter: {Industry: {eq: "Technology & PM"}}) {
              nodes {
                Name
                Position
                Company
                Location
              }
            }
            fullTimeOffersHumanResourcesAndAdministration2020: allCareersXlsxFullTimeOffers2020(filter: {Industry: {eq: "Human Resources & Administration"}}) {
              nodes {
                Name
                Position
                Company
                Location
              }
            }
            fullTimeOffersConsulting2020: allCareersXlsxFullTimeOffers2020(filter: {Industry: {eq: "Consulting"}}) {
              nodes {
                Name
                Position
                Company
                Location
              }
            }
            fullTimeOffersOthers2020: allCareersXlsxFullTimeOffers2020(filter: {Industry: {eq: "Others"}}) {
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
            fullTimeOffersOperations2019: allCareersXlsxFullTimeOffers2019(filter: {Industry: {eq: "Operations"}}) {
              nodes {
                Name
                Position
                Company
                Location
              }
            }
            fullTimeOffersFinanceAndAccounting2019: allCareersXlsxFullTimeOffers2019(filter: {Industry: {eq: "Finance & Accounting"}}) {
              nodes {
                Name
                Position
                Company
                Location
              }
            }
            fullTimeOffersMarketingAndSales2019: allCareersXlsxFullTimeOffers2019(filter: {Industry: {eq: "Marketing & Sales"}}) {
              nodes {
                Name
                Position
                Company
                Location
              }
            }
            fullTimeOffersTechnologyAndPM2019: allCareersXlsxFullTimeOffers2019(filter: {Industry: {eq: "Technology & PM"}}) {
              nodes {
                Name
                Position
                Company
                Location
              }
            }
            fullTimeOffersHumanResourcesAndAdministration2019: allCareersXlsxFullTimeOffers2019(filter: {Industry: {eq: "Human Resources & Administration"}}) {
              nodes {
                Name
                Position
                Company
                Location
              }
            }
            fullTimeOffersConsulting2019: allCareersXlsxFullTimeOffers2019(filter: {Industry: {eq: "Consulting"}}) {
              nodes {
                Name
                Position
                Company
                Location
              }
            }
            fullTimeOffersOthers2019: allCareersXlsxFullTimeOffers2019(filter: {Industry: {eq: "Others"}}) {
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
            internshipsOperations2019: allCareersXlsxInternships2019(filter: {Industry: {eq: "Operations"}}) {
              nodes {
                Name
                Position
                Company
                Location
              }
            }
            internshipsFinanceAndAccounting2019: allCareersXlsxInternships2019(filter: {Industry: {eq: "Finance & Accounting"}}) {
              nodes {
                Name
                Position
                Company
                Location
              }
            }
            internshipsMarketingAndSales2019: allCareersXlsxInternships2019(filter: {Industry: {eq: "Marketing & Sales"}}) {
              nodes {
                Name
                Position
                Company
                Location
              }
            }
            internshipsTechnologyAndPM2019: allCareersXlsxInternships2019(filter: {Industry: {eq: "Technology & PM"}}) {
              nodes {
                Name
                Position
                Company
                Location
              }
            }
            internshipsHumanResourcesAndAdministration2019: allCareersXlsxInternships2019(filter: {Industry: {eq: "Human Resources & Administration"}}) {
              nodes {
                Name
                Position
                Company
                Location
              }
            }
            internshipsConsulting2019: allCareersXlsxInternships2019(filter: {Industry: {eq: "Consulting"}}) {
              nodes {
                Name
                Position
                Company
                Location
              }
            }
            internshipsOthers2019: allCareersXlsxInternships2019(filter: {Industry: {eq: "Others"}}) {
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
            internshipsFinanceAndAccounting2020: allCareersXlsxInternships2020(filter: {Industry: {eq: "Finance & Accounting"}}) {
              nodes {
                Name
                Position
                Company
                Location
              }
            }
            internshipsMarketingAndSales2020: allCareersXlsxInternships2020(filter: {Industry: {eq: "Marketing & Sales"}}) {
              nodes {
                Name
                Position
                Company
                Location
              }
            }
            internshipsTechnologyAndPM2020: allCareersXlsxInternships2020(filter: {Industry: {eq: "Technology & PM"}}) {
              nodes {
                Name
                Position
                Company
                Location
              }
            }
            internshipsHumanResourcesAndAdministration2020: allCareersXlsxInternships2020(filter: {Industry: {eq: "Human Resources & Administration"}}) {
              nodes {
                Name
                Position
                Company
                Location
              }
            }
            internshipsConsulting2020: allCareersXlsxInternships2020(filter: {Industry: {eq: "Consulting"}}) {
              nodes {
                Name
                Position
                Company
                Location
              }
            }
            internshipsOthers2020: allCareersXlsxInternships2020(filter: {Industry: {eq: "Others"}}) {
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
                  "Operations": data.internshipsOperations2019,
                  "Finance & Accounting": data.internshipsFinanceAndAccounting2019,
                  "Marketing & Sales": data.internshipsMarketingAndSales2019,
                  "Tech & PM": data.internshipsTechnologyAndPM2019,
                  "HR & Administration": data.internshipsHumanResourcesAndAdministration2019,
                  "Consulting": data.internshipsConsulting2019,
                  "Others": data.internshipsOthers2019
                }
              },
              {
                name: "Full Time Offers",
                data: {
                  "All": data.fullTimeOffers2019,
                  "Operations": data.fullTimeOffersOperations2019,
                  "Finance & Accounting": data.fullTimeOffersFinanceAndAccounting2019,
                  "Marketing & Sales": data.fullTimeOffersMarketingAndSales2019,
                  "Tech & PM": data.fullTimeOffersTechnologyAndPM2019,
                  "HR & Administration": data.fullTimeOffersHumanResourcesAndAdministration2019,
                  "Consulting": data.fullTimeOffersConsulting2019,
                  "Others": data.fullTimeOffersOthers2019
                }
              },
            ],
            "2020": [
              {
                name: "Internships",
                data: {
                  "All": data.internships2020,
                  "Operations": data.internshipsOperations2020,
                  "Finance & Accounting": data.internshipsFinanceAndAccounting2020,
                  "Marketing & Sales": data.internshipsMarketingAndSales2020,
                  "Tech & PM": data.internshipsTechnologyAndPM2020,
                  "HR & Administration": data.internshipsHumanResourcesAndAdministration2020,
                  "Consulting": data.internshipsConsulting2020,
                  "Others": data.internshipsOthers2019
                }
              },
              {
                name: "Full Time Offers",
                data: {
                  "All": data.fullTimeOffers2020,
                  "Operations": data.fullTimeOffersOperations2020,
                  "Finance & Accounting": data.fullTimeOffersFinanceAndAccounting2020,
                  "Marketing & Sales": data.fullTimeOffersMarketingAndSales2020,
                  "Tech & PM": data.fullTimeOffersTechnologyAndPM2020,
                  "HR & Administration": data.fullTimeOffersHumanResourcesAndAdministration2020,
                  "Consulting": data.fullTimeOffersConsulting2020,
                  "Others": data.fullTimeOffersOthers2020
                }
              },
            ],
          }

          return (
            <div>
              <div style={{display: 'flex', width: '100%', justifyContent: 'center'}}>
                {Object.keys(careersData)
                  .reverse()
                  .map(key => (
                    <YearButton
                      value={key}
                      currentYear={this.state.currentYear}
                      onClick={this.handleYearButtonClick}
                    />
                  ))}
              </div>
              <div style={{width: '100%', height: '2vh'}}></div>
              <div style={{display: 'flex', width: '100%', justifyContent: 'center', flexWrap: 'wrap'}}>
                {Object.keys(careersData[this.state.currentYear][0].data)
                .reverse()
                .map(key => (
                  <IndustryButton
                    value={key}
                    currentIndustry={this.state.currentIndustry}
                    onClick={this.handleIndustryButtonClick}
                  />
                ))}
              </div>
              {careersData[this.state.currentYear].map(table => (
                <CareersTable
                  title={`${this.state.currentYear} ${table.name}`}
                  subTitle={`${this.state.currentIndustry}`}
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
