const express = require('express');
const cors = require('cors')

const app = express();
const dotenv = require('dotenv')
dotenv.config();
const { resolve } = require('path');
app.use(cors());
app.use(express.json());






app.use("/", (req, res) => {

    res.json("Pratham here")

})



app.post('/regi', async(req, res) => {




    res.json("done")



})




if (process.env.API_Port) {


    app.listen(process.env.API_Port);





}

module.exports = app;