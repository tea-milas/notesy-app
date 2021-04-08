import React, { useState, useEffect } from 'react'
import Navigation from '../Navigation/Navigation';
import styles from './Home.module.scss'
import firebase from 'firebase/app';
import {auth, firestore} from "../../firebase";
import Footer from '../Footer/Footer';
import Notes from '../Notes/Notes';
import homeImg from "../../assets/img/WFH_svg/wfh_8.svg";


const Home = () => {
    const [isOpen,setIsOpen] = useState(false);
    const [width, setWidth] = useState(window.innerWidth);

    const handleWindowSizeChange = () => {
            setWidth(window.innerWidth);
        }

    useEffect(() => {
            window.addEventListener('resize', handleWindowSizeChange);
            return () => {
                window.removeEventListener('resize', handleWindowSizeChange);
            }
        }, []);

    let isMobile = (width <= 768);


    let currentUserName = firebase.auth().currentUser.displayName

    return (
        <div className={styles.home}>
            <Navigation />
            <main>
                <img className={styles.home_img} src={homeImg} alt="girl with a laptop"></img>
                <h2>Hi {currentUserName}!</h2>
                {isMobile ? <button className={styles.open_btn} onClick={()=>setIsOpen(!isOpen)}>{isOpen ? "Close notes" : "Add a new note"}</button>:
                            <Notes />}
                {isMobile && isOpen && <Notes />}
            </main>
            <Footer />
        </div>
    )
}

export default Home
