require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("./database/conec");
const router = require("./routes/router");
const CarRoutes = require('./routes/CarRoutes')
const cors = require("cors");



const PORT = 8080;

app.use(cors());
app.use(express.json());

app.get("/",(req,res)=>{
    res.json("server start")
})

app.use(router);
app.use(CarRoutes)

app.listen(PORT, () => {
    console.log(`seu servidor esta rodando na PORT ${PORT}`)
});  