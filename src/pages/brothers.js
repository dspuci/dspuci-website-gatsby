import React from "react"
import { StandardLayout } from "../components/Layout"
import { Flex } from "rebass"
import { Brother, LeaderBrother } from "../components/Brother"
import { graphql } from "gatsby"
import { Fade } from "react-reveal"
import FamilyTree from "../components/FamilyTree/FamilyTree"

export default ({ data }) => {
  return (
    <StandardLayout>
      <Fade>
        <h1>Executive Committee</h1>
      </Fade>
      <Flex flexWrap="wrap">
        {data.allLeadershipSpring19XlsxSheet1.nodes.map(brotherInfo => (
          <LeaderBrother name={brotherInfo.Name} title={brotherInfo.Title} />
        ))}
      </Flex>
      <br />
      <Fade>
        <h1>Directors</h1>
      </Fade>
      <Flex flexWrap="wrap">
        {data.allDirectorsSpring19XlsxSheet1.nodes.map(brotherInfo => (
          <LeaderBrother name={brotherInfo.Name} title={brotherInfo.Title} />
        ))}
      </Flex>
      <br />
      <Fade>
        <h1>Our Brothers</h1>
      </Fade>
      <Flex flexWrap="wrap">
        {data.allBiosSpring19XlsxFormResponses1.nodes.map(brotherInfo => (
          <Brother brotherInfo={brotherInfo} />
        ))}
      </Flex>
      <Fade>
        <h1>Family Trees</h1>
      </Fade>
      <Flex flexWrap="wrap">
        <FamilyTree familyName="huang-merchant" />
        <FamilyTree familyName="huang-merchant" />
        <FamilyTree familyName="huang-merchant" />
        <FamilyTree familyName="huang-merchant" />
      </Flex>
    </StandardLayout>
  )
}

export const query = graphql`
  {
    allLeadershipSpring19XlsxSheet1 {
      nodes {
        Name
        Title
      }
    }
    allDirectorsSpring19XlsxSheet1 {
      nodes {
        Name
        Title
      }
    }
    allBiosSpring19XlsxFormResponses1 {
      nodes {
        First_Name
        Last_Name
        Class
        LinkedIn_URL
      }
    }
  }
`
