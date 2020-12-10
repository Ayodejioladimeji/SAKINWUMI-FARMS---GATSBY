import React, {useState, useEffect} from "react"
// import { FaCheckCircle } from "react-icons/fa"
import { Link } from "gatsby"
import gear from '../assets/gear.gif'


const url = 'https://api.mocki.io/v1/e5db4631'

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
      <section className="loading" style={{display:'none'}}>
        <h1>Work Experience Loading...</h1>
        <img src={gear} alt="gear"/>
      </section>
    )
  }


    const {company,duties} = jobs[value]
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
              <button className="btn-info">seeMore</button>
            </Link>
          </article>
        </div>
      </section>
    )
}

export default Fourdata
