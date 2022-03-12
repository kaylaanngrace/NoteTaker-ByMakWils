const router = require("express").Router();

const { notes } = require('../../db/db.json');
const newNote = require('..///lin/animals');

router.get('/notes', (req, res) => {
    let savedNote = notes;
    res.json(savedNote);
});

router.post('/notes', (req, res) => {
    req.body.id = notes.length.toString();

    const note = createNote(req.body, notes);
    res.json(note);
});

module.exports = router;