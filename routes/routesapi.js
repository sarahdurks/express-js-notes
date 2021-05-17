const router = require('express').Router();
const uuid = require('uuid');
const path = require('path');
const fs = require ('fs');

let {notes}= require('../db/db.json');
const { validateNoteType, addNewNote } = require ('../library/notes');

router.get('/notes', (req, res) => {
   res.json(notes);
});

router.post('/notes', (req, res) => {
    const newNote = {
        id: uuid.v4(),
        title: req.body.title,
        text: req.body.text
    }
    if (!validateNoteType(newNote)) {
        return res.status(400).send('Add text, title, and body content to your note!')
    }
    else { addNewNote(newnote, notes);
    
    res.json(notes);
    }
 });
 
 module.exports = router;

 