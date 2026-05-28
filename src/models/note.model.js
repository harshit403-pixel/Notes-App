import mongoose from 'mongoose';

const noteSchema = new mongoose.Schema({
    title: {
        type: String,
    },
    description: {
        type:String,
    },
    user:{
        type:String
    }
})


const NoteModel = mongoose.model('Note', noteSchema);

export default NoteModel;