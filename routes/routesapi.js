const router = require("express").Router();
let { notes } = require("../db/db.json");
const uuid = require("uuid");
const path = require("path");
const fs = require("fs");
const { validateNoteType, addNewNote } = require("../library/notes");

router.get('/notes', (req, res) => {
  console.log(notes);
  res.json(notes);
});
// add new note with uuid
router.post('/notes', (req, res) => {
  const newNote = {
    id: uuid.v4(),
    title: req.body.title,
    text: req.body.text
  }
  if (!validateNoteType(newNote)) {
    return res
      .status(400)
      .send("Add text, title, and body content to create your note!");
  } else {
    addNewNote(newNote, notes);
    res.json(notes);
  }
});
// delete note by ID
router.delete('/notes/:id', (req, res) => {
    const exists = notes.some(notes => notes.id === req.params.id);
    if (exists) {
        notes = notes.filter(note => note.id !== req.params.id);
        fs.writeFileSync(
                path.join(__dirname, '../db/db.json'),
                JSON.stringify({ notes }, null, 2)

              );

        res.json(notes);
    } else {
        res.status(400).send("No matching note found, sorry!")

    }



});
module.exports = router;
