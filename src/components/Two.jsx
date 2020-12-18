import React from 'react'
// import cock from '../assets/cock.jpg'
import {Link} from 'gatsby'

const Two = () => {
    return (
        <div className="two">
            <div className="two-cover">
               <div className="two-center">
                   <h1>CARE AT EVERY STAGE</h1>
                   <h3>Our poultry receives great attendance and care throughout every stage of its development due to advanced technologies.</h3>
                    <Link to="/about">
                        <button className="two-button">READ MORE</button>
                    </Link>
               </div>
            </div>
        </div>
    )
}

export default Two
