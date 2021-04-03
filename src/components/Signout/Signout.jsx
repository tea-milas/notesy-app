import React from 'react'
import { useHistory } from "react-router-dom";
import styles from './Signout.module.scss';
import {auth} from "../../firebase";

const Signout = () => {
    let history = useHistory();

    const handleSignout = () => {
        auth.signOut().then(history.push("/"))
    }


    return (
        <div className={styles.signout}>
            <button  className={styles.signout_btn} onClick={handleSignout}>SO</button>
        </div>
    )
}

export default Signout
