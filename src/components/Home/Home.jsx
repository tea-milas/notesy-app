import React, {useContext, useState, useEffect } from 'react'
import {UserContext} from "../../context/UserProvider";
import Navigation from '../Navigation/Navigation';
import styles from './Home.module.scss'
import { firestore } from '../../firebase';


const Home = () => {
    const userContext = useContext(UserContext);
    const [notes,setNotes] = useState("");
    const [title,setTitle] = useState("");
    const [description,setDescription] = useState("");
    const [username,setUsername] = useState("")

    const getUser = () => {
        //firestore.collection("users").get().then(response => console.log("data",response.data().username))
        console.log("in home",  userContext.userId)
        firestore.collection("users").doc(userContext.userId).update({birthday:"12 Aug"})
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        
        let title = e.target[0].value;
        let description = e.target[1].value;
        
        firestore.collection("notes").doc()
                .set({title: title, description: description})
                
        
        firestore.collection("notes").get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                firestore.collection("notes").doc(doc.id).update({noteID: doc.id})
            });
        });
        
        getNotes();
        getUser();
        setTitle("")
        setDescription("")
    }

    const getNotes = () => {
        firestore.collection("notes").get().then(notes =>{
            setNotes(notes.docs.map(document => document.data()));
        })
    }

    const deleteNote = (id) => {
        firestore.collection("notes").doc(id).delete().then(()=> {
            setNotes(notes.filter(note => note.id !== id));
            getNotes();
            console.log("Document successfully deleted!")
        })
                .catch((error) => {console.error("Error removing document: ", error);
            }
        )
    }

    useEffect(() => {
        getNotes();
    }, [])

    return (
        <div className={styles.home}>
            <Navigation />
            <main>
                <div className={styles.blurred}>
                    <h2>Hi {userContext.user}!</h2>
                    <h3>Write down things you don't want to forget: </h3>
                    <form onSubmit={handleSubmit}>
                        <label>Title</label>
                        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required/>
                        <label>Description</label>
                        <input type="text" value={description} onChange={(e) => setDescription(e.target.value)}required/>
                        <button type="submit">Add</button>
                    </form>
                    <section className={styles.notes}>
                        {console.log(notes)}
                        {notes && notes.map(note=> <article className={styles.notes_note} key={note.noteID}>
                                                        <h3>{note.title}</h3>
                                                        <button onClick={()=>deleteNote(note.noteID)}>X</button>
                                                        <p>{note.description}</p>
                                                    </article>)}
                    </section>
                </div>
            </main>
        </div>
    )
}

export default Home
