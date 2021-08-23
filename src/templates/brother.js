import React from "react"
import { graphql } from "gatsby"
import { Flex, Box, Image, Text } from "rebass"
import { StandardLayout } from "../components/Layout"
import { withPrefix } from "gatsby"
import styled from 'styled-components'
import coatofarms from "../images/coatofarms.jpg"

const Padding = styled.div`
  width: 100%;
  borderBottom: 1px solid black;
  height: 10px;
`

const yearMap = {
  "1st": "Freshman",
  "2nd": "Sophomore",
  "3rd": "Junior",
  "4th": "Senior",
}

const BrotherInfoBox = (props) => (
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

const addDefaultSrc = (ev) => {
  ev.target.src = coatofarms
}

export default ({ data }) => {
  const bio = data.bio.nodes[[0]];
  let brotherInfo = {
    firstName: bio.firstname.trim(),
    lastName: bio.lastname.trim(),
    class: bio.class.trim(),
    year: bio.year.trim(),
    hometown: bio.hometown.trim(),
    major: bio.major.trim(),
    industry: bio.industry.trim(),
    recentPosition: bio.recentposition.trim(),
    involvements: bio.involvements.trim(),
    family: bio.family.trim(),
    linkedInUrl: bio.linkedinurl.trim(),
    bios: bio.bios,
  }
  if (bio.minor != null) {
    brotherInfo.minor = bio.minor.trim()
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
            {yearMap[brotherInfo.year]} | {brotherInfo.major}
            {brotherInfo.minor ? "; " + brotherInfo.minor : null}
          </Text>
          <div
            style={{
              width: "100%",
              borderBottom: "1px solid black",
              height: "10px",
            }}
          ></div>
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
                  <Text fontWeight={"bold"}>Recent Position</Text>
                  <Text>{brotherInfo.recentPosition}</Text>
                </BrotherInfoBox>
                <BrotherInfoBox>
                  <Text fontWeight={"bold"}>Campus Involvements</Text>
                  <Text>{brotherInfo.involvements}</Text>
                </BrotherInfoBox>
              </Flex>
            </Box>
          </Flex>
          <div
            style={{
              width: "100%",
              borderBottom: "1px solid black",
              height: "10px",
            }}
          ></div>
        </Box>
        <Box width={[1]} style={{ textAlign: "center" }} p={3}>
          <Text>{brotherInfo.bios}</Text>
        </Box>
      </Flex>
    </StandardLayout>
  )
}

// TO CHANGE BIO CHANGE THIS
export const query = graphql`
  query($slug: String!) {
    bio: biosSummer21XlsxFormResponses1(fields: { slug: { eq: $slug } }) {
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
      Family
      LinkedIn_URL
      Bios
    }
  }
`
