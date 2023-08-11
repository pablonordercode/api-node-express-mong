
const mongoose = require("mongoose");

require("dotenv").config();

mongoose.set("strictQuery", true);

db().catch((err) => console.log(err));

async function db() {
  await mongoose.connect(
    `mongodb+srv://${process.env.DBUSER}:${process.env.DBPASS}@cluster0.s9vrlne.mongodb.net/?retryWrites=true&w=majority`
  );
  
  console.log("Conectado com sucesso!");
}

module.exports = db;
