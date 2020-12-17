import React from 'react'
import history from '../constants/history'


const History = () => {
    return (
        <div className="div-history">
            <div className="history-heading">
                <h3 data-aos="fade-up">HOW WE ACHIEVED SUCCESS</h3>
                <h1 data-aos="fade-down">OUR HISTORY</h1>
                <div className="underline" data-aos="flip-right"></div>
            </div>

            <div className="history-center">
                {history.map((data)=>{
                const {id, icon, title, text} = data;
                return(
                    <div key={id} className="histories" data-aos="zoom-in">
                        {icon}
                        <h2>{title}</h2>
                        <div className="underline"></div>
                        <p>{text}</p>

                        <div className="history-over">
                            {icon}
                            <h2>{title}</h2>
                            <div className="underline"></div>
                            <p>{text}</p>
                        </div>
                    </div>           
                )
                })}
            </div>
        </div>
    )
}

export default History