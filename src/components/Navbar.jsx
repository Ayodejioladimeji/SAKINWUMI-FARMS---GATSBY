import React from 'react'
import PageLinks from '../constants/links'
import chicken from '../assets/chicken.svg'
import { FaList} from "react-icons/fa"

const Navbar = ({toggleSidebar}) => {
    return (
        <nav className="navbar">
             <div className="nav-center">
                <div className="nav-header">
                    <img src={chicken} alt="chicken"/>
                    <div>
                        <h2>SAKINWUMI</h2>
                        <h3>FARMS</h3>
                    </div>
                </div>

                 {/* THE SECTION OF THE TOGGLE BUTTON */}
                <button type="button" className="toggle-btn" onClick={toggleSidebar}>
                    <FaList/>
                </button>

            
                <PageLinks styleClass="nav-links"/>

            </div>
        </nav>
    )
}

export default Navbar
