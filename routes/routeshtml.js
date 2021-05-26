// dependencies
const path = require("path");
const router = require("express").Router();
//home page
router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/", "index.html"));
});
// notes page
router.get("/notes", (req, res) => {
  res.sendFile(path.join(__dirname, "../public", "notes.html"));
});
// get all/any notes with wildcard
router.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../public", "index.html"));
});
module.exports = router;