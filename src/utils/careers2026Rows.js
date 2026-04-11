/**
 * Careers 2026 tab:
 * - Full-time: Incoming class list (industry sections + Name | Position | Company).
 * - Internships: Current & Incoming list with explicit industry categories per row.
 */

const CATEGORY_ORDER = [
  "Finance & Accounting",
  "Marketing & Sales",
  "Human Resources & Administration",
  "Technology & PM",
  "Consulting",
  "Operations",
  "Venture Capital",
  "Law",
  "Other",
]

const REMOVED_NAMES = new Set([
  "daisy penney",
  "mia ness",
  "eshwar kuppa",
  "vansh mehta",
])

/**
 * 2026 Incoming Full Time — same section headers & row shape as prior years (Name | Position | Company).
 * Ordered by category; within each category, rows are sorted by last name when serialized.
 */
const INCOMING_FULL_TIME_2026 = [
  {
    category: "Finance & Accounting",
    name: "Ayushi Gupta",
    position: "Business Associate",
    company: "VISA",
  },
  {
    category: "Finance & Accounting",
    name: "Jacob Lee",
    position: "Analyst",
    company: "JPMorgan Chase & Co.",
  },
  {
    category: "Finance & Accounting",
    name: "James Kent",
    position: "Audit Associate",
    company: "EY",
  },
  {
    category: "Finance & Accounting",
    name: "Isaac Martinez",
    position: "Audit Associate",
    company: "KPMG",
  },
  {
    category: "Finance & Accounting",
    name: "Thomas Wunsch",
    position: "Analyst",
    company: "JPMorgan Chase & Co.",
  },
  {
    category: "Marketing & Sales",
    name: "Melanie Sagun",
    position: "Marketing Management Trainee",
    company: "L'Oreal",
  },
  {
    category: "Technology & PM",
    name: "Andrew Ly",
    position: "Technical Product Manager",
    company: "Applied Materials",
  },
  {
    category: "Technology & PM",
    name: "Elaine Nguyen",
    position: "Technology Risk Associate",
    company: "EY",
  },
  {
    category: "Technology & PM",
    name: "Jessica Lin",
    position: "Technology Consultant",
    company: "EY",
  },
  {
    category: "Technology & PM",
    name: "Justin Pham",
    position: "Associate Product Manager",
    company: "Capital One",
  },
  {
    category: "Technology & PM",
    name: "Lohit Potnuru",
    position: "Forward Deployed AI Engineer",
    company: "BCG X",
  },
  {
    category: "Technology & PM",
    name: "Mirsab Mirza",
    position: "Strategy & Operations Analyst",
    company: "DoorDash",
  },
  {
    category: "Consulting",
    name: "Thaddeus Dirige",
    position: "Consultant",
    company: "FTI Consulting",
  },
]

/**
 * Sole source for the 2026 “Current & Incoming Internships” tables: exactly these rows only.
 * Do not merge with Excel, bios, or other years. Duplicates (same person, different roles) are intentional.
 */
