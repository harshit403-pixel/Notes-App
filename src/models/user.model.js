import mongoose from 'mongoose';
import bcrypt from 'bcrypt'

let userSchema = new mongoose.Schema({
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
    },
    password:{
        type:String,
        required:true,
        trim:true
    }
},
{
    timestamps:true
})


// Pre-save middleware
// Runs automatically before saving the user document

// Using normal function instead of arrow function
// because we need access to `this` keyword,
// and `this` refers to the current document being saved
userSchema.pre("save",function(){
    this.password = bcrypt.hashSync(this.password, 10)
})


let UserModel = mongoose.model('User', userSchema);

export default UserModel;