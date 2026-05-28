import dotenv from 'dotenv';
dotenv.config();

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



export default app;