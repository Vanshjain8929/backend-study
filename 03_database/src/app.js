const express = require('express');
const noteModel = require('./models/note.model');
const app = express();

/*
apis=>
1. POST /notes => create a note
2. GET /notes => get all notes
3. PATCH /notes/:id => update a note by id
4. DELETE /notes/:id => delete a note by id
*/ 

app.use(express.json());

app.post("/notes", async (req,res)=>{
    const data = req.body; /* data=> { title: "Note 1", description: "This is the content of note 1" } */
    await noteModel.create({
        title : data.title,
        description : data.description
    })
    res.status(201).json({
        message: "Note created successfully"
    })
})

app.get("/notes" , async (req,res)=>{
    const notes = await noteModel.find();
    res.status(200).json({
        message: "Notes fetched successfully",
        notes: notes
    })
})

app.delete("/notes/:id" , async (req,res)=>{
    const id = req.params.id;
    await noteModel.findOneAndDelete({
        _id : id
    })
    res.status(200).json({
        message : 'Note Deleted Successfully'
    })
})

app.patch("/notes/:id" , async (req,res)=>{
    const id = req.params.id;
    const description  =req.body.description;
    await noteModel.findOneAndUpdate({
        _id : id
    }, {
        description : description
    })
    res.status(200).json({
        message : 'Note Updated Successfully'
    })
})

module.exports = app;