import React from "react"
import { graphql } from "gatsby"
import { Flex, Box, Image, Text } from "rebass"
import { StandardLayout } from "../components/Layout"
import { withPrefix } from "gatsby"

import coatofarms from "../images/coatofarms.jpg"

const BrotherInfoBox = props => (
  <Box
    width={[1, 1 / 2]}
    sx={{
      paddingLeft: [0, 3, 0],
      paddingRight: [0, 3, 3],
      paddingTop: 2,
      paddingBottom: 2,
    }}
  >
    {props.children}
  </Box>
)

const addDefaultSrc = ev => {
  ev.target.src = coatofarms
}

export default ({ data }) => {
  let brotherInfo = {
    firstName: data.bio.First_Name.trim(),
    lastName: data.bio.Last_Name.trim(),
    class: data.bio.Class.trim(),
    year: data.bio.Year.trim(),
    hometown: data.bio.Hometown.trim(),
    majors_and_minors: data.bio.Majors_and_Minors.trim(),
    industry: data.bio.Industry.trim(),
    recentPosition: data.bio.Recent_Position.trim(),
    involvements: data.bio.Involvements.trim(),
    hobbies: data.bio.Hobbies.trim(),
    family: data.bio.Family.trim(),
    linkedInUrl: data.bio.LinkedIn_URL.trim(),
  }
  brotherInfo.codeName = (
    brotherInfo.firstName +
    "_" +
    brotherInfo.lastName
  ).toLowerCase()

  return (
    <StandardLayout>
      <Flex
        flexWrap="wrap"
        sx={{
          marginTop: 40,
          fontFamily: "Heebo",
        }}
      >
        <Box style={{ textAlign: "center" }} p={3} width={[1, 1 / 3, 1 / 3]}>
          <Image
            width={175}
            onError={addDefaultSrc}
            src={withPrefix(
              `/images/brothers/spring19/${brotherInfo.codeName}.jpg`
            )}
            borderRadius={8}
          />
          <Text pt={2} fontWeight="bold" fontSize={[38, 34]}>
            {brotherInfo.firstName} {brotherInfo.lastName}
          </Text>
        </Box>
        <Box width={[1, 2 / 3, 2 / 3]}>
          <Flex flexWrap="wrap">
            <BrotherInfoBox>
              <Text fontWeight={"bold"}>Year</Text>
              <Text>{brotherInfo.year}</Text>
            </BrotherInfoBox>
            <BrotherInfoBox>
              <Text fontWeight={"bold"}>Pledge Class</Text>
              <Text>{brotherInfo.class}</Text>
            </BrotherInfoBox>
            <BrotherInfoBox>
              <Text fontWeight={"bold"}>Hometown</Text>
              <Text>{brotherInfo.hometown}</Text>
            </BrotherInfoBox>
            <BrotherInfoBox>
              <Text fontWeight={"bold"}>Family</Text>
              <Text>{brotherInfo.family}</Text>
            </BrotherInfoBox>
            <BrotherInfoBox>
              <Text fontWeight={"bold"}>Major</Text>
              <Text>{brotherInfo.majors_and_minors}</Text>
            </BrotherInfoBox>
            <BrotherInfoBox>
              <Text fontWeight={"bold"}>Industry of Interest</Text>
              <Text>{brotherInfo.industry}</Text>
            </BrotherInfoBox>
            <BrotherInfoBox>
              <Text fontWeight={"bold"}>Recent Position</Text>
              <Text>{brotherInfo.recentPosition}</Text>
            </BrotherInfoBox>
            <BrotherInfoBox>
              <Text fontWeight={"bold"}>Campus Involvements</Text>
              <Text>{brotherInfo.involvements}</Text>
            </BrotherInfoBox>
            <BrotherInfoBox>
              <Text fontWeight={"bold"}>Hobbies</Text>
              <Text>{brotherInfo.hobbies}</Text>
            </BrotherInfoBox>
          </Flex>
        </Box>
      </Flex>
    </StandardLayout>
  )
}

export const query = graphql`
  query($slug: String!) {
    bio: biosSpring19XlsxFormResponses1(fields: { slug: { eq: $slug } }) {
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
