const express = require("express");
const router = express.Router();
const users = require("../model/useSchema");


router.post("/register", async (req, res) => {
    // console.log(req.body);
    const { nome, email, celular, desc } = req.body;

    if (!nome || !email || !celular || !desc) {
        res.status(422).json("por favor preencha os dados");
    }

    try {

        const preuser = await users.findOne({ email: email });
        // console.log(preuser);

        if (preuser) {
            res.status(422).json("usuário já está presente");
        } else {
            const adduser = new users({
                nome, email, celular, desc
            });

            await adduser.save();
            res.status(201).json(adduser);
            // console.log(adduser);
        }

    } catch (error) {
        res.status(422).json(error);
    }
})


router.get("/getuser", async (req, res) => {
    try {
        const userdata = await users.find();
        res.status(201).json(userdata)
        // console.log(userdata);
    } catch (error) {
        res.status(422).json(error);
    }
})



router.get("/getuse/:id", async (req, res) => {
    try {
        console.log(req.params);
        const { id } = req.params;

        const userindividual = await users.findById({ _id: id });
        // console.log(userindividual);
        res.status(201).json(userindividual)

    } catch (error) {
        res.status(422).json(error);
    }
})


router.patch("/updateuser/:id", async (req, res) => {
    try {
        const { id } = req.params;

        const updateduser = await users.findByIdAndUpdate(id, req.body, {
            new: true
        });

        console.log(updateduser);
        res.status(201).json(updateduser);

    } catch (error) {
        res.status(422).json(error);
    }
})

router.delete("/deleteuser/:id", async (req, res) => {
    try {
        const { id } = req.params;

        const deletuser = await users.findByIdAndDelete({ _id: id })
        console.log(deletuser);
        res.status(201).json(deletuser);

    } catch (error) {
        res.status(422).json(error);
    }
})


module.exports = router;