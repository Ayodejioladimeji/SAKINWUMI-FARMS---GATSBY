import React, {useState, useEffect} from 'react'
import {FiChevronRight, FiChevronLeft} from 'react-icons/fi'
import testimonials from '../constants/testimonials'

import '../css/testimonial.css'


const Testimonials = () => {
    const [people, setPeople] = useState(testimonials);
    const [index, setIndex] = useState(0);

    useEffect(()=>{
        const lastIndex = people.length - 1;
        if(index < 0){
            setIndex(lastIndex)
        }
        if(index > lastIndex){
            setIndex(0);
        }
    }, [index, people]);

    useEffect(()=>{
        let slider = setInterval(()=>{
            setIndex(index + 1);
        }, 10000);
        return()=>{
            clearInterval(slider);
        }
    },[index])

    return (
        <div className="testimonials">
            <section className="testimonial-section">
                <div className="title-top">
                    <h3 data-aos="fade-down">WHAT PEOPLE SAY</h3>
                    <h2 data-aos="fade-up">TESTIMONIALS</h2>
                </div>

                <div className="testimonial-center">
                    {people.map((person, personIndex)=>{
                        const {id, image, name, title, quote} = person

                        let position = 'nextSlide';

                        if(personIndex === index){
                            position = 'activeSlide';
                        }

                        return(
                            <article className={position} key={id} >
                                <img src={image} alt="slider" className="person-img" data-aos="fade-right"/>
                               <div className="article-text" data-aos="fade-down">
                                    <h4 className="center-name">{name}</h4>
                                    <p className="title">{title}</p>
                                    <p className="text">{quote}</p>
                               </div>
                            </article>
                        )
                    })}
                   
                    <button className="prev" onClick={()=> setIndex(index - 1)}>
                        <FiChevronLeft/>
                    </button>

                    <button className="next" onClick={()=> setIndex(index + 1)}>
                        <FiChevronRight/>
                    </button>
                </div>
            </section>
        </div>
    )
}

export default Testimonials
