import React from "react"
import {FaCertificate, FaGift, FaProjectDiagram, FaTrophy} from 'react-icons/fa'

export default [
  {
    id: 1,
    icon: <FaGift className="history-icon"/>,
    title: "ESTABLISHMENT",
    text: `Our poultry farm was established in 2018 with a goal of providing high quality organic chicken and eggs to the local community`,
  },
  {
    id: 2,
    icon: <FaTrophy className="history-icon"/>,
    title: "FIRST SUCCESS",
    text: `In 2019, Our farm was awarded the "Best Small Business" prize. we also introduced new poultry and extended our farms territory.`,
  },
  {
    id: 3,
    icon: <FaCertificate className="history-icon"/>,
    title: "NATIONAL RECOGNITION",
    text: `In 2019, we gained national recognition when our farm joined the list of teh most successful Nigerian organic farms.`,
  },
  {
    id: 4,
    icon: <FaProjectDiagram className="history-icon"/>,
    title: "NEW TECHNOLOGIES",
    text: `Two Years Later, Our farm will be updated with new innovative equipment that will allow the improvement of poultry feeding process.`,
  },

]