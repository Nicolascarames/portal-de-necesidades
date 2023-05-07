const express = require('express')
const cors = require('cors');
const BDconn = require('./db');
const app= express();
app.use(cors());
app.listen(4000);
app.use(express.json())



app.get('/add',async (req,res)=>{
   const connect = await BDconn();
   const [response]= await connect.query('CREATE TABLE users(id INT PRIMARY KEY) ');
   console.log(response)
    res.send('recibido!')
})


console.log('hello world')
