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
    notesArray.splice(deletebyId, 1);
    
    for(let i = deletebyId; i < notesArray.length; i++) {
        notesArray[i].id = i.toString();
    }

    fs.writeFileSync(
        path.join(__dirname, "../db/db.json"),
        JSON.stringify({ notes: notesArray }, null, 2)
    );
};


module.exports = { createNote, deleteNote };
