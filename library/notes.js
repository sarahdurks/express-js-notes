const path = require('path');
const fs = require('fs');


const validateNoteType = newNote => {
    if (!newNote.title || typeof newNote.title !== 'string') {
        return false;
    }
    if (!newNote.text || typeof newNote.text !== 'string') {
        return false;
    }
    return true;
    };

const addNewNote = (newNote, notes) => {
    notes.push(newNote);
    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify({notes}, null, 2)
    );
    return notes;
};


module.exports = { validateNoteType, addNewNote}