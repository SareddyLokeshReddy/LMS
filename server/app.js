const express = require("express");
const connectDB = require("./config/db");
const dotenv = require("dotenv");
const app = express();
dotenv.config()
app.get("/welcome",(req,res)=>{
    res.send("welcome back")
})