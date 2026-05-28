import dotenv from 'dotenv';
dotenv.config();

import express, { Router } from 'express';
import connectDB from './config/db.js';
import NoteModel from './models/note.model.js';

connectDB();

app.use(express.json());
const app = express();
 
// @route Post /api/post
// @desc Create a new post
// @access Public


app.post("/api/post", async (req, res) => {
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

export default app;