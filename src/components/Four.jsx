import React from 'react'
import Fourdata from './Fourdata'
import sheep from '../assets/sheep.jpg'

const Four = () => {
    return (
        <div className="four">
            <div className="four-center">
                <div className="four-left">
                    <div className="image-container">
                        <img src={sheep} alt="sheep"/>
                    </div>
                </div>

                <div className="four-right">
                    <Fourdata/>
                </div>
            </div>
        </div>
    )
}

export default Four
