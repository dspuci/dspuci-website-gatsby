import React from "react"
import { graphql } from "gatsby"
import { Flex, Box, Image, Text } from "rebass"
import { StandardLayout } from "../components/Layout"
import { withPrefix } from "gatsby"

const BrotherInfoBox = props => (
  <Box
    sx={{
      marginBottom: 10,
    }}
  >
    {props.children}
  </Box>
)

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
          marginTop: 50,
          fontFamily: "Heebo",
        }}
      >
        <Box style={{ textAlign: "center" }} p={3} width={[1, 1 / 3, 1 / 4]}>
          <Image
            width={175}
            src={withPrefix(
              `/images/brothers/winter19/${brotherInfo.codeName}.jpg`
            )}
            borderRadius={8}
          />
          <Text pt={2} fontWeight="bold" fontSize={[38, 34]}>
            {brotherInfo.firstName} {brotherInfo.lastName}
          </Text>
        </Box>
        <Box
          sx={{
            padding: [0, 3],
          }}
          width={[1, 2 / 3, 3 / 4]}
        >
          <BrotherInfoBox>
            <Text fontWeight={"bold"}>Year</Text>
            <Text>{brotherInfo.year}</Text>
          </BrotherInfoBox>
          <BrotherInfoBox>
            <Text fontWeight={"bold"}>Major</Text>
            <Text>{brotherInfo.majors_and_minors}</Text>
          </BrotherInfoBox>
          <BrotherInfoBox>
            <Text fontWeight={"bold"}>Pledge Class</Text>
            <Text>{brotherInfo.class}</Text>
          </BrotherInfoBox>
          <BrotherInfoBox>
            <Text fontWeight={"bold"}>Family</Text>
            <Text>{brotherInfo.family}</Text>
          </BrotherInfoBox>
          <BrotherInfoBox>
            <Text fontWeight={"bold"}>Hometown</Text>
            <Text>{brotherInfo.hometown}</Text>
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
