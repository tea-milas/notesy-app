import React, { useState, useEffect } from 'react'
import styles from "./Notes.module.scss"
import useNotes from '../../hooks/useNotes';

const Notes = () => {

    const {getNotes, submitNote, deleteNote, title, setTitle, description, setDescription, notes, setNotes} = useNotes();
    
    const getMark = (day) => {
        if (day === 1) {
            return 'st';
        } else if (day === 2) {
            return 'nd';
        } else if (day === 3) {
            return 'rd';
        } else if (day) {
            return 'th';
        } else {
            return;
        }
    }
    
    return (
        <>
            <h3 className={styles.notes_title}>Write down things you don't want to forget: </h3>
            <form onSubmit={submitNote} className={styles.new_note_form}>
                <label>Title</label>
                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required/>
                <label>Description</label>
                <input type="text" value={description} onChange={(e) => setDescription(e.target.value)}required/>
                <button type="submit">Add</button>
            </form>
            <section className={styles.notes}>
                {notes && notes.map(note=> <article className={styles.notes_note} key={note.noteID}>
                                                <h3>{note.title}</h3>
                                                <button onClick={() => deleteNote(note.noteID)}>X</button>
                                                <p>{note.description}</p>
                                                <h4 className={styles.timestamp}>{note.day}{getMark(note.day)} {note.month}</h4>
                                            </article>)}
            </section>  
        </>
    )
}

export default Notes