import React from 'react'
import services from "../constants/one"


const One = () => {

    return (
       <div className="one">
            <div className="heading">
                <h3>WORKING WITH EXCELLENT</h3>
                <h1>Our Special Services</h1>
            </div>

            <div className="center services-center">
                {services.map((service)=>{
                const {id, icon, title, text} = service;
                return(
                    <div key={id} className="service">
                        {icon}
                        <h4>{title}</h4>
                        <div className="underline"></div>
                        <p>{text}</p>

                        <div className="mouse-over">
                            {icon}
                            <h4>{title}</h4>
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

export default One
