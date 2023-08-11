const mongoose = require("mongoose");


const userSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true,
      },
      valor: {
        type: Number,
        required: true,
      },
      descricao: {
        type: String,
      },
      motor: {
        type: Number,
        required: true,
      },
      color: {
        type: String,
        required: true,
      },
  
}, {timestamps: true}); 

const cars = new mongoose.model("carros",userSchema);

module.exports = cars
