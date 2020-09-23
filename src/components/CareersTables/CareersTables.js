import React from "react"
import { StaticQuery, graphql } from "gatsby"
import CenterHeader from "../CenterHeader"
import SubHeader from "../SubHeader"
import styles from "./CareersTables.module.css"

const CareersTable = props => {
  return(
    <div>
      <CenterHeader>{props.title}</CenterHeader>
      {/* <SubHeader>{props.subTitle !== "All" ? (props.subTitle === "HR & Administration" ? "Human Resources & Administration" : props.subTitle) : null}</SubHeader> */}
      <div style={{ overflowX: "auto" }}>
        <table style={{ fontSize: 16 }}>
          <tbody>
            {props.data.nodes.map(node => (
              !["Finance & Accounting", "Marketing & Sales", "Human Resources & Administration", "Technology & PM", "Consulting", "Operations"].includes(node.Name) ? 
              <tr>
                <td>{node.Name}</td>
                <td>{node.Position}</td>
                <td>{node.Company}</td>
              </tr>
              :
              <>
              <tr>
                <td colSpan="2" style={{borderBottom: 'none'}}>
                  <h1 style={{fontSize: '1.5rem', margin: '1.25rem 0 0.75rem 0'}} colSpan="3">{node.Name}</h1>
                </td>
              </tr>
                <tr style={{fontSize: '1rem'}}>
                  <th>Name</th>
                  <th>Position</th>
                  <th>Company</th>
                </tr>
              </>
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
      "2014": [
        {
          name: "Full Time Offers",
          data: this.props.data.fullTimeOffers2014
        },
        {
          name: "Internships",
          data: this.props.data.internships2014
        },
      ],
      "2015": [
        {
          name: "Full Time Offers",
          data: this.props.data.fullTimeOffers2015
        },
        {
          name: "Internships",
          data: this.props.data.internships2015
        },
      ],
      "2016": [
        {
          name: "Full Time Offers",
          data: this.props.data.fullTimeOffers2016
        },
        {
          name: "Internships",
          data: this.props.data.internships2016
        },
      ],
      "2017": [
        {
          name: "Full Time Offers",
          data: this.props.data.fullTimeOffers2017
        },
        {
          name: "Internships",
          data: this.props.data.internships2017
        },
      ],
      "2018": [
        {
          name: "Full Time Offers",
          data: this.props.data.fullTimeOffers2018
        },
        {
          name: "Internships",
          data: this.props.data.internships2018
        },
      ],
      "2019": [
        {
          name: "Full Time Offers",
          data: this.props.data.fullTimeOffers2019
        },
        {
          name: "Internships",
          data: this.props.data.internships2019
        },
      ],
      "2020": [
        {
          name: "Full Time Offers",
          data: this.props.data.fullTimeOffers2020
        },
        {
          name: "Internships",
          data: this.props.data.internships2020
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
        {careersData[this.state.currentYear].map(table => (
          Object.keys(table.data.nodes).length !== 0 ?
          <CareersTable
            title={`${this.state.currentYear} ${table.name}`}
            data={table.data}
          /> : null
        ))}
      </div>
    )
  }
}

export default CareersTables