const router = require("express").Router();

const { notes } = require('../../db/db.json');
const { createNote, deleteNote } = require('../../lib/notes.js');

router.get('/notes', (req, res) => {
    let savedNote = notes;
    res.json(savedNote);
});

router.post('/notes', (req, res) => {
    req.body.id = notes.length.toString();

    const note = createNote(req.body, notes);
    res.json(note);
});

router.delete('/notes/:id', (req, res) => {
    deleteNote(notes, req.params.id);
    res.json(notes);
})
module.exports = router;