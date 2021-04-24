import React ,{useContext} from 'react'
import {useHistory} from 'react-router-dom'
import '../App.css'
import { NavLink, useLocation } from "react-router-dom";
import firebase from 'firebase'
import iconimg from '../assets/images (1).png'
import { AuthContext } from "../Component/context";

const Header=()=> {
  const auth = useContext(AuthContext);
  const history = useHistory();
  const signOutHandler = () => {
    
    firebase.auth().signOut();

    auth.logout();

   
    history.push("/")
  };

  let navlinks;

  if(auth.isLoggedIn){
    navlinks=(
      <ul class="navbar-nav me-auto mb-2 mb-lg-0" style={{fontWeight: 'bold'}}>
      <li class="nav-item" style={{marginLeft:"2rem", boxShadow: "6px 5px 1px rgba(0, 0, 0, 0.14)"}}>
        <a class="nav-link active" aria-current="page" href="/grades">Explore</a>
      </li>
      <li class="nav-item" style={{marginLeft:"2rem", boxShadow: "6px 5px 1px rgba(0, 0, 0, 0.14)"}}>
        <a class="nav-link active " aria-current="page" href="/">Courses</a>
      </li>
      <li class="nav-item" style={{marginLeft:"2rem", boxShadow: "6px 5px 1px rgba(0, 0, 0, 0.14)"}}>
        <a class="nav-link active" aria-current="page" href="/">Free Coding</a>
      </li>
      <li class="nav-item" style={{marginLeft:"2rem", boxShadow: "6px 5px 1px rgba(0, 0, 0, 0.14)"}}>
        <a class="nav-link active" aria-current="page" href="/">Tutorials</a>
      </li>
      <li class="nav-item" style={{marginLeft:"2rem", boxShadow: "6px 5px 1px rgba(0, 0, 0, 0.14)"}}>
        <a class="nav-link active" aria-current="page" href="/">Study Materials</a>
      </li>
      <li class="nav-item " style={{marginLeft:"2rem", boxShadow: "6px 5px 1px rgba(0, 0, 0, 0.14)"}}>
        <a class="nav-link active" aria-current="page" href="/">More</a>
      </li>
      <li class="nav-item" style={{marginLeft:"2rem",boxShadow: "6px 5px 1px rgba(0, 0, 0, 0.14)"}}>
      <button class="btn btn-danger" onClick={signOutHandler}  aria-current="page">Logout</button>
    </li>
    
    </ul>
    )
  }else{
     navlinks=(
      <ul class="navbar-nav me-auto mb-2 mb-lg-0" style={{fontWeight: 'bold'}}>
      <li class="nav-item" style={{marginLeft:"2rem", boxShadow: "6px 5px 1px rgba(0, 0, 0, 0.14)"}}>
        <a class="nav-link active" aria-current="page" href="/grades">Explore</a>
      </li>
      <li class="nav-item" style={{marginLeft:"2rem", boxShadow: "6px 5px 1px rgba(0, 0, 0, 0.14)"}}>
        <a class="nav-link active " aria-current="page" href="/">Courses</a>
      </li>
      <li class="nav-item" style={{marginLeft:"2rem", boxShadow: "6px 5px 1px rgba(0, 0, 0, 0.14)"}}>
        <a class="nav-link active" aria-current="page" href="/">Free Coding</a>
      </li>
      <li class="nav-item" style={{marginLeft:"2rem", boxShadow: "6px 5px 1px rgba(0, 0, 0, 0.14)"}}>
        <a class="nav-link active" aria-current="page" href="/">Tutorials</a>
      </li>
      <li class="nav-item" style={{marginLeft:"2rem", boxShadow: "6px 5px 1px rgba(0, 0, 0, 0.14)"}}>
        <a class="nav-link active" aria-current="page" href="/">Study Materials</a>
      </li>
      <li class="nav-item " style={{marginLeft:"2rem", boxShadow: "6px 5px 1px rgba(0, 0, 0, 0.14)"}}>
        <a class="nav-link active" aria-current="page" href="/">More</a>
      </li>
     
    <li class="nav-item" style={{marginLeft:"2rem",boxShadow: "6px 5px 1px rgba(0, 0, 0, 0.14)"}}>
    <a class="nav-link active " aria-current="page" href="/login">Login / SignUp</a>
  </li>
    </ul>
     )
  }





    return (
        <div>
        <nav class="navbar navbar-expand-lg navbar-light" style={{background : "#F8FD04"}}>
        <div class="container-fluid">
        <img src={iconimg}></img>
        <a class="navbar-brand" href="/" style={{marginLeft:"3rem", marginRight:"6rem",marginBottom: "1rem"}} >
          WELCOME!!! 
         </a>
          <div class="collapse navbar-collapse" id="navbarSupportedContent" style={{marginBottom: "1rem"}}>
           
           {navlinks}
          </div>
        </div>
      </nav>
      </div>
    
    )
}

export default Header
