const express = require('express');
const mongoose = require('mongoose');
const Todo = require('./model/Todo');
const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req, res) => {
    res.send("Hello, habib!");
});

app.get('/api/todos', async (req, res) => {
    try{
        const todos = await Todo.find();
        res.status(200).json(todos);
    }catch(err){
        res.status(500).json(err.message);
    }

});

app.post('/api/addTodo', async(req, res) => {
    try{
        const todo = await Todo.create(req.body);
        res.status(201).json(todo);
    }catch(err){
        console.log(err.messsage);
        res.status(500).json(err.messsage);
    }
});


// Connect to MongoDB
mongoose.connect('mongodb+srv://habib160947:IvvlsHC7u2hau01N@backenddb.bjlri.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackendDB')
.then(()=>{
    console.log('Connected to MongoDB');
    app.listen(port, () => {
        console.log('listening on port 3000');
    });
})
.catch(()=>{
    console.error('Failed to connect to MongoDB');
});



