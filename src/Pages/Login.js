import React, { Component } from "react";
import firebase from "firebase";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import { AuthContext } from "../Component/context";
import Signup from './Signup'

const firebaseConfig={
 
  apiKey: "AIzaSyA_TM8ztYvcw969-2C63DvZXePe97CYA_A",
  authDomain: "intern-demo-594be.firebaseapp.com",
  projectId: "intern-demo-594be",
  storageBucket: "intern-demo-594be.appspot.com",
  messagingSenderId: "722759850313",
  appId: "1:722759850313:web:da09e9b113d9190da8a298",
  measurementId: "G-JCMJ30Z10B"
    
}

firebase.initializeApp(firebaseConfig);
firebase.analytics();

class Login extends Component {
  static contextType = AuthContext;
  state = { isSignedIn: false };
  uiConfig = {
    signInFlow: "popup",
    signInOptions: [

      firebase.auth.PhoneAuthProvider.PROVIDER_ID,
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      
      
      
    ],
    callbacks: {
      signInSuccess: () => false,
    },
  };

  componentDidMount = () => {
    const auth = this.context;

    firebase.auth().onAuthStateChanged((user) => {
      let isSignedIn = !!user;
      if (isSignedIn) {
        auth.login();
      } else {
        auth.logout();
      }
      console.log("user", user);
      this.setState({ isSignedIn: isSignedIn });
    });
  };

  render() {
    return (
        <React.Fragment>
        <div className="linecss">
        </div>
        <div className="loginform"><h1>SignIn</h1></div>
        
      <div className="App">
        {!this.state.isSignedIn && (
          <StyledFirebaseAuth
            uiConfig={this.uiConfig}
            firebaseAuth={firebase.auth()}
          />
        )}
      </div>
     
      <div>
      </div>
      </React.Fragment>
    );
  }
}

export default Login;
