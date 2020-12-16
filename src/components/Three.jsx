import React from 'react'
import table from '../constants/table'
// import feeds from '../assets/sea.jpg'
import sprout from '../assets/harvest.svg'
import {Link} from 'gatsby'

const feeds = "https://images.unsplash.com/photo-1488459716781-31db52582fe9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"

const Three = () => {
    return (
        <div className="three" style={{ backgroundImage:`url(${feeds})` }}>
            <div className="three-cover">
                <div className="table">
                    {table.map((data)=>{
                        const {icon, title, text} = data
                        return(
                            <div className="table-one">
                                {icon}
                                <div className="table-words">
                                    <h2>{title}</h2>
                                    <p>{text}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
                <div className="three-center">
                   <img src={sprout} alt="sprout"/>
                   <p>SAKINWUMI FARMS</p>

                   <div className="three-text">
                        <h1>Agriculture Is Providing The Best Solution of Eco Environment</h1>
                   </div>
                   <div className="three-buttons">
                        <Link to="/services">
                            <button className="btn-two">SERVICES</button>
                        </Link>
                   </div>
                </div>
            </div>
        </div>
    )
}

export default Three
