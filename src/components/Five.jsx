import React from 'react'
import gallery from '../constants/gallery'
import {Link} from 'gatsby'

const Five = () => {
    return (
        <div className="five">
            <div className="five-header" data-aos="fade-up">
                <h3>WHAT WE OFFER</h3>
                <h1>OUR GALLERY</h1>
                <div className="underline"></div>
            </div>

            <div className="five-center">
            {gallery.map((data)=>{
                       const {id, icon} = data
                        return(
                            <div className="gallery-image" key={id} data-aos="zoom-out" data-aos-duration="500">
                                {icon}
                            </div>
                        )
                   })}
            </div>
            <Link to="/gallery">
                <button data-aos="fade-right">View Gallery</button>
            </Link>
        </div>
    )
}

export default Five
