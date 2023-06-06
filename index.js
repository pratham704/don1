const express = require('express');
const mongoose = require('mongoose');

const cors = require('cors')
const abc = require('./contactmodel');

const app = express();
const dotenv = require('dotenv')
dotenv.config();
const { resolve } = require('path');
app.use(cors());
app.use(express.json());

mongoose.set('strictQuery', false);

const url = `${process.env.MONGO}`


mongoose.connect(url)










app.post('/regi', async(req, res) => {




    res.json("done")



})



app.post('/reg', async(req, res) => {


    const resn = await abc.findOne({ username: req.body.username })
    if (resn !== null) {

        res.json("alreadyexist")


    } else {
        const data = await abc.create({
            username: req.body.username,
            password: req.body.password,

        })


        res.json("success")
    }


})




if (process.env.API_Port) {


    app.listen(process.env.API_Port);





}

module.exports = app;
