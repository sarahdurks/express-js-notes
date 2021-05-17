/// dependencies
const path = require('path');
const router = require('express').Router();

router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/', 'index.html'));
});
//get all/any
router.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../public', 'index.html'));
});

router.get('/notes', (req, res) => {
  res.sendFile(path.join(__dirname, '../public', 'notes.html'));
});

module.exports = router;
