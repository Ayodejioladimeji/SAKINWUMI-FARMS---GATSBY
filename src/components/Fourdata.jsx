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
    setTimeout(()=>{
      setJobs(newJobs)
      setLoading(false)
    }, 15000)
  }

  useEffect(() => {
    fetchJobs()
  }, [])

  if(loading){
    return(
      <section className="loading">
        <h1 data-aos="fade-left">SAKINWUMI FARMS</h1>
        <h3 data-aos="fade-up">Biography Loading ...</h3>
        <img src={gear} alt="gear"/>
        <p data-aos="fade-right">Please check your internet connection</p>
      </section>
    )
  }


    const {duties} = jobs[value]
    return (
      <section className="jobs">
        <h3 data-aos="fade-left">FOUNDED IN 2018</h3>
        <h1 data-aos="fade-up">OUR FARM</h1>
        <h2 data-aos="flip-down">WHO WE ARE</h2>

        <div className="jobs-center" data-aos="zoom-in">
  
          <div className="btn-container">
            {jobs.map((item, index)=>{
              return(
                <button onClick={()=>setValue(index)} className={`job-btn ${index === value && 'active-btn'}`} key={item.id}>{item.company}</button>
              )        
            })}
          </div>
  
          {/* THE SECTION OF THE JOB INFORMATION */}
          <div className="job-info">  
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
          </div>
        </div>
      </section>
    )
}

export default Fourdata
