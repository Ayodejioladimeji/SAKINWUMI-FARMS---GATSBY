import React from 'react'
import counter from '../constants/counter'

const Counter = () => {
    return (
        <div className="counter">
            <div className="count">
                {counter.map((data)=>{
                    const {id, icon, title, text} = data
                    return(
                        <div className="count-one" key={id} data-aos="fade-down">
                            <div className="div-icon" data-aos="fade-right">{icon}</div>
                            <div className="count-words" data-aos="fade-down">
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
