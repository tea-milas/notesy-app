import React, {useContext} from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import {auth, firestore} from "../../firebase";
import {UserContext} from "../../context/UserProvider";
import styles from './Login.module.scss'
import { useHistory } from "react-router-dom";
import firebase from 'firebase/app';
import 'firebase/firestore';


const Login = () => {
    const userContext = useContext(UserContext)
    let history = useHistory();
    let provider = new firebase.auth.GoogleAuthProvider();

    const handleSubmit = (e) => {
        e.preventDefault();
        
        const email = e.target[0].value;
        const password = e.target[1].value;
        
        auth.signInWithEmailAndPassword(email,password)
            .then(response => { let userId = firebase.auth().currentUser.uid;
                                userContext.setUserId(userId);
                                console.log("userContext.userId",userContext.userId)
                                console.log("email",email)
                                history.push("/home");})
            .catch(e => {
             alert("Your email or password don't match!")
        })
        
    }

    const googleLogin = () => {
        provider.addScope('https://www.googleapis.com/auth/contacts.readonly');

        firebase.auth().signInWithPopup(provider)
        .then((result) => {
            const credential = result.credential;
            const token = credential.accessToken;
            const user = result.user;
            history.push("/home")

          }).catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            const email = error.email;
            const credential = error.credential; 
          });
    }

    return (
        <div className={styles.container}>
            <form onSubmit={handleSubmit}>
                <h1>Notesy</h1>
                <input placeholder="email..." required></input>
                <input type="password" placeholder="password..." required></input>
                <button type="submit">Login</button>
                <button onClick={googleLogin}>Google login</button>
                <p>Don't have an account? <Route><Link to="/register"><span>Register here</span></Link></Route></p>
            </form>
        </div>
    )
}

export default Login
