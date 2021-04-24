import React from 'react'
import myvideo from '../assets/introduction.mp4'
const Demo=() =>{
    return (
        <div>
            <h2 style={{textAlign:"center", marginTop:"3rem",marginBottom:"2rem"}}>DEMO VIDEO</h2>
            <video style={{marginLeft:"30rem"}} src={myvideo}  type="video/mp4" controls  width="390px"></video>
        </div>
    )
}

export default Demo;
