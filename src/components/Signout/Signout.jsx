import React from 'react'
import { useHistory } from "react-router-dom";
import './Signout.css';
import {auth} from "../../firebase";

const Signout = () => {
    let history = useHistory();

    const handleSignout = () => {
        auth.signOut().then(history.push("/"))
    }


    return (
        <div id="signout">
            <button  id="signout_btn" onClick={handleSignout}>SO</button>
        </div>
    )
}

export default Signout
