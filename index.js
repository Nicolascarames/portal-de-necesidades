const express = require('express');
const cors = require('cors');
const app = express();
const router = require('./src/routes/index')
const env = require('dotenv').config();
app.use(cors());
app.listen(4000);
app.use(express.json());
app.use(router)


