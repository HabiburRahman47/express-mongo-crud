const Todo = require("../model/Todo");

const getTodos = async (req, res) => {
  try {
    const todos = await Todo.find({});
    res.status(200).json(todos);
  } catch (err) {
    res.status(500).json({ message: err.messsage });
  }
};

const getTodo = async (req, res) => {
  const { id } = req.params;
  try {
    const todo = await Todo.findById(id);
    if (!todo) {
      return res.status(404).json({ message: "Todo not found" });
    }
    res.status(200).json(todo);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: err.messsage });
  }
};

const addTodo = async (req, res) => {
    try{
        const todo = await Todo.create(req.body);
        console.log(todo);
        res.status(201).json(todo);
    }catch(err){
        console.log(err.messsage);
        res.status(500).json({message: err.messsage});
    }
}

const updateTodo = async (req, res) => {
    const {id} = req.params;
    try{
        const updateTodo = await Todo.findByIdAndUpdate(id, req.body, {new: true});
        if(!updateTodo){
            return res.status(404).json({message: 'Todo not found'});
        }
        res.status(200).json(updateTodo);
    }catch(err){
        res.status(500).json({message: err.messsage});
    }
}

const deleteTodo = async (req, res) => {
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
}

module.exports = {
  getTodos,
  getTodo,
  addTodo,
  updateTodo,
  deleteTodo
};
