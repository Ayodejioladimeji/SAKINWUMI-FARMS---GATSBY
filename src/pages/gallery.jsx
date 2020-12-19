import React from 'react'
import Layout from '../components/Layout'
import galleries from '../constants/galleries'

const gallery = () => {
    return (
        <Layout>
            <div className="gallery-header" style={{
                color:'red',
                fontFamily:'monospace',
                fontSize:'35px',
                textAlign:'center',
                padding:"40px",
                fontWeight:"bold"
            }}>
                Gallery
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
