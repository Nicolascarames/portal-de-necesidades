const express = require('express');
const cors = require('cors');
const BDconn = require('./db');
const app = express();
const env = require('dotenv').config();
app.use(cors());
app.listen(4000);
app.use(express.json());

app.get('/users', async (req, res) => {
  const connect = await BDconn();
  const [response] = await connect.query('DESCRIBE users ');
  console.log(response);
  res.send('recibido!');
});

console.log('hello world');
