import dotenv from 'dotenv';
dotenv.config();
import mongoose from 'mongoose';
import express, { Router } from 'express';

import NoteModel from './models/note.model.js';


const app = express();
app.use(express.json());
 
// @route Post /api/post
// @desc Create a new post
// @access Public

app.post("/api/notes", async (req, res) => {
const { title, description } = req.body;


// Validation
if(!description){
    return res.status(400).json({ message: "Description is required" });
}

if(title.trim().length < 4 ){
    return res.status(400).json({ message: "Title must be at least 4 characters long" });
}

if(description.trim().length < 10 ){
    return res.status(400).json({ message: "Description must be at least 10 characters long" });
}

// if validation passes, create a new note 

let newNote =  await NoteModel.create({ title, description });


    res.json({ message: "Note created successfully", note: newNote });
});


// @route Get /api/notes
// @desc Get all notes
// @access Public

app.get("/api/notes", async (req, res) => {
    let notes = await NoteModel.find();
    res.json(
        {
            message: "Notes fetched successfully",
            notes });
});



// @route Patch /api/notes/:id
// @desc Update a note
// @access Public
app.patch("/api/notes/:id", async (req, res) => {
    const { id } = req.params;
    const {  description } = req.body;

    // validation

        if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(400).json({ message: "Invalid note id" });
    }

    if(!description || description.trim().length < 10){
        return res.status(400).json({ message: "Description must be at least 10 characters long" });
    }



    let note = await NoteModel.findById(id);

    if (!note) {
        return res.status(404).json({ message: "Note not found" });
    }

    note.description = description;


    await note.save();
    res.json({ message: "Note updated successfully", note });
});



// @route Delete /api/notes/:id
// @desc Delete a note
// @access Public

app.delete("/api/notes/:id", async (req, res)=>{
try {
        const { id } = req.params;

    // check if id is valid
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(400).json({ message: "Invalid note id" });
    }

    //check if note exists
    let note = await NoteModel.findById(id);
    if(!note){
        return res.status(404).json({ message: "Note not found" });
    }

    // if it exists, delete it
    await NoteModel.findByIdAndDelete(id);

    res.json({ message: "Note deleted successfully" });
}
catch(error){
    console.error("Error deleting note:", error);
    res.status(500).json({ message: "Internal server error" }); }
})

export default app;