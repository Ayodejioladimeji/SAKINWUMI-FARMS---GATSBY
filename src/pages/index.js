import React from "react"
import Approach from "../components/Approach"
import Counter from "../components/Counter"
import Five from "../components/Five"
import Four from "../components/Four"
import Hero from "../components/Hero"
import Layout from '../components/Layout'
// import One from "../components/One"
import Team from "../components/Team"
import Testimonials from "../components/Testimonials"
import Three from "../components/Three"
import Two from "../components/Two"
import History from "../components/History"



export default ()=> {

  return (
    <Layout>
      <Hero/>
      {/* <One/> */}
      <Two/>
      <Three/>
      <Four/>
      <Five/>
      <Approach/>
      <Counter/>
      <Testimonials/>
      <Team/>
      <History/>
    </Layout> 
  )
}
