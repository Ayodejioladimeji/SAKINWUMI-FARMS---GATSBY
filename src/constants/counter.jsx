import React from "react"
import value from '../assets/value.svg'
import medal from '../assets/medal.svg'
import shipping from '../assets/shipping.svg'
import calendar from '../assets/calendar.svg'


export default [
  {
    id: 1,
    icon: <img src={value} alt="value"/>,
    title: 5000,
    text: `HAPPY CUSTOMERS`,
  },
  {
    id: 2,
    icon: <img src={medal} alt="medal"/>,
    title: 12,
    text: `AWARDS & FEATURES`,
  },
  {
    id: 3,
    icon: <img src={shipping} alt="shipping"/>,
    title: '200K',
    text: `PRODUCTS SOLD`,
  },
  {
    id: 4,
    icon: <img src={calendar} alt="calendar"/>,
    title: 3,
    text: `YEARS OF PROGRESS`,
  },

]