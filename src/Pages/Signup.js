import React,{useState} from 'react'
import './Login.css'
import { useHistory } from "react-router-dom";
import { AuthContext } from "../Component/context";

const Signup=() =>{

    const history = useHistory();
    
    const [userForm, setUserForm]= useState({

        firstName:"",
        lastName: "",
        gender:"",
        dob:"",
        email:"",
        address:"",
        city:"",
        pincode:"",
    })

    const [userFirstName , setUserFirstName] = useState()
    const [userLastName , setUserLastName] = useState()
    const [userGender , setUserGender] = useState()
    const [userDOB , setUserDOB] = useState()
    const [userEmail, setUserEmail] = useState()
    const [userAddress , setUserAddress] = useState()
    const [userCity, setUserCity] = useState()
    const [userPincode , setUserPincode] = useState()

    const firstNameHandler=(event)=>{
         setUserFirstName(event.target.value)
    }

    const lastNameHandler=(event)=>{
        setUserLastName(event.target.value)
    }

    const genderHandler=(event)=>{
        setUserGender(event.target.value)
    }

    const dobHandler=(event)=>{
        setUserDOB(event.target.value)
    }

    const emailHandler=(event)=>{
        setUserEmail(event.target.value)
    }

    const addressHandler=(event)=>{
        setUserAddress(event.target.value)
    }

    const cityHandler=(event)=>{
        setUserCity(event.target.value)
    }

    const pincodeHandler=(event)=>{
        setUserPincode(event.target.value)
    }

    const formSubmitHandler=(event)=>{
 
        

        setUserForm({
            firstName: userFirstName,
            lastName: userLastName,
            gender: userGender,
            dob:userDOB,
            email:  userEmail,
            address: userAddress,
            city:  userCity,
            pincode: userPincode,
        })

        alert("Profile updated Successfully..")

        console.log(`
               FirstName:${userFirstName}, 
               LastName:${userLastName}, 
               Gender: ${userGender},  
               DOB: ${userDOB},
               Email: ${userEmail},
               Address:${userAddress},
               City: ${userCity}, 
               PinCode: ${userPincode}`)
        
               history.push("/");

       
    }

    


    return (
         <div className="formcss">
         <h3 style={{marginLeft:"3rem", marginBottom:"3rem"}}>PROFILE FOR NEW USER</h3>
         <form className="form-group" onSubmit={formSubmitHandler}>
         
         <input onChange={firstNameHandler} className="inputcss" type="text" name="firstname" placeholder="First name"/>
        
         <input  onChange={lastNameHandler} type="text" name="lastname" placeholder="Last name"/><br/>
         
         <input onChange={genderHandler}   className="inputcss" type="text" name="gender" placeholder="Gender"/>
         
         <input  onChange={dobHandler} type="text" name="dateofbirth" placeholder="Date Of Birth"/><br/>
         
         <input onChange={emailHandler} className="inputcss1" type="email" name="email" placeholder="Email Address"/><br/>
         
         <input onChange={addressHandler}  className="inputcss1" type="text" name="address" placeholder="Address"/><br/>
         
         <input onChange={cityHandler} className="inputcss" type="text" name="city" placeholder="City"/>
         
         <input onChange={pincodeHandler} type="text" name="pincode" placeholder="Pincode"/><br/>

        <button style={{marginRight:"5rem" ,marginTop:"2rem", marginBottom:"2rem"}} type="submit" className="btn btn-success">Sign Up as a Student</button>
        <button  style={{marginRight:"8rem" ,marginTop:"2rem",marginBottom:"2rem"}} type="submit" className="btn btn-success">Sign Up as a Tutor</button>
         </form>
         <p style={{fontWeight:"bold",marginLeft:"2rem"}}>Already Have an Account. <a  href="/">Click Here to Skip..</a></p>
         </div>
    )
}

export default Signup
