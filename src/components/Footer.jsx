import React from "react"
// import SocialLinks from "../constants/socialLinks"
const Footer = () => {
  return (
    <footer className="footer">

        <div className="footer-center">
            <div className="service footer-one">
                This is the footer one
            </div>

            <div className="service footer-two">
                This is the footer two
            </div>

            <div className="service footer-three">
                This is the footer three
            </div>
        </div>

        <div className="footer-bottom">
            {/* <SocialLinks styleClass="footer-links"></SocialLinks> */}
            <h4>
                copyright &copy;{new Date().getFullYear()}
                <span> SAKINWUMI FARMS </span>
            </h4>
            <small className="layo">Developed By @LayoBright &#128526;</small>
        </div>
    </footer>
  )
}

export default Footer
