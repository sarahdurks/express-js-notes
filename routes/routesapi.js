const router = require("express").Router();
let { notes } = require("../db/db.json");
const uuid = require("uuid");
const path = require("path");
const fs = require("fs");
const { validateNoteType, addNewNote } = require("../library/validate");

// GET
// Get notes
router.get("/notes", (req, res) => {
  console.log(notes);
  res.json(notes);
});

// POST
// Add new note with uuid 
router.post("/notes", (req, res) => {
  const newNote = {
    id: uuid.v4(),
    title: req.body.title,
    text: req.body.text
  } // Checks if blank 
  if(!validateNoteType(newNote)) {
    // Safeguard error
    // Don't think this should happen because of the show/hide save button logic
    return res.status(400).send("Add a title and body content to create your note!");
  } else { // add note
    addNewNote(newNote, notes);
    res.json(notes);
  }
});

// DELETE
// Route to delete note by id
router.delete("/notes/:id", (req, res) => {
  const exists = notes.some(notes => notes.id === req.params.id);
  if(exists) {
    notes = notes.filter(note => note.id !== req.params.id);
    fs.writeFileSync(path.join(__dirname, "../db/db.json"), JSON.stringify({
      notes
    }, null, 2));
    res.json(notes);
  } else { // user side don't believe this would ever show if it requres the visual unless something breaks
    res.status(400).send("No matching note found")
  }
});
module.exports = router;