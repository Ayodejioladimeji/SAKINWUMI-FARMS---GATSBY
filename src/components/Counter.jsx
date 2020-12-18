import React from 'react'
import counter from '../constants/counter'

const Counter = () => {
    return (
        <div className="counter">
            <div className="count">
                {counter.map((data)=>{
                    const {id, icon, title, text} = data
                    return(
                        <div className="count-one" key={id} data-aos="zoom-out">
                            <div className="div-icon" fade-right>{icon}</div>
                            <div className="count-words" data-aos="fade-up">
                                <h2>{title}</h2>
                                <p>{text}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Counter
