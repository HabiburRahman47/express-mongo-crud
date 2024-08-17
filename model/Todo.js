const mongoose = require('mongoose');


const TodoSchema = mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    status:{
        type: String,
        require: true
    },
    completed:{
        type: String,
        required: true,
        default: '0%'
    },
  
},
{
    timestamps: true
}
);

const Todo = mongoose.model('Todo',TodoSchema);
module.exports = Todo;