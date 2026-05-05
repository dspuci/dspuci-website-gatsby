import React, { useEffect, useState } from "react"
import { Flex, Box } from "rebass"
import { graphql, navigate } from "gatsby"
import { Fade } from "react-reveal"
import { TransitionGroup, CSSTransition } from "react-transition-group"

import { StandardLayout } from "../components/Layout"
import { Brother, LeaderBrother } from "../components/Brother"
import FamilyTree from "../components/FamilyTree/FamilyTree"
import { Helmet } from "react-helmet"
import brothersStyles from "./brothers.module.css"

const TAB_IDS = ["brothers", "executive", "directors", "family"]

const TAB_LABELS = {
  brothers: "Brothers",
  executive: "Executive Committee",
  directors: "Directors",
  family: "Family Trees",
}

function tabFromSearch(search) {
  if (!search) return null
  const t = new URLSearchParams(search).get("tab")
  return TAB_IDS.includes(t) ? t : null
}

const sortedBrothers = (nodes) =>
  nodes
    .filter((b) => b.First_Name !== "InsertFirstName")
    .sort((a, b) =>
      a.Last_Name > b.Last_Name
        ? 1
        : b.Last_Name > a.Last_Name
        ? -1
        : a.First_Name > b.First_Name
        ? 1
        : b.First_Name > a.First_Name
        ? -1
        : 0
    )

export default ({ data, location }) => {
  const initialTab = tabFromSearch(location?.search) || "brothers"
  const [activeTab, setActiveTab] = useState(initialTab)

  useEffect(() => {
    const t = tabFromSearch(location?.search)
    setActiveTab(t || "brothers")
  }, [location?.search])

  const goToTab = (tabId) => {
    setActiveTab(tabId)
    const path = `${location?.pathname || "/brothers"}?tab=${tabId}`
    navigate(path, { replace: true })
  }

  const onTabKeyDown = (e, index) => {
    if (e.key === "ArrowRight" || e.key === "ArrowLeft") {
      e.preventDefault()
      const next =
        e.key === "ArrowRight"
          ? (index + 1) % TAB_IDS.length
          : (index - 1 + TAB_IDS.length) % TAB_IDS.length
      goToTab(TAB_IDS[next])
      document.getElementById(`brothers-tab-${TAB_IDS[next]}`)?.focus()
    }
  }

  const brothersList = sortedBrothers(data.brothers.nodes)

  const tabPanelContent = (() => {
    switch (activeTab) {
      case "brothers":
        return (
          <Flex flexWrap="wrap">
            {brothersList.map((brotherInfo, i) => (
              <Brother key={i} brotherInfo={brotherInfo} />
            ))}
          </Flex>
        )
      case "executive":
        return (
          <Flex flexWrap="wrap">
            {data.executiveCommittee.nodes.map((brotherInfo, i) => (
              <LeaderBrother
                key={i}
                name={brotherInfo.Name}
                title={brotherInfo.Title}
              />
            ))}
          </Flex>
        )
      case "directors":
        return (
          <Flex flexWrap="wrap">
            {data.directors.nodes.map((brotherInfo, i) => (
              <LeaderBrother
                key={i}
                name={brotherInfo.Name}
                title={brotherInfo.Title}
              />
            ))}
          </Flex>
        )
      case "family":
        return (
          <Flex flexWrap="wrap">
            {data.families.nodes.map((family, i) => (
              <FamilyTree key={i} familyName={family.name} />
            ))}
          </Flex>
        )
      default:
        return null
    }
  })()

  return (
    <StandardLayout>
      <Helmet>
        <title>Brothers | Delta Sigma Pi - Pi Sigma Chapter</title>
        <meta
          name="Delta Sigma Pi - Pi Sigma Chapter Brothers Page"
          content="Delta Sigma Pi - Pi Sigma Chapter Brothers Page"
        />
      </Helmet>

      <Fade>
        <h1 className={brothersStyles.pageTitle}>{TAB_LABELS[activeTab]}</h1>
      </Fade>

      <hr className={brothersStyles.headerDivider} aria-hidden="true" />

      <Box
        as="div"
        role="tablist"
        aria-label="Brothers page sections"
        sx={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
          gap: "10px",
          width: "100%",
          maxWidth: "100%",
          marginBottom: "36px",
          paddingBottom: "8px",
          overflowX: "auto",
          WebkitOverflowScrolling: "touch",
        }}
      >
        {TAB_IDS.map((id, index) => {
          const selected = activeTab === id
          return (
            <button
              key={id}
              type="button"
              role="tab"
              id={`brothers-tab-${id}`}
              aria-selected={selected}
              aria-controls="brothers-tab-panel"
              tabIndex={selected ? 0 : -1}
              onClick={() => goToTab(id)}
              onKeyDown={(e) => onTabKeyDown(e, index)}
              className={`${brothersStyles.tabBtn} ${
                selected
                  ? brothersStyles.tabBtnActive
                  : brothersStyles.tabBtnInactive
              }`}
            >
              {TAB_LABELS[id]}
            </button>
          )
        })}
      </Box>

      <div
        role="tabpanel"
        id="brothers-tab-panel"
        aria-labelledby={`brothers-tab-${activeTab}`}
      >
        <TransitionGroup component={null}>
          <CSSTransition
            key={activeTab}
            timeout={200}
            classNames="page-transition"
          >
            <div>{tabPanelContent}</div>
          </CSSTransition>
        </TransitionGroup>
      </div>
    </StandardLayout>
  )
}

// 🔥 THIS IS THE IMPORTANT PART (GraphQL)
export const query = graphql`
  {
    executiveCommittee: allLeadershipCurrentdataXlsxSheet1 {
      nodes {
        Name
        Title
      }
    }

    directors: allDirectorsCurrentdataXlsxSheet1 {
      nodes {
        Name
        Title
      }
    }
    brothers: allBiosCurrentdataXlsxFormResponses1 {
      nodes {
        Last_Name
        First_Name
        LinkedIn_URL
        Email
        Class
      }
    }

    families: allFile(
      filter: { sourceInstanceName: { eq: "families" } }
      sort: { fields: name }
    ) {
      nodes {
        name
      }
    }
  }
`
