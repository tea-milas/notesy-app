import React, {createContext, useState} from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from '../components/Home/Home';
import Login from '../components/Login/Login.jsx';
import Register from '../components/Register/Register.jsx';


export const UserContext = createContext({});

const UserProvider = () => {
    const [user,setUser] = useState("");
    const [userId,setUserId] = useState("");

    const data = {
        user: user,
        setUser: setUser,
        userId: userId,
        setUserId: setUserId
    }
 
    return (
        <>
            <UserContext.Provider value={data}>
                <Router>
                    <Switch>
                        <Route exact path="/">
                            <Login />
                        </Route>
                        <Route path="/register">
                            <Register/>
                        </Route>
                        <Route path="/home">
                            <Home />
                        </Route>
                    </Switch>
                </Router>
            </UserContext.Provider>
        </>
    )
}

export default UserProvider
