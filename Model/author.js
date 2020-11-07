const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const authorSchema = new Schema({
    _id:{
        type:Number,
        required:true,
    },
    author:{
        type:String,
        required:true
    },
    book:{
        type:String,
        required:true
    }
})




const Author = mongoose.model('aurthor',authorSchema);


module.exports = Author;