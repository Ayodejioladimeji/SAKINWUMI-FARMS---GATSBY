import React from "react"
import agric from '../assets/agric.svg'
import sprout from '../assets/sprout.svg'
import farmer from '../assets/farmer.svg'
import field from '../assets/field.svg'

export default [
  {
    id: 1,
    icon: <img src={agric} alt="agric"/>,
    title: "NATURAL FEED",
    text: `We use the best feeds with essential nutrients to raise the best chickens and turkeys.`,
  },
  {
    id: 2,
    icon: <img src={sprout} alt="sprout"/>,
    title: "OWN FIELDS",
    text: `We use our own farm fields for grazing hens and chickens to give them more fresh air and space.`,
  },
  {
    id: 3,
    icon: <img src={farmer} alt="farmer"/>,
    title: "MODERN FARM",
    text: `Our farm uses the latest incubation and feeding technologies to raise the best poultry in the state.`,
  },
  {
    id: 4,
    icon: <img src={field} alt="field"/>,
    title: "100% ORGANIC",
    text: `We adhere to the organic philosophy, which implies the usage of natural feed for our chickens.`,
  },

]