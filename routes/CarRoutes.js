const express = require("express");
const router = express.Router();
const cars = require("../model/Car");



router.post("/carros", async (req, res) => {
    // console.log(req.body);
    const { nome, valor, descricao, motor, color } = req.body;

    if (!nome || !valor || !descricao || !motor, !color) {
        res.status(422).json("por favor preencha os dados");
    }

    try {

        const precars = await cars.findOne({ nome: nome });
        // console.log(precars);

        if (precars) {
            res.status(422).json("Carro já está presente");
        } else {
            const addcars = new cars({
                nome, valor, descricao, motor, color
            });

            await addcars.save();
            res.status(201).json(addcars);
            // console.log(addcars);
        }

    } catch (error) {
        res.status(422).json(error);
    }
})


router.get("/getcar",async(req,res)=>{
    try {
        const cardata = await cars.find();
        res.status(201).json(cardata)
        // console.log(cardata);
    } catch (error) {
        res.status(422).json(error);
    }
})


router.get("/getcar/:id",async(req,res)=>{
    try {
        console.log(req.params);
        const {id} = req.params;

        const carsindividual = await cars.findById({_id:id});
        // console.log(carsindividual);
        res.status(201).json(carsindividual)

    } catch (error) {
        res.status(422).json(error);
    }
})




router.patch("/updatecar/:id",async(req,res)=>{
    try {
        const {id} = req.params;

        const updatecar = await cars.findByIdAndUpdate(id,req.body,{
            new:true
        });

        console.log(updatecar);
        res.status(201).json(updatecar);

    } catch (error) {
        res.status(422).json(error);
    }
})


router.delete("/deletarcar/:id",async(req,res)=>{
    try {
        const {id} = req.params;

        const deletcar = await cars.findByIdAndDelete({_id:id})
        console.log(deletcar);
        res.status(201).json(deletcar);

    } catch (error) {
        res.status(422).json(error);
    }
})

module.exports = router;