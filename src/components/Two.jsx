import React from 'react'
import cock from '../assets/cock.jpg'

const Two = () => {
    return (
        <div className="two" style={{ backgroundImage:`url(${cock})` }}>
            <div className="two-cover">
               <div className="two-center">
                   <h1>CARE AT EVERY STAGE</h1>
                   <h3>Our poultry receives great attendance and care throughout every stage of its development due to advanced technologies.</h3>
                    <button className="two-button">READ MORE</button>
               </div>
            </div>
        </div>
    )
}

export default Two
