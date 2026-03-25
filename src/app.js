const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

const gpuRoutes = require('./routes/gpuRoutes');
app.use('/api', gpuRoutes);

module.exports = app;