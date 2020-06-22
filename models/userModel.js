const mongoose=require('mongoose');

const userSchema=mongoose.Schema({
    userId: {
        type: Number,
        required: true
    },
    firstName:{
        type: String,
        required: true
    },
    lastName:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    }
});

module.exports=mongoose.model('user',userSchema);