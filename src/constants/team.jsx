import React from "react"


const secretary = "https://ld-wt73.template-help.com/wt_prod-22316/images/team-2-370x406.jpg"
const manager = "https://ld-wt73.template-help.com/wt_prod-22316/images/team-3-370x406.jpg"
const ceo = "https://res.cloudinary.com/devsource/image/upload/v1607943056/Screenshot_20201214-114434_1607943031901_vpyzt2.jpg"
const cordinator = "https://ld-wt73.template-help.com/wt_prod-22316/images/team-1-370x406.jpg"
export default [
  {
    id: 1,
    icon: <img src={manager} alt="manager"/>,
    name: "JOHN GILLARD",
    post: "FARM MANAGER",
    text: `SAKINWUMI FARMS`,
  },
  {
    id: 2,
    icon: <img src={ceo} alt="ceo"/>,
    name: "OLUWASEGUN A.",
    post: "CEO",
    text: `SAKINWUMI FARMS`,
  },
  {
    id: 3,
    icon: <img src={secretary} alt="secretary"/>,
    name: "MELLY KATE",
    post: "SECRETARY",
    text: `SAKINWUMI FARMS`,
  },
  {
    id: 4,
    icon: <img src={cordinator} alt="cordinator"/>,
    name: "DYAN SMITH",
    post: "CORDINATOR",
    text: `SAKINWUMI FARMS`,
  },
]