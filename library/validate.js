const path = require('path');
const fs = require('fs');

// Some overlap with line 92 in assets/js/index.js
const validateNoteType = newNote => {
    // If either of the title or the body are not a string, not valid
    // Better way to combine these? But can try to consolidate to index.js
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