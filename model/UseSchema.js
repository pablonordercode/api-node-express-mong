const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true,
        unique: true
    },
    
    celular: {
        type: Number,
        required: true
    },

    desc: {
        type: String,
        required: true
    }
}); 

const users = new mongoose.model("minhas",userSchema);


module.exports = users;