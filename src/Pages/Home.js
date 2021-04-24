import React,{useState} from 'react'
import {Link} from 'react-router-dom'
import './Home.css'
import Grade from '../Pages/Grade'

const  Home=() =>{

  


  const selectButton=[
    {
      btn: "13",
      grades: "14TH-12TH",
      timing:"5.00pm-8.00pm",
      instructorName:"YASH KUMAR PRAJAPATI",

    },
    {
      btn: "12",
      grades: "13TH-11TH",
      timing:"5.00pm-8.00pm",
      instructorName:"INSTRUCTOR NAME 1",
      
    },
    {
      btn: "11",
      grades: "12TH-10TH",
      timing:"5.00pm-8.00pm",
      instructorName:"INSTRUCTOR NAME 2",
      
    },
    {
      btn: "10",
      grades: "11TH-9TH",
      timing:"5.00pm-8.00pm",
      instructorName:"INSTRUCTOR NAME #",
      
    },
    {
      btn: "9",
      grades: "10TH-8TH",
      timing:"5.00pm-8.00pm",
      instructorName:"TIRUPATI RAMAN MISHRA",
      
    },
    {
      btn: "8",
      grades: "9TH-7TH",
      timing:"5.00pm-8.00pm",
      instructorName:"YASH KUMAR PRAJAPATI",
      
    },
    {
      btn: "7",
      grades: "8TH-",
      timing:"5.00pm-8.00pm",
      instructorName:"VIDYAYAN LEARNING",
      
    },
    {
      btn: "6",
      grades: "8TH-",
      timing:"5.00pm-8.00pm",
      instructorName:"YASH KUMAR PRAJAPATI",
      
    },
    {
      btn: "1-5",
      grades: "1-5TH",
      timing:"5.00pm-8.00pm",
      instructorName:"VIDYAYAN LEARNING CLASSES",
      
    },
    {
      btn: "LKG-UKG",
      grades: "LKG-UKG",
      timing:"5.00pm-8.00pm",
      instructorName:"YASH KUMAR PRAJAPATI",
      
    }
  ]

  const [userDefault, setUserDefault] = useState(selectButton[0]);
 
  

  const setUser0=()=>{
     setUserDefault(selectButton[0])
  }
  const setUser1=()=>{
    setUserDefault(selectButton[1])
  }
  const setUser2=()=>{
    setUserDefault(selectButton[2])
  }
  const setUser3=()=>{
    setUserDefault(selectButton[3])
  }
  const setUser4=()=>{
    setUserDefault(selectButton[4])
  }
  const setUser5=()=>{
    setUserDefault(selectButton[5])
  }
  const setUser6=()=>{
    setUserDefault(selectButton[6])
  }
  const setUser7=()=>{
    setUserDefault(selectButton[7])
  }
  const setUser8=()=>{
    setUserDefault(selectButton[8])
  }
  const setUser9=()=>{
    setUserDefault(selectButton[9])
  }

 

    return (
      <React.Fragment>
        <div className="linecss">
        </div>
        <div className="homepage">
        <div className="ellipse">
        <h3>INTRODUCING</h3>
        <p>A complete platform for online and offline tutoring which is a network of knowledge where students can learn from the desired teacher as well as it enables teachers to teach the students.  </p>
        </div>
        <div className="fontforhead">
         Now your tutor is just one step away
        </div>
        <div className="font2">
          lets gain together
        </div>
        <input className="inputdiv" type="text" placeholder=" SEARCH YOUR TUTOR"/>
        <button type="submit" className="btndiv" onClick={()=>alert("Search your tutor")}>FIND</button>
        <h1 className="input1">OR</h1>
        <div className="input2"><button type="submit" onClick={()=>alert("find me a tutor")}>FIND ME A TUTOR</button></div>
        <div className="download1">Find Your Tutor Today ! Download App Now</div>
        <div className="download2">Get Link to download the App</div>
        <a href="https://play.google.com/"><div className="image1"></div></a>
        <a href="https://www.apple.com/in/app-store/"><div className="image2"></div></a>
        <div>
        <input value="+91" className="link1">
        </input>
         <input type="number" placeholder="Enter your mobile number" className="link2"/>
        <button type="submit" onClick={()=>alert("Link: https://play.google.com/")}  className="link-btn">GET LINK</button>
        </div>
        <div className="front-view">
        </div>
        </div>
        <div className="subhome">
        <div className="subhome1">Keep Learning along with </div>
        <div className="subhome2">free Coding Classes.</div>
        <div className="subhome3">
        <h3 className="sub">Coding Classes for age </h3>
        <h3 className='sub1'>6-12</h3>
        <div className="sub2"></div>
        </div>
        </div>
        <div className="sub-home">
        <div className="sub-home1"> START YOUR LEARNING WITH VIDYAYAN </div>
        <button  onClick={()=>alert("Learn live")} type="submit" className="btnsubhome1">  LEARN LIVE</button>
        <button onClick={()=>alert("Demo Classes")}   type="submit" className="btnsubhome2">  DEMO CLASSES</button>
        <button  onClick={()=>alert("Join Course")}   type="submit" className="btnsubhome3"> JOIN COURSE</button>
        <h2 className="selectgrade">Select Grade:</h2>
        <div className="selectgrade1">
        <button onClick={setUser0} style={{marginRight:"2rem"}}  className="btn btn-warning btn-lg">13TH</button>
        <button onClick={setUser1} style={{marginRight:"2rem"}} className="btn btn-warning btn-lg">12TH</button>
        <button onClick={setUser2} style={{marginRight:"2rem"}} className="btn btn-warning btn-lg">11TH</button>
        <button onClick={setUser3} style={{marginRight:"2rem"}} className="btn btn-warning btn-lg">10TH</button>
        <button onClick={setUser4} style={{marginRight:"2rem"}} className="btn btn-warning btn-lg">9TH</button>
        <button onClick={setUser5} style={{marginRight:"2rem"}} className="btn btn-warning btn-lg">8TH</button>
        <button onClick={setUser6} style={{marginRight:"2rem"}} className="btn btn-warning btn-lg">7TH</button>
        <button onClick={setUser7} style={{marginRight:"2rem"}} className="btn btn-warning btn-lg">6TH</button>
        <button onClick={setUser8} style={{marginRight:"2rem"}} className="btn btn-warning btn-lg">1-5 TH</button>
        <button onClick={setUser9} style={{marginRight:"2rem"}} className="btn btn-warning btn-lg">LKG-UKG</button>
        <a  className="btn btn-dark" style={{marginLeft:"58rem", marginTop:'1rem',marginBottom:"-11rem"}} href="/grades">VIEW ALL</a>
        <Grade  selectButton={userDefault}/>
        </div>
        
        
        </div>
        </React.Fragment>
    )
}

export default Home


