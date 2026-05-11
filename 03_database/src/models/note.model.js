const mongoose = require('mongoose');

/*note = {
    title: "Note 1",
    description: "This is the content of note 1"
} */
const noteSchema = new mongoose.Schema({
    title: String,
    description: String,
})

const noteModel = mongoose.model("note", noteSchema);
module.exports = noteModel;