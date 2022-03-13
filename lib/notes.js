const fs = require('fs');
const path = require("path");

function createNote(body, notesArray) {
    const note = body;
    notesArray.push(note);
    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify({ notes: notesArray }, null, 2)
    );
    return note;
};

function deleteNote(notesArray, id) {
    let deletebyId = parseInt(id);
    notesArray
}


module.exports = { createNote };
