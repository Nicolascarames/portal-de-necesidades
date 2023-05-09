const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const app = express();
const env = require('dotenv').config();
const path = require('path');
const router = require('./src/routes/index');

app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
app.use(router);

app.listen(4000, () => console.log('Servidor escuchando en puerto 4000'));
