import React from 'react'
import team from '../constants/team'


const Team = () => {
    return (
        <div className="team">
           <div className="team-top">
               <div className="top-left">
                   <h2>TEAM MEMBER</h2>
                   <h1>Meet Our Great Team</h1>
               </div>

               <div className="top-right">
                   <p>Our team mission is to promote agricultural practices designed to provide abundantly healthy food, fiber and other services for all communities.</p>
               </div>
           </div>

           <div className="team-center">
               {team.map((data)=>{
                   const {id, name, icon, post, text} = data

                   return(
                    <div className="div-team" key={id}>
                        {icon}
                        <h2>{name}</h2>

                        <div className="team-hover">
                                <div className="hover-contain">
                                    <h2>{post}</h2>
                                    <h3>{text}</h3>
                                </div>
                            </div>
                    </div>
                   )
               })}
           </div>
        </div>
    )
}

export default Team
