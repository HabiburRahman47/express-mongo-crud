const express = require('express');
const mongoose = require('mongoose');
const Todo = require('./model/Todo');
const connectDB = require('./config/db');
const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req, res) => {
    res.send("Hello, habib!");
});

app.get('/api/todos', async (req, res) => {
    try{
        const todos = await Todo.find({});
        res.status(200).json(todos);
    }catch(err){
        res.status(500).json({message: err.messsage});
    }

});

app.get('/api/todos/:id', async (req, res) => {
        const {id} = req.params;
        try{
            const todo = await Todo.findById(id);
            if(!todo){
                return res.status(404).json({message: 'Todo not found'});
            }
            res.status(200).json(todo);
        }catch(err){
            console.log(err);
            res.status(500).json({message: err.messsage});
        }
});

app.post('/api/addTodo', async(req, res) => {
    try{
        const todo = await Todo.create(req.body);
        res.status(201).json(todo);
    }catch(err){
        console.log(err.messsage);
        res.status(500).json({message: err.messsage});
    }
});

app.put('/api/updateTodo/:id', async(req, res) => {
    const {id} = req.params;
    try{
        const updateTodo = await Todo.findByIdAndUpdate(id, req.body);
        if(!updateTodo){
            return res.status(404).json({message: 'Todo not found'});
        }
        res.status(200).json(updateTodo);
    }catch(err){
        res.status(500).json({message: err.messsage});
    }
});

app.delete('/api/deleteTodo/:id', async (req, res) => {
    const {id} = req.params;

    try{
        const todo = await Todo.findByIdAndDelete(id);
        if(!todo){
            return res.status(404).json({message: 'Todo not found'});
        }
        res.status(200).json({message: 'Todo deleted'});
    }catch(err){
        res.status(500).json({message: err.messsage});
    }
});



// Connect to MongoDB
connectDB().then(()=>{
    app.listen(port, () => {
        console.log('listening on port 3000');
    });
})
.catch(()=>{
    console.error('Failed to connect to MongoDB');
});