const CURRENT_INCOMING_INTERNSHIPS_2026 = [
  {
    category: "Finance & Accounting",
    name: "Aaron Park",
    position: "Private Equity Spring Analyst",
    company: "KPMG",
  },
  {
    category: "Consulting",
    name: "Aditya Aggarwal",
    position: "Strategy Intern",
    company: "Experian",
  },
  {
    category: "Technology & PM",
    name: "Amelia Jukita",
    position: "Product Management Intern",
    company: "Tallo",
  },
  {
    category: "Technology & PM",
    name: "Amelia Jukita",
    position: "Product Management Intern",
    company: "Capital One",
  },
  {
    category: "Technology & PM",
    name: "Ananya Iyengar",
    position: "Product Management Intern",
    company: "Mastercard",
  },
  {
    category: "Finance & Accounting",
    name: "Ananya Iyengar",
    position: "Global Private Banking Analyst",
    company: "JPMorgan Chase & Co.",
  },
  {
    category: "Technology & PM",
    name: "Asmitha Chunchu",
    position: "Software Engineering Intern",
    company: "Community Innovations Foundation",
  },
  {
    category: "Technology & PM",
    name: "Atharv Attri",
    position: "Undergraduate Researcher",
    company: "UC Irvine",
  },
  {
    category: "Consulting",
    name: "Emily Guo",
    position: "Strategy Intern",
    company: "Middlebury Education",
  },
  {
    category: "Marketing & Sales",
    name: "Erin Maeng",
    position: "Campus Growth Intern",
    company: "Ditto",
  },
  {
    category: "Marketing & Sales",
    name: "Gavin Han",
    position: "Campus Growth Intern",
    company: "Ditto",
  },
  {
    category: "Marketing & Sales",
    name: "Jadon Song",
    position: "Growth Marketing/CRM Intern",
    company: "FOX",
  },
  {
    category: "Finance & Accounting",
    name: "Jaiman Gupta",
    position: "Financial Analyst Intern",
    company: "Rostrum Grand Ltd",
  },
  {
    category: "Finance & Accounting",
    name: "Jack Klarreich",
    position: "Tax Intern",
    company: "KPMG",
  },
  {
    category: "Consulting",
    name: "Jessica Kwan",
    position: "Data Science & Analytics Consulting Intern",
    company: "West Monroe",
  },
  {
    category: "Finance & Accounting",
    name: "Joseph Whittaker",
    position: "Commercial Banking Intern",
    company: "Wells Fargo",
  },
  {
    category: "Finance & Accounting",
    name: "Joseph Whittaker",
    position: "Intern",
    company: "Concordia Capital",
  },
  {
    category: "Marketing & Sales",
    name: "Joy Bae",
    position: "Marketing Intern",
    company: "Fujitsu Research",
  },
  {
    category: "Finance & Accounting",
    name: "Kyle Chen",
    position: "Private Equity Analyst Intern",
    company: "Tigbourne Capital Ltd",
  },
  {
    category: "Marketing & Sales",
    name: "Lauren Lew",
    position: "Product Ambassador",
    company: "Ditto",
  },
  {
    category: "Technology & PM",
    name: "Lauren Nguyen",
    position: "Project Management & Marketing Intern",
    company: "Tesla",
  },
  {
    category: "Technology & PM",
    name: "Leo Muñoz",
    position: "Software Engineering Intern",
    company: "FOX",
  },
  {
    category: "Technology & PM",
    name: "Lohit Potnuru",
    position: "AI Engineering Intern",
    company: "Firmly",
  },
  {
    category: "Marketing & Sales",
    name: "Luke Minard",
    position: "Sales Associate",
    company: "The Buckle",
  },
  {
    category: "Marketing & Sales",
    name: "Malak Shahin",
    position: "Marketing Intern",
    company: "CrusoeAI",
  },
  {
    category: "Marketing & Sales",
    name: "Neeva Mehta",
    position: "Marketing Intern",
    company: "Crusoe AI",
  },
  {
    category: "Technology & PM",
    name: "Riya Kapadekar",
    position: "Innotech Data, Experience & Product Intern",
    company: "CVS Health",
  },
  {
    category: "Technology & PM",
    name: "Rohan Sastry",
    position: "Software Engineering Intern",
    company: "MC3 Technologies",
  },
  {
    category: "Finance & Accounting",
    name: "Ryan Chung",
    position: "Audit Intern",
    company: "KPMG",
  },
  {
    category: "Finance & Accounting",
    name: "Ryan Chung",
    position: "Credit Analyst Intern",
    company: "BMO",
  },
  {
    category: "Marketing & Sales",
    name: "Sanika Patwardhan",
    position: "Marketing Intern",
    company: "HawkRobo",
  },
  {
    category: "Operations",
    name: "Sanika Saitawdekar",
    position: "Supply Chain Intern",
    company: "Southern California Edison",
  },
  {
    category: "Finance & Accounting",
    name: "Shreya Jagannathan",
    position: "Financial Analyst Intern",
    company: "Expedia Group",
  },
  {
    category: "Marketing & Sales",
    name: "Siena Dunn",
    position: "Marketing Analytics Intern",
    company: "Sciframe IO",
  },
  {
    category: "Finance & Accounting",
    name: "Tarick Ahmed",
    position: "Investment Banking Summer Analyst",
    company: "CB Capital Partners",
  },
  {
    category: "Finance & Accounting",
    name: "Thea Le",
    position: "Risk and Financial Advisory Intern",
    company: "Deloitte",
  },
  {
    category: "Technology & PM",
    name: "Tiffany Zhang",
    position: "Software Engineering Intern",
    company: "BMW",
  },
  {
    category: "Technology & PM",
    name: "Tiffany Zhang",
    position: "Software Engineering Intern",
    company: "Google",
  },
  {
    category: "Marketing & Sales",
    name: "Tirza Kunaidy",
    position: "Student Marketeer",
    company: "Redbull",
  },
  {
    category: "Marketing & Sales",
    name: "Tirza Kunaidy",
    position: "Creator Partnerships Intern",
    company: "Wasserman",
  },
  {
    category: "Marketing & Sales",
    name: "Vanessa Chok",
    position: "Campus Manager",
    company: "Depop",
  },
]

export function normalizeMemberName(name) {
  return (name || "")
    .trim()
    .toLowerCase()
    .replace(/\s+/g, " ")
}

function lastNameSortKey(fullName) {
  const parts = (fullName || "").trim().split(/\s+/)
  return (parts[parts.length - 1] || "").toLowerCase()
}

function groupAndSerialize(rows) {
  const grouped = {}
  CATEGORY_ORDER.forEach((c) => {
    grouped[c] = []
  })
  rows.forEach((r) => {
    const cat = r.category || "Other"
    if (!grouped[cat]) {
      grouped[cat] = []
    }
    grouped[cat].push(r)
  })
  CATEGORY_ORDER.forEach((c) => {
    grouped[c].sort((a, b) => {
      const byLast = lastNameSortKey(a.name).localeCompare(lastNameSortKey(b.name))
      if (byLast !== 0) {
        return byLast
      }
      const tie = `${a.position}\t${a.company}`.localeCompare(
        `${b.position}\t${b.company}`
      )
      return tie
    })
  })
  const out = []
  CATEGORY_ORDER.forEach((cat) => {
    const people = grouped[cat] || []
    if (people.length === 0) {
      return
    }
    out.push({ Name: cat })
    people.forEach((p) => {
      out.push({
        Name: p.name,
        Position: p.position,
        Company: p.company,
      })
    })
  })
  return { nodes: out }
}

export function buildCareers2026FromData() {
  const ftRows = INCOMING_FULL_TIME_2026.filter(
    (r) => !REMOVED_NAMES.has(normalizeMemberName(r.name))
  )

  return {
    fullTime: groupAndSerialize(ftRows),
    internships: groupAndSerialize(CURRENT_INCOMING_INTERNSHIPS_2026),
  }
}
