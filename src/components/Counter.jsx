import React from 'react'
import counter from '../constants/counter'

const Counter = () => {
    return (
        <div className="counter">
            <div className="count">
                {counter.map((data)=>{
                    const {icon, title, text} = data
                    return(
                        <div className="count-one">
                            {icon}
                            <div className="count-words">
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