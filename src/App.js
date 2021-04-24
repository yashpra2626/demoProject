import React ,  { useState, useCallback, useEffect} from 'react';
import './App.css'
import Header from './Component/Header';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import firebase from "firebase";
import { AuthContext } from "./Component/context";
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css.map'
import '../node_modules/bootstrap/dist/css/bootstrap-reboot.min.css'
import '../node_modules/bootstrap/dist/css/bootstrap-reboot.min.css.map'
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
  useHistory
} from "react-router-dom";
import Demo from './Pages/demo'
import Grade from './Pages/Grade'
import Payment from './Pages/Payment'


const  App=()=> {

  const history = useHistory();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userEmail, setUserEmail] = useState(null);
  const [userName,setUserName]=useState(null);
  const [userId,setUserId] = useState(null);
  const authAdminInfo=['w8NNBx8vHoSOzXa7eL9tHgQen8p1']

   const selectButton=[
    {
      btn: "13",
      grades: "14TH-12TH",
      timing:"5.00pm-8.00pm",
      instructorName:"YASH KUMAR PRAJAPATI",

    },
   ]



  let routes;

   const login = useCallback(() => {
    setIsLoggedIn(true);
    
  });

  const logout = useCallback(() => {
    setIsLoggedIn(false);
  });

  


useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (!!user) {
        console.log(user);
        setUserEmail(user.email);
        setUserName(user.displayName);
        setUserId(user.uid);
        login();
     }
      else {
        
        logout();
      }
    });
  }, []);


  useEffect(() => {
    if (!!firebase.auth().currentUser) {
     
      login();

    } else {
      logout();
    }
  }, [login, isLoggedIn]);


   if(isLoggedIn){
     routes=(
      <Switch>
      <Route path="/" exact>
       <Home/>
     </Route>
     <Route path="/signup" exact >
        <Signup/>
      </Route>
     <Route path="/payment" exact>
     <Payment/>
   </Route>
     <Route path="/demovideo" exact>
     <Demo/>
   </Route>
   <Route path="/grades" exact>
   <Grade selectButton={selectButton[0]}/>
 </Route>
     <Redirect to="/signup" />
    </Switch>
     
     )
      
   }else{
    routes = (
      <Switch>
        <Route path="/login" exact >
          <Login/>
        </Route>
        <Route path="/signup" exact >
        <Signup/>
      </Route>
        <Route path="/payment" exact>
        <Payment/>
      </Route>
        <Route path="/demovideo" exact>
        <Demo/>
      </Route>
      <Route path="/grades" exact>
      <Grade selectButton={selectButton[0]}/>
    </Route>
        <Route path="/" exact>
        <Home/>
      </Route>
      <Redirect to="/" />
      </Switch>
    )
   }
   
  
  return (
    
    <AuthContext.Provider
      value={{
        isLoggedIn: isLoggedIn,
        userid:userId,
        email: userEmail,
        userName: userName,
        login: login,
        logout: logout,
      }}
    >
     <Router>
     <Header/>
    
    {routes}
   </Router>
   </AuthContext.Provider>
   
  );
}

export default App;
