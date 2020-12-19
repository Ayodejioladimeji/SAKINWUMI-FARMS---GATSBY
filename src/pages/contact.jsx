import React from 'react'
import Layout from '../components/Layout'
// import SEO from "../components/SEO"


const contact = () => {
    return (
        <Layout>
            <p className="contact-header">We are available 24/7 by fax, e-mail or by phone. You can also use our
                quick contact form to ask a question about our products.
            </p>
            <div className="contact-page">
                {/* <div className="contact-image"> */}
                    <img src="https://ld-wt73.template-help.com/wt_prod-22316/images/image-01-687x437.png" alt="contact-img" className="contact-image"/>
                {/* </div> */}

                <div className="contact-form">
                    <h3>Reach Out to Us Today</h3>
                    <form method="POST">
                        <div className="form-group">
                            <input type="text" name="name" placeholder="name" className="form-control" required/>
                            <input type="email" name="email" placeholder="email" className="form-control" required/>
                            <textarea name="message" rows="5" placeholder="message" className="form-control" required/>
                        </div>
                        <button type="submit" className="submit-btn btn">CONTACT US</button>
                    </form>
                </div>
            </div>
            
        </Layout>
    )
}

export default contact