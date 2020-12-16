import React, {useState, useEffect} from 'react'
import {FiChevronRight, FiChevronLeft} from 'react-icons/fi'
import testimonials from '../constants/testimonials'

import '../css/testimonial.css'

// const harvest = "https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixid=MXwxMjA3fDB8MHxzZWFyY2h8OHx8ZmFybXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60";

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
                <div className="title">
                    <h3>WHAT PEOPLE SAY</h3>
                    <h2>TESTIMONIALS</h2>
                </div>

                <div className="testimonial-center">
                    {people.map((person, personIndex)=>{
                        const {id, image, name, title, quote} = person

                        let position = 'nextSlide';

                        if(personIndex === index){
                            position = 'activeSlide';
                        }

                        {/* if(personIndex ===index -1 ||
                        (index === 0 && personIndex === people.length - 1)){
                            position = 'lastSlide';
                        } */}

                        return(
                            <article className={position} key={id}>
                                <img src={image} alt="slider" className="person-img"/>
                               <div className="article-text">
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
