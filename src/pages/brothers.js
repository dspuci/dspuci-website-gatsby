import React from "react"
import { StandardLayout } from "../components/Layout"
import { Flex } from "rebass"
import Brother from "../components/Brother"

export default () => {
  let brotherInfo = {
    name: "Farbod Rafezy",
    class: "Alpha Eta",
    linkedInUrl: "https://linkedin.com/in/frafezy",
  }
  return (
    <StandardLayout>
      <h1>Active Brothers</h1>
      <Flex flexWrap="wrap">
        <Brother brotherInfo={brotherInfo} />
      </Flex>
    </StandardLayout>
  )
}
