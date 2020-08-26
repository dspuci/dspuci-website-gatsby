import React from "react"
import { StaticQuery, graphql } from "gatsby"
import CenterHeader from "../CenterHeader"
import SubHeader from "../SubHeader"
import styles from "./CareersTables.module.css"

const CareersTable = props => {
  return(
    <div>
      <CenterHeader>{props.title}</CenterHeader>
      <SubHeader>{props.subTitle !== "All" ? (props.subTitle === "HR & Administration" ? "Human Resources & Administration" : props.subTitle) : null}</SubHeader>
      <div style={{ overflowX: "auto" }}>
        <table style={{ fontSize: 16 }}>
          <tbody>
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
          </tbody>
        </table>
      </div>
    </div>
  ) 
}

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
    const careersData = {
      "2019": [
        {
          name: "Internships",
          data: {
            "Finance & Accounting": this.props.data.internshipsFinanceAndAccounting2019,
            "Marketing & Sales": this.props.data.internshipsMarketingAndSales2019,
            "Technology & PM": this.props.data.internshipsTechnologyAndPM2019,
            "HR & Administration": this.props.data.internshipsHumanResourcesAndAdministration2019,
            "Operations": this.props.data.internshipsOperations2019,
            "Consulting": this.props.data.internshipsConsulting2019,
            "All": this.props.data.internships2019,
          }
        },
        {
          name: "Full Time Offers",
          data: {
            "Finance & Accounting": this.props.data.fullTimeOffersFinanceAndAccounting2019,
            "Marketing & Sales": this.props.data.fullTimeOffersMarketingAndSales2019,
            "Technology & PM": this.props.data.fullTimeOffersTechnologyAndPM2019,
            "HR & Administration": this.props.data.fullTimeOffersHumanResourcesAndAdministration2019,
            "Operations": this.props.data.fullTimeOffersOperations2019,
            "Consulting": this.props.data.fullTimeOffersConsulting2019,
            "All": this.props.data.fullTimeOffers2019,

          }
        },
      ],
      "2020": [
        {
          name: "Internships",
          data: {
            "Finance & Accounting": this.props.data.internshipsFinanceAndAccounting2020,
            "Marketing & Sales": this.props.data.internshipsMarketingAndSales2020,
            "Technology & PM": this.props.data.internshipsTechnologyAndPM2020,
            "HR & Administration": this.props.data.internshipsHumanResourcesAndAdministration2020,
            "Operations": this.props.data.internshipsOperations2020,
            "Consulting": this.props.data.internshipsConsulting2020,
            "All": this.props.data.internships2020,

          }
        },
        {
          name: "Full Time Offers",
          data: {
            "Finance & Accounting": this.props.data.fullTimeOffersFinanceAndAccounting2020,
            "Marketing & Sales": this.props.data.fullTimeOffersMarketingAndSales2020,
            "Technology & PM": this.props.data.fullTimeOffersTechnologyAndPM2020,
            "HR & Administration": this.props.data.fullTimeOffersHumanResourcesAndAdministration2020,
            "Operations": this.props.data.fullTimeOffersOperations2020,
            "Consulting": this.props.data.fullTimeOffersConsulting2020,
            "All": this.props.data.fullTimeOffers2020,
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
          .map(key => (
            <IndustryButton
              value={key}
              currentIndustry={this.state.currentIndustry}
              onClick={this.handleIndustryButtonClick}
            />
          ))}
        </div>
        {careersData[this.state.currentYear].map(table => (
          Object.keys(table.data[this.state.currentIndustry].nodes).length !== 0 ?
          <CareersTable
            title={`${this.state.currentYear} ${table.name}`}
            subTitle={`${this.state.currentIndustry}`}
            data={table.data[this.state.currentIndustry]}
          /> : null
        ))}
      </div>
    )
  }
}

export default CareersTables