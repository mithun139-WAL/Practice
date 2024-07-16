const express = require('express');
const bodyParser = require('body-parser');
const corsMiddleware = require('./corsMiddleware');
const dotenv = require('dotenv');

const connectMongo = require('./config/mongo');
const { connectPostgres } = require('./config/postgres');
const bookRoutes = require('./routes/bookRoutes');
const mongoose = require('mongoose');

mongoose.set('strictQuery', false);
dotenv.config();

const app = express();

app.use(corsMiddleware);
app.use(bodyParser.json());

app.use('/api', bookRoutes);

const PORT = process.env.PORT || 3001;

const startServer = async () => {
  await connectPostgres();
  await connectMongo();
};

startServer();

module.exports = app;