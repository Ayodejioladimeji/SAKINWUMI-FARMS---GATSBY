import React from 'react'
import services from "../constants/one"

import Aos from "aos"
import "aos/dist/aos.css"

const One = () => {

    // useEffect(()=>{
    //     Aos.init({duration:2000});
    //   }, []);
    
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
