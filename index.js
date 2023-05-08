const express = require('express');
const cors = require('cors');
const app = express();
const router = require('./src/routes/index');
const env = require('dotenv').config();
const morgan = require('morgan');

app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
app.use(router);

app.listen(4000, () => console.log('Servidor escuchando en puerto 4000'));
