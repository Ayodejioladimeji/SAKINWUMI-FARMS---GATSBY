import React from 'react'
import history from '../constants/history'

const hist = "https://images.unsplash.com/photo-1520794673827-ab71def2c94d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80"

const History = () => {
    return (
        <div className="div-history" style={{backgroundImage:`url(${hist})`}}>
            <div className="history-heading">
                <h3>HOW WE ACHIEVED SUCCESS</h3>
                <h1>OUR HISTORY</h1>
            </div>

            <div className="history-center">
                {history.map((data)=>{
                const {id, icon, title, text} = data;
                return(
                    <div key={id} className="histories">
                        {icon}
                        <h2>{title}</h2>
                        <div className="underline"></div>
                        <p>{text}</p>

                        <div className="history-over">
                            {icon}
                            <h2>{title}</h2>
                            <div className="underline"></div>
                            <p>{text}</p>
                        </div>
                    </div>           
                )
                })}
            </div>
        </div>
    )
}

export default History