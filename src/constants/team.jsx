import React from "react"
import hen from '../assets/sheep.jpg'
const cordinator = "https://ld-wt73.template-help.com/wt_prod-22316/images/team-2-370x406.jpg"
const manager = "https://ld-wt73.template-help.com/wt_prod-22316/images/team-3-370x406.jpg"
const ceo = "https://res.cloudinary.com/devsource/image/upload/v1607943056/Screenshot_20201214-114434_1607943031901_vpyzt2.jpg"
export default [
  {
    id: 1,
    icon: <img src={manager} alt="hen"/>,
    name: "JOHN GILLARD",
    post: "FARM MANAGER",
    text: `SAKINWUMI FARMS`,
  },
  {
    id: 2,
    icon: <img src={ceo} alt="hen"/>,
    name: "OLUWASEGUN A.",
    post: "CEO",
    text: `SAKINWUMI FARMS`,
  },
  {
    id: 3,
    icon: <img src={cordinator} alt="hen"/>,
    name: "MELLY KATE",
    post: "CORDINATOR",
    text: `SAKINWUMI FARMS`,
  },
]