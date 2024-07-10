//import express from 'express' ;//es7
const express = require('express'); //es6
const app = express();

//connect to frontend
app.get("/login",(req,res)=>{
    res.sendFile(__dirname+"/"+"login.html");
})

//server logic
app.listen(4000,() => {
    console.log("server running on port 4000");
})

//dynamic logic
app.get("/process",(req,res) => {
    //request data gathering logic
    const uname = req.query.username;
    const pwd = req.query.password;
//business logic
if((uname == "admin") && (pwd == "admin123"))
{
    res.end(uname+"welcome to twitter world");
}
else{
    res.end(uname+"please check details BROOOOOO!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
}
})