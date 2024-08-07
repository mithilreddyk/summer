require("dotenv").config();
const express=require('express');
const app=express();
const cors = require("cors")
const mongoose = require("mongoose");


const path=require('path');

const userRoutes = require('./server/routes/user');
const postRoutes= require('./server/routes/post');

mongoose.connect(process.env.dbURL)
  .then(console.log("DB Connected!!"))
  .catch(error => console.log(error));
app.use(express.json());
app.use(cors());


app.use(express.static(__dirname + "/public"))
app.use('/user',require("./server/routes/user"));

app.use('/post',require("./server/routes/post"));

app.use('/subscribe',require("./server/routes/subscription"));

// app.use


app.use(function(req,res,next){

    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin,  X-Requested-With, Content-Type, Accept, Authorization");
    res.header("Access-Control-Allow-Methods","GET,POST,PUT,DELETE,OPTIONS");
    next();
});



app.use('/user',userRoutes);
app.use('/post',postRoutes);
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Server started on port ${PORT}!`)); 
