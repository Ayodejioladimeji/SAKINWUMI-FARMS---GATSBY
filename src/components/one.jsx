import React from 'react'
import services from "../constants/one"
import hen from '../assets/sheep.jpg'

const one = () => {
    return (
       <div className="one" style={{ backgroundImage:`url(${hen})` }}>
            <div className="heading">
                <h3>WORKING WITH EXCELLENT</h3>
                <h1>Our Special Services</h1>
            </div>

            <div className="section-center services-center">
                {services.map((service)=>{
                const {id, icon, title, text} = service;
                return(
                    <article key={id} className="service">
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
                    </article>
                    
                )
                })}
            </div>
       </div>
    )
}

export default one
