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
                            <div className="table-one" key={id} data-aos="flip-left">
                                {icon}
                                <div className="table-words" data-aos="fade-left">
                                    <h2>{title}</h2>
                                    <p>{text}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
                <div className="three-center">
                   <img src={sprout} alt="sprout" data-aos="fade-up"/>
                   <p data-aos="fade-down">SAKINWUMI FARMS</p>

                   <div className="three-text" data-aos="zoom-out">
                        <h1>Agriculture Is Providing The Best Solution of Eco Environment</h1>
                   </div>
                   <div className="three-buttons">
                        <Link to="/services">
                            <button className="btn-two" data-aos="flip-up">SERVICES</button>
                        </Link>
                   </div>
                </div>
            </div>
        </div>
    )
}

export default Three
