import React from 'react'
import Layout from '../components/Layout'
import galleries from '../constants/galleries'

const gallery = () => {
    return (
        <Layout>

            <div className="contact-board">
                <h2>OUR GALLERY</h2>
            </div>

           <div className="five-center">
            {galleries.map((data)=>{
                    const {id, icon} = data
                    return(
                        <div className="gallery-image" key={id}>
                            {icon}
                        </div>
                    )
                })}
           </div>
        </Layout>
    )
}

export default gallery
