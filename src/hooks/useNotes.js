import React, { useState, useEffect } from 'react'
import firebase from 'firebase/app';
import {auth, firestore} from "../firebase";

const useNotes = () => {
    const [title,setTitle] = useState("");
    const [description,setDescription] = useState("");
    const [notes,setNotes] = useState("");

    let currentUserId = firebase.auth().currentUser.uid;

    const getNotes = () => {
        firestore.collection("users").doc(currentUserId).collection("notes").get().then(notes =>{
            setNotes(notes.docs.map(document => document.data()));
        })
    }

    const submitNote = (e) => {
        e.preventDefault();
        
        let title = e.target[0].value;
        let description = e.target[1].value;
        
        let notesCollection = firestore.collection("users").doc(currentUserId).collection("notes");

        //create note
        notesCollection.doc().set({title: title, description: description})
        // after its created get the document and assign id 
        notesCollection.get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => { console.log("doc",doc.id)
                notesCollection.doc(doc.id).update({noteID: doc.id}).then(console.log("I ADDED THE ID",doc.id))
            });
        });

        getNotes();
        setTitle(" ")
        setDescription(" ")
    }

    const deleteNote = (id) => {
        firestore.collection("users").doc(currentUserId).collection("notes").doc(id).delete().then(()=> {
            setNotes(notes.filter(note => note.id !== id));
            getNotes();
            console.log("Document successfully deleted!")
        })
            .catch((error) => {console.error("Error removing document: ", error)})
    }

     useEffect(() => {
        getNotes();
     }, [])


    return ({getNotes, submitNote, deleteNote, title, setTitle, description, setDescription, notes, setNotes});
}

export default useNotes



