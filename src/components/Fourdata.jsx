import React, {useState, useEffect} from "react"
// import { FaCheckCircle } from "react-icons/fa"
import { Link } from "gatsby"
import gear from '../assets/roller.gif'


const url = 'https://api.mocki.io/v1/19cb7601'

const Fourdata = () => {
  const [loading, setLoading] = useState(true)
  const [value, setValue] = useState(0);
  const [jobs, setJobs] = useState([]);

  const fetchJobs = async ()=>{
    const response = await fetch(url)
    const newJobs = await response.json()
    setJobs(newJobs)
    setLoading(false)
    console.log(newJobs)
  }

  useEffect(() => {
    fetchJobs()
    console.log("data fetched")
  }, [])

  if(loading){
    return(
      <section className="loading">
        <h1>SAKINWUMI FARMS</h1>
        <h3>Biography Loading ...</h3>
        <img src={gear} alt="gear"/>
        <p>Please check your internet connection</p>
      </section>
    )
  }


    const {duties} = jobs[value]
    return (
      <section className="jobs">
        <h3>FOUNDED IN 2018</h3>
        <h1>OUR FARM</h1>
        <h2>WHO WE ARE</h2>

        <div className="jobs-center">
  
          <div className="btn-container">
            {jobs.map((item, index)=>{
              return(
                <button onClick={()=>setValue(index)} className={`job-btn ${index === value && 'active-btn'}`}>{item.company}</button>
              )        
            })}
          </div>
  
          {/* THE SECTION OF THE JOB INFORMATION */}
          <article className="job-info">  
            {duties.map((duty, index)=>{
              return(
                <div key={index} className="job-desc">
                  <p>{duty}</p>
                </div>
              )
            })}
            <Link to="/">
              <button className="btn-info">See more</button>
            </Link>
          </article>
        </div>
      </section>
    )
}

export default Fourdata
