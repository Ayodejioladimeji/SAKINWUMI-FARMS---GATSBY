import React from 'react'
import {Link} from 'gatsby'


const data = [
    {
        id:1,
        text:'Home',
        url:'/',
    },
    {
        id:2,
        text:'About',
        url:'/about',
    },
    {
        id:3,
        text:'Contact',
        url:'/contact',
    },
    {
        id:4,
        text:'Services',
        url:'/services',
    },
    {
        id:5,
        text:'Login',
        url:'/login',
    },

]

const tempLinks = data.map(link=>{
    const {id, url, text} = link
    return(
        <li key={id}>
            <Link to={url}>{text}</Link>
        </li>
    )
})


export default ({ styleClass }) => {
    return (
      <ul className={`page-links ${styleClass ? styleClass : ""}`}>
        {tempLinks}
      </ul>
    )
  }