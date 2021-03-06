import React from 'react'

const harvest = "https://images.unsplash.com/photo-1464226184884-fa280b87c399?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80";
const Approach = () => {
    return (
        <div className="approach" style={{ backgroundImage:`url(${harvest})` }}>
            <div className="approach-center">
               <h1 data-aos="flip-up">OUR APPROACH</h1>
               <p data-aos="fade-down">Our farm strictly combines the traditions of organic farming with the latest innovations to make our products healthy and safe for our clients.</p>
               <button data-aos="flip-down">PRESENTATION</button>
               
            </div>
        </div>
    )
}
export default Approach
