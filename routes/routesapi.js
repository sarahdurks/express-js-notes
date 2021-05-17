const router = require('express').Router();
const uuid = require('uuid');
const path = require('path');
const fs = require ('fs');

let {notes}= require('../data/db.json');
const { validateNoteType, addNewNote } = require ('../library/notes');

router.get('/notes', (req, res) => {
   // console.log(notes);
   res.json(notes);
});

router.post('/notes', (req, res) => {
    const newNote = {
        id: uuid.v4(),
        title: req.body.title,
        text: req.body.text
    }
    if (!validateNoteType(newNote)) {
        return res.status(400).send('Please enter both a text title and body content for a valid note')
    }
    else { addNewNote(newnote, notes);
    
    res.json(notes);
    }
 });
 
 