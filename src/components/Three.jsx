import React from 'react'
import table from '../constants/table'
import sprout from '../assets/harvest.svg'
import {Link} from 'gatsby'


const Three = () => {
    return (
        <div className="three">
            <div className="three-cover">
                <div className="table">
                    {table.map((data)=>{
                        const {id, icon, title, text} = data
                        return(
                            <div className="table-one" key={id} data-aos="flip-right">
                                {icon}
                                <div className="table-words">
                                    <h2 data-aos="fade-down">{title}</h2>
                                    <p data-aos="fade-up">{text}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
                <div className="three-center">
                   <img src={sprout} alt="sprout" data-aos="fade-down"/>
                   <p data-aos="fade-right">SAKINWUMI FARMS</p>

                   <div className="three-text" data-aos="zoom-in">
                        <h1>Agriculture Is Providing The Best Solution of Eco Environment</h1>
                   </div>
                   
                   <div className="three-buttons" data-aos="fade-up">
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
