// console.log("hello");

const express = require("express");
// require('dotenv').config()
const app = express()
const port = 4500

app.get('/',(req,res)=>{
res.send("<h1>This is my home</h1>")
})

app.get('/store',(req,res)=>{
res.send('<h1>buy anything from this store</h1>')
})

app.listen(port,()=>{
    console.log(`hello ${port}`);
})



