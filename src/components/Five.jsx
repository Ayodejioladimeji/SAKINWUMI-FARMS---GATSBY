import React from 'react'
import gallery from '../constants/gallery'
import {Link} from 'gatsby'

const Five = () => {
    return (
        <div className="five">
            <div className="five-header">
                <h3 data-aos="fade-down">WHAT WE OFFER</h3>
                <h1 data-aos="fade-right">OUR GALLERY</h1>
                <div data-aos="fade-up" className="underline"></div>
            </div>

            <div className="five-center">
            {gallery.map((data)=>{
                       const {id, icon} = data
                        return(
                            <div className="gallery-image" key={id} data-aos="zoom-in">
                                {icon}
                            </div>
                        )
                   })}
            </div>
            <Link to="/gallery">
                <button>View Gallery</button>
            </Link>
        </div>
    )
}

export default Five
