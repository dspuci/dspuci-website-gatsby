import React from "react"
import { graphql } from "gatsby"
import { Flex, Box, Image, Text } from "rebass"
import { StandardLayout } from "../components/Layout"
import { withPrefix } from "gatsby"
import coatofarms from "../images/coatofarms.jpg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMapMarkerAlt, faGraduationCap, faBriefcase, faUsers, faUserTie, faStar } from "@fortawesome/free-solid-svg-icons"

const yearMap = {
  "1st": "Freshman",
  "2nd": "Sophomore",
  "3rd": "Junior",
  "4th": "Senior",
}

const InfoCard = ({ icon, label, value }) => (
  <Box
    sx={{
      background: "rgba(255, 255, 255, 0.03)",
      borderRadius: "14px",
      padding: "18px 24px",
      border: "1px solid rgba(146, 132, 207, 0.15)",
      height: "100%",
    }}
  >
    <Flex alignItems="center">
      <Box
        sx={{
          color: "#9284cf",
          marginRight: "18px",
          fontSize: "20px",
          width: "28px",
          textAlign: "center",
        }}
      >
        <FontAwesomeIcon icon={icon} />
      </Box>
      <Box>
        <Text
          sx={{
            fontSize: "12px",
            textTransform: "uppercase",
            letterSpacing: "0.1em",
            color: "#9284cf",
            fontWeight: "600",
            marginBottom: "4px",
          }}
        >
          {label}
        </Text>
        <Text sx={{ fontSize: "16px", color: "#fff", lineHeight: 1.5 }}>
          {value}
        </Text>
      </Box>
    </Flex>
  </Box>
)

const addDefaultSrc = (ev) => {
  ev.target.src = coatofarms
}

export default ({ data }) => {
  if (!data || !data.bio) {
    return null;
  }
  const bio = data.bio;

  let brotherInfo = {
    firstName: bio.First_Name.trim(),
    lastName: bio.Last_Name.trim(),
    class: bio.Class.trim(),
    year: bio.Year.trim(),
    hometown: bio.Hometown.trim(),
    major: bio.Major.trim(),
    industry: bio.Industry.trim(),
    recentPosition: bio.Recent_Position.trim(),
    involvements: bio.Involvements.trim(),
    family: bio.Family.trim(),
    linkedInUrl: bio.LinkedIn_URL.trim(),
    bios: bio.Bios,
  }
  if (bio.Minor != null) {
    brotherInfo.minor = bio.Minor.trim()
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
          maxWidth: "1100px",
          margin: "40px auto 0",
          padding: ["0 24px", "0 40px", "0 48px"],
        }}
        alignContent="flex-start"
      >
        {/* Profile Image Section */}
        <Box 
          p={[2, 3]} 
          width={[1, "auto"]}
          sx={{
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: ["center", "flex-start"],
          }}
        >
          <Image
            width={[260, 300, 320]}
            onError={addDefaultSrc}
            src={withPrefix(
              `/images/brothers/current_data/${brotherInfo.codeName}.jpg`
            )}
            sx={{
              borderRadius: "18px",
              boxShadow: "0px 10px 35px rgba(53, 12, 94, 0.28)",
              border: "2px solid rgba(146, 132, 207, 0.2)",
            }}
          />
        </Box>

        {/* Info Section */}
        <Box flex={1} px={[2, 4]} py={[3, 3]}>
          {/* Name Header */}
          <Box sx={{ marginBottom: "22px" }}>
            <Text
              sx={{
                fontSize: ["32px", "42px"],
                fontWeight: "700",
                letterSpacing: "-0.02em",
                lineHeight: 1.2,
                color: "#fff",
              }}
            >
              {brotherInfo.firstName} {brotherInfo.lastName}
            </Text>
            <Text
              sx={{
                fontSize: ["16px", "20px"],
                color: "#9284cf",
                fontWeight: "500",
                marginTop: "8px",
              }}
            >
              {yearMap[brotherInfo.year]} • {brotherInfo.major}
              {brotherInfo.minor ? " • " + brotherInfo.minor : null}
            </Text>
            
            {/* Divider */}
            <Box
              sx={{
                height: "1px",
                background: "#666",
                marginTop: "14px",
                width: "100%",
              }}
            />
          </Box>

          {/* Info Cards Grid */}
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: ["1fr", "1fr 1fr"],
              gap: "14px",
            }}
          >
            <InfoCard 
              icon={faMapMarkerAlt} 
              label="Hometown" 
              value={brotherInfo.hometown} 
            />
            <InfoCard 
              icon={faStar} 
              label="Positions" 
              value={brotherInfo.recentPosition} 
            />
            <InfoCard 
              icon={faGraduationCap} 
              label="Pledge Class" 
              value={brotherInfo.class} 
            />
            <InfoCard 
              icon={faUsers} 
              label="Campus Involvements" 
              value={brotherInfo.involvements} 
            />
            <InfoCard 
              icon={faBriefcase} 
              label="Industries of Interest" 
              value={brotherInfo.industry} 
            />
            <InfoCard 
              icon={faUserTie} 
              label="Family" 
              value={brotherInfo.family} 
            />
          </Box>
        </Box>

        {/* Bio Section */}
        <Box width={1} px={[2, 4]} py={3}>
          <Flex 
            alignItems="center" 
            sx={{ margin: '24px 0 36px' }}
          >
            <Box sx={{ flex: 1, height: '1px', background: '#444' }} />
            <Text sx={{ padding: '0 20px', color: '#9284cf', fontWeight: '600', letterSpacing: '0.1em' }}>ΔΣΠ</Text>
            <Box sx={{ flex: 1, height: '1px', background: '#444' }} />
          </Flex>
          
          <Box
            sx={{
              maxWidth: "800px",
              margin: "0 auto",
              textAlign: "center",
            }}
          >
            <Text
              sx={{
                fontSize: "13px",
                textTransform: "uppercase",
                letterSpacing: "0.12em",
                color: "#9284cf",
                fontWeight: "600",
                marginBottom: "14px",
              }}
            >
              About {brotherInfo.firstName}
            </Text>
            <Text
              sx={{
                fontSize: "17px",
                lineHeight: 1.8,
                color: "#bbb",
                fontStyle: "italic",
              }}
            >
              "{brotherInfo.bios}"
            </Text>
          </Box>
        </Box>
      </Flex>
    </StandardLayout>
  )
}

// TO CHANGE BIO CHANGE THIS
export const query = graphql`
  query($slug: String!) {
    bio: biosCurrentdataXlsxFormResponses1(fields: { slug: { eq: $slug } }) {
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