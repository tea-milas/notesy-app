import React, {useContext} from 'react'
import {UserContext} from "../../context/UserProvider";
import {auth, firestore} from "../../firebase"
import { useHistory } from "react-router-dom";
import styles from "./Register.module.scss"
import firebase from 'firebase/app';
import regImg from "../../assets/img/WFH_svg/wfh_2.svg";
import regWave from "../../assets/img/WFH_svg/wave.svg";

const Register = () => {
    let history = useHistory();
    const userContext = useContext(UserContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        const username = e.target[0].value;
        const email = e.target[1].value;
        const password = e.target[2].value;

        userContext.setUser(username)

        firestore.collection("users").doc().set({username: username, email: email});
        firestore.collection("users").get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                firestore.collection("users").doc(doc.id).update({userID: doc.id})
            });
        });
        
        auth.createUserWithEmailAndPassword(email,password)
            .then(response => { alert(username + ", you have succesfully registered!");
                                firebase.auth().currentUser.updateProfile({displayName:username})
                                history.push("/")})
            .catch(e => {
                alert(e.message)
            })
    }
   
    return (
        <div className={styles.container}>
            <img className={styles.register_img} src={regImg} alt="person with a phone"></img>
            <h1>Register</h1>
            <form className={styles.register} onSubmit={handleSubmit}>
                <input placeholder="username..."></input>
                <input placeholder="email..."></input>
                <input type="password" placeholder="password..."></input>
            <button type="submit">Register</button> 
            </form>
            <img className={styles.wave_img} src={regWave} alt="wave background"></img>
        </div>
       
    )
}

export default Register
