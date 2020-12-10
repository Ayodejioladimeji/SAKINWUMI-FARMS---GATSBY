import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import hero from '../constants/hero'

const Hero = () => {
    return (
        <div className="hero">
             <Carousel autoPlay>           
                {hero.map((data)=>{
                    const {id,icon, intro, title, text} = data
                    return(
                        <div className="hero-image" key={id}>
                            <div className="carousel-div">
                                <h3>{intro}</h3>
                                <h1>{title}</h1>
                                <p>{text}</p>
                                <button className="btn-explore">EXPLORE</button>
                            </div> 
                            {icon} 
                        </div>  
                    )
                })}
            </Carousel>
        </div>
    )
}

export default Hero
