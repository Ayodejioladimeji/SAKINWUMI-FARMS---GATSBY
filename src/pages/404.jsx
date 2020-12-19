import React from 'react'
import Layout from '../components/Layout'
import {Link} from 'gatsby'
import skthree from '../assets/sk-three.jpg'

const error = () => {
    return (
        <Layout>
            {/* <SEO title="Dead End" /> */}
            <main className="error-page">
                <div className="error-container">
                    <div className="error-image">
                        <img src={skthree} alt="contact-img"/>
                    </div>
                    <h1>Thank you for patronizing us</h1>
                    <h2>Kindly go back go and keep Exploring</h2>
                    
                    <Link to="/" className="btn">
                        back home
                    </Link>
                </div>
            </main>
    </Layout>
    )
}

export default error
