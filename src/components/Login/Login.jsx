import React, {useContext} from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import {auth} from "../../firebase";
import {UserContext} from "../../context/UserProvider";
import styles from './Login.module.scss'
import { useHistory } from "react-router-dom";
import firebase from 'firebase/app';
import 'firebase/firestore';
import loginImg from "../../assets/img/WFH_svg/wfh_1.svg";
import loginWave from "../../assets/img/WFH_svg/wave.svg";

const Login = () => {
    const userContext = useContext(UserContext);
    let history = useHistory();
    let provider = new firebase.auth.GoogleAuthProvider();

    const handleSubmit = (e) => {
        e.preventDefault();
        
        const email = e.target[0].value;
        const password = e.target[1].value;
        
        auth.signInWithEmailAndPassword(email,password)
            .then(response => { let userId = firebase.auth().currentUser.uid;
                                userContext.setUserId(userId);
                                history.push("/home");})
            .catch(e => {
             alert("Your email or password don't match!")
        });
        
    }

    const googleLogin = () => {
        provider.addScope('https://www.googleapis.com/auth/contacts.readonly');

        firebase.auth().signInWithPopup(provider)
        .then((response) => {
            history.push("/home")

          }).catch((error) => {
            console.log(error.message)
          });
    }

    return (
        <section className={styles.container}>
            <img className={styles.login_img} src={loginImg} alt="girl with a laptop"></img>
            <h1>Notesy</h1>
            <form onSubmit={handleSubmit}>
                <input placeholder="email..." required></input>
                <input type="password" placeholder="password..." required></input>
                <button type="submit">Login</button>
                <button onClick={googleLogin}>Google login</button>
                <p>Don't have an account? 
                    <Route><Link to="/register"><span>Register here</span></Link></Route>
                </p>
            </form>
            <img className={styles.wave_img} src={loginWave} alt="wave background"></img>
        </section>
    )
}

export default Login
