const express = require('express');
const connectDB = require('./config/db');
const todoRoutes = require('./routes/todoRoutes');
const app = express();
const port = 3000;

//middleware
app.use(express.json());

//routes
app.use('/api/todos', todoRoutes);


// Connect to MongoDB
connectDB().then(()=>{
    app.listen(port, () => {
        console.log('listening on port 3000');
    });
})
.catch(()=>{
    console.error('Failed to connect to MongoDB');
});



