import React from "react"
import { graphql } from "gatsby"
import { Flex, Box, Image, Text } from "rebass"
import { StandardLayout } from "../components/Layout"
import { withPrefix } from "gatsby"

export default ({ data }) => {
  let brotherInfo = {
    firstName: data.biosSpring19XlsxFormResponses1.First_Name.trim(),
    lastName: data.biosSpring19XlsxFormResponses1.Last_Name.trim(),
    class: data.biosSpring19XlsxFormResponses1.Class.trim(),
    year: data.biosSpring19XlsxFormResponses1.Year.trim(),
    hometown: data.biosSpring19XlsxFormResponses1.Hometown.trim(),
    majors_and_minors: data.biosSpring19XlsxFormResponses1.Majors_and_Minors.trim(),
    industry: data.biosSpring19XlsxFormResponses1.Industry.trim(),
    recentPosition: data.biosSpring19XlsxFormResponses1.Recent_Position.trim(),
    involvements: data.biosSpring19XlsxFormResponses1.Involvements.trim(),
    hobbies: data.biosSpring19XlsxFormResponses1.Hobbies.trim(),
    family: data.biosSpring19XlsxFormResponses1.Family.trim(),
    linkedInUrl: data.biosSpring19XlsxFormResponses1.LinkedIn_URL.trim(),
  }
  brotherInfo.codeName = brotherInfo.firstName + "_" + brotherInfo.lastName

  return (
    <StandardLayout>
      <Flex flexWrap="wrap">
        <Box style={{ textAlign: "center" }} p={3} width={[1, 1 / 3, 1 / 4]}>
          <Image
            width={175}
            src={withPrefix(
              `/images/brothers/winter19/${brotherInfo.codeName}.jpg`
            )}
            borderRadius={8}
          />
          <Text pt={2} fontWeight="bold" fontSize={[34, 24]}>
            {brotherInfo.firstName} {brotherInfo.lastName}
          </Text>
        </Box>
        <Box p={3} width={[1, 2 / 3, 3 / 4]}>
          <ul>
            <li>Year: {brotherInfo.year}</li>
            <li>Major: {brotherInfo.majors_and_minors}</li>
            <li>Pledge Class: {brotherInfo.class} Pledge Class</li>
            <li>Family: {brotherInfo.family}</li>
            <li>Hometown: {brotherInfo.hometown}</li>
            <li>Industry of Interest: {brotherInfo.industry}</li>
            <li>Recent Position: {brotherInfo.recentPosition}</li>
            <li>Campus Involvements: {brotherInfo.involvements}</li>
            <li>Hobbies: {brotherInfo.hobbies}</li>
          </ul>
        </Box>
      </Flex>
    </StandardLayout>
  )
}

export const query = graphql`
  query($slug: String!) {
    biosSpring19XlsxFormResponses1(fields: { slug: { eq: $slug } }) {
      First_Name
      Last_Name
      Class
      Year
      Hometown
      Majors_and_Minors
      Industry
      Recent_Position
      Involvements
      Hobbies
      Family
      LinkedIn_URL
    }
  }
`
