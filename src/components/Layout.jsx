import React,{useState} from 'react'
import Footer from './Footer'
import Navbar from './Navbar'
import Sidebar from './Sidebar'


const Layout = ({children}) => {
    const [isOpen, setisOpen] = useState(false)
    const toggleSidebar = ()=>{
        setisOpen(!isOpen)
    }
    return (
        <>
          <Navbar toggleSidebar = {toggleSidebar}/>
          <Sidebar isOpen={isOpen} toggleSidebar = {toggleSidebar}/>
          {children}
          <Footer/> 
        </>
    )
}

export default Layout
