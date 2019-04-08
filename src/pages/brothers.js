import React from "react"
import { StandardLayout } from "../components/Layout"
import { Flex } from "rebass"
import Brother from "../components/Brother"
import { graphql } from "gatsby"
import { Fade } from "react-reveal"

export default ({ data }) => {
  return (
    <StandardLayout>
      <Fade>
        <h1>Active Brothers</h1>
      </Fade>
      <Flex flexWrap="wrap">
        {data.allBiosSpring19XlsxFormResponses1.nodes.map(brotherInfo => (
          <Brother brotherInfo={brotherInfo} />
        ))}
      </Flex>
    </StandardLayout>
  )
}

export const query = graphql`
  {
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
