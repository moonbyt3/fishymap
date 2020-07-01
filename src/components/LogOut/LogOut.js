import React, {useContext} from 'react'
import { AuthContext } from "../../App";
import * as firebase from 'firebase'


const LogOut = () => {
    const Auth = useContext(AuthContext);
   
    const logOutUser = () => {
        firebase.auth().signOut().then(function() {
            // Sign-out successful.
            alert('log out success')
            Auth.setIsLoggedIn(false);
          }).catch(function(error) {
            // An error happened.
            alert('log out ERROR')
          });
    }
    return (
        <div>
            <button onClick={logOutUser}>Log Out</button>
        </div>
    )
}

export default LogOut
