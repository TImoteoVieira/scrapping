const express = require('express');
var cors = require('cors');

const app = express();
app.use(cors());

app.use(express.json());

const configRoutes = require('./config/routes');

configRoutes(app); 

module.exports = app;