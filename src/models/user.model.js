import mongoose from 'mongoose';

let useSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true
    },
    email:{
        type:String,
        required:true,
        trim:true,
        unique:true,
        lowercase:true
    }
},
{
    timestamps:true
})


let UserModel = mongoose.model('User', useSchema);

export default UserModel;