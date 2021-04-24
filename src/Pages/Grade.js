import React from 'react'
import './demo.css'
import instructor from '../assets/downlorrad.jpeg'

function Grade({selectButton}) {
    return (
      
        <div className="grades">
         
          <img src={instructor}></img> 
          <div className="grades1">
            Grades: {selectButton.grades}
            <br/>
            <p style={{marginLeft:"1rem"}}>{selectButton.timing}</p>
            <h3 style={{fontSize:"20px",marginLeft:"-2rem" , marginTop:"2rem"}}>{selectButton.instructorName}</h3>
            <p>B-TECH GFTI</p>
            <p style={{marginLeft:"1rem"}}>Student</p>
          </div>
    
          <button onClick={()=>alert("Send Request Successfully.")} style={{marginTop:"4rem", marginLeft:"4rem"}} className="btn btn-success">SEND REQUEST</button>
         <a href="/demovideo"><button style={{marginTop:"4rem", marginLeft:"6rem"}} className="btn btn-success">DEMO VIDEO</button></a>
        </div>
    )
}

export default Grade
