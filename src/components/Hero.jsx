import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import {Link} from 'gatsby'

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
                                    <h3 data-aos="fade-right">{intro}</h3>
                                    <h1 data-aos="fade-down">{title}</h1>
                                    <p data-aos="fade-up">{text}</p>
                                    <Link to="/about">
                                        <button className="btn-explore" data-aos="fade-right">EXPLORE</button>
                                    </Link>
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
