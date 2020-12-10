import React from "react"
import Five from "../components/Five"
import Four from "../components/Four"
import Hero from "../components/Hero"
import Layout from '../components/Layout'
import One from "../components/one"
import Three from "../components/Three"
import Two from "../components/Two"


export default ()=> {
  return (
    <Layout>
      <Hero/>
      <One/>
      <Two/>
      <Three/>
      <Four/>
      <Five/>
    </Layout> 
  )
}
