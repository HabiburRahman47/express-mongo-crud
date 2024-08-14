const express = require('express');
const todoRoutes = require('./routes/todoRoutes');
const app = express();


//middleware
app.use(express.json());

//routes
app.use('/api/todos', todoRoutes);


module.exports = app;

