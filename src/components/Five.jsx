import React from 'react'
import one from '../assets/hen.jpg'
import {Link} from 'gatsby'

const Five = () => {
    return (
        <div className="five">
            <div className="five-header">
                <h3>WHAT WE OFFER</h3>
                <h1>OUR GALLERY</h1>
            </div>

            <div className="five-center">
                <div class="gallery-image">
                    <img src={one} alt="gallery-images"/>
                </div>
                <div class="gallery-image">
                    <img src={one} alt="gallery-images"/>
                </div>
                <div class="gallery-image">
                    <img src={one} alt="gallery-images"/>
                </div>
                <div class="gallery-image">
                    <img src={one} alt="gallery-images"/>
                </div>
                <div class="gallery-image">
                    <img src={one} alt="gallery-images"/>
                </div>
                <div class="gallery-image">
                    <img src={one} alt="gallery-images"/>
                </div>
            </div>
            <Link to="/gallery">
                <button>View Gallery</button>
            </Link>
        </div>
    )
}

export default Five
