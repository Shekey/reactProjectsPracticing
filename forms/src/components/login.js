import React, { Component } from 'react';
import { firebase, googleAuth } from '../firebase'

class Login extends Component {
  state = { 
    status: false
   }

   signIn = () => {
    firebase.auth().signInWithPopup(googleAuth);
   }

   signOut = () => {
    firebase.auth().signOut();
   }

  constructor(props) {
    super(props);
    
    firebase.auth().onAuthStateChanged( (user) => {
      this.setState({
        status: user ? true: false
      })
    })
  }
  render() {
    return (
      <div>
        { this.state.status ?
          <button onClick={this.signOut}>Log Out</button>
        :
          <button onClick={this.signIn}>Log In</button>
        }
      </div>
     );
  }
}
 
export default Login;