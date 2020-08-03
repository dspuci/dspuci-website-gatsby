import React from "react"
import { graphql } from "gatsby"
import { Flex, Box, Image, Text } from "rebass"
import { StandardLayout } from "../components/Layout"
import { withPrefix } from "gatsby"

import coatofarms from "../images/coatofarms.jpg"

const BrotherInfoBox = props => (
  <Box
    width={[1]}
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
    major: data.bio.Major.trim(),
    industry: data.bio.Industry.trim(),
    recentPosition: data.bio.Recent_Position.trim(),
    involvements: data.bio.Involvements.trim(),
    hobbies: data.bio.Hobbies.trim(),
    family: data.bio.Family.trim(),
    linkedInUrl: data.bio.LinkedIn_URL.trim(),
    bios: data.bio.Bios,
  }
  if (data.bio.Minor != null) {
    brotherInfo["minor"] = data.bio.Minor.trim()
  }
  brotherInfo.codeName = `${brotherInfo.firstName} ${brotherInfo.lastName}`
    .split(" ")
    .join("_")
    .toLowerCase()

  return (
    <StandardLayout>
      <Flex
        flexWrap="wrap"
        sx={{
          marginTop: 40,
          fontFamily: "Heebo",
        }}
        alignContent="stretch"
      >
        <Box style={{ textAlign: "center" }} p={3} width={[1, 1 / 3, 1 / 3]}>
          <Image
            width={280}
            onError={addDefaultSrc}
            src={withPrefix(
              `/images/brothers/winter20/${brotherInfo.codeName}.jpg`
            )}
            borderRadius={8}
          />
        </Box>
        <Box width={[1, 2 / 3, 2 / 3]}>
          <Text pt={2} fontWeight="bold" fontSize={[34, 44]}>
            {brotherInfo.firstName} {brotherInfo.lastName}
          </Text>
          <Text fontWeight="100" fontSize={[18, 22]}>
            {brotherInfo.year} | {brotherInfo.major}{brotherInfo.minor ? "; " + brotherInfo.minor : null}
          </Text>
          <div style={{width: '100%', borderBottom: '1px solid black', height: '10px'}}></div>
          <Flex flexWrap="wrap" py={3}>
          <Box width={[1, 1 / 2]} pr={3}>
            <Flex flexWrap="wrap">
              <BrotherInfoBox>
                <Text fontWeight={"bold"}>Hometown</Text>
                <Text>{brotherInfo.hometown}</Text>
              </BrotherInfoBox>
              <BrotherInfoBox>
                <Text fontWeight={"bold"}>Pledge Class</Text>
                <Text>{brotherInfo.class}</Text>
              </BrotherInfoBox>
              <BrotherInfoBox>
                <Text fontWeight={"bold"}>Industry of Interest</Text>
                <Text>{brotherInfo.industry}</Text>
              </BrotherInfoBox>
            </Flex>
          </Box>
          <Box width={[1, 1 / 2]} pr={3}>
            <Flex flexWrap="wrap">
              <BrotherInfoBox>
                <Text fontWeight={"bold"}>Recent Positions</Text>
                <Text>{brotherInfo.recentPosition}</Text>
              </BrotherInfoBox>
              <BrotherInfoBox>
                <Text fontWeight={"bold"}>Campus Involvements</Text>
                <Text>{brotherInfo.involvements}</Text>
              </BrotherInfoBox>
            </Flex>
          </Box>
          </Flex>
          <div style={{width: '100%', borderBottom: '1px solid black', height: '10px'}}></div>
        </Box>
        <Box width={[1]} style={{ textAlign: "center" }} p={3}>
          <Text>{brotherInfo.bios}</Text>
        </Box>
      </Flex>
    </StandardLayout>
  )
}

export const query = graphql`
  query($slug: String!) {
    bio: biosWinter20XlsxFormResponses1(fields: { slug: { eq: $slug } }) {
      First_Name
      Last_Name
      Class
      Year
      Hometown
      Major
      Minor
      Industry
      Recent_Position
      Involvements
      Hobbies
      Family
      LinkedIn_URL
      Bios
    }
  }
`
