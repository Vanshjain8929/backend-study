//Task of this file - To create server

const express = require('express');

const app = express();

const notes = [];//will contain array of object of notes
app.use(express.json())//Middleware - to parse json data coming from client

/* title , description */
/* /notes->Api , Method-POST */
app.post('/notes', (req, res) => {
    notes.push(req.body);
    res.status(201).json({
        message: 'Note created successfully'
    })
})

app.get('/notes' , (req,res) => {
    res.status(200).json({
        message : 'Notes fetched successfully',
        notes : notes
    })
})

app.delete('/notes/:index' , (req,res) =>{
    const index = req.params.index;
    console.log(index);

    delete notes[index];

    res.status(200).json({
        message : 'Note deleted successfully'
    })
})

app.patch('/notes/:index' , (req,res) =>{
    const index = req.params.index;
    const description = req.body.description;

    notes[ index ].description = description;

    res.status(200).json({
        message : 'Note updated successfully'
    })
    
})


module.exports = app;   