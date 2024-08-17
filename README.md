# To-Do App 
A simple full-stack Todo list application built with Express.js, MongodB and basic HTML/CSS and JavaScript

## Features

- Create new todo items
- Read existing todo items
- Update todo items
- Delete todo items
- Responsive UI with basic styling

## Project structure

simple-crude-app
|
├── config
│   └── db.js              # MongoDB connection setup
├── controllers
│   └── todoController.js   # Logic for handling API requests
├── models
│   └── Todo.js             # Mongoose schema/model for Todo items
├── public
│   ├── index.html          # Frontend HTML file
│   └── styles.css          # Basic CSS styling
├── routes
│   └── todoRoutes.js       # API routes for CRUD operations
├── app.js     
├── server.js               # Entry point of the application
└── README.md               # Documentation file


## Prerequisites

- Node.js
- MongoDB
- Git

## Installation

1. Clone the repository
git clone https://github.com/HabiburRahman47/express-mongo-crud.git 

2. Install dependencies
cd folder
npm install

3. Start the server
npm start

## API Endpoints

- `GET /api/todos`: Fetch all todos
- `GET /api/todos/:id`: Fetch a specific todo item
- `POST /api/todos/:id`: create a new todo
- `PUT /api/todos/:id`: update a todo
- `DELETE /api/todos/:id`: delete a todo

## Usage Examples

Create a new todo:
POST /api/todos
Content-Type: application/json

{
    "title": "to design a UI",
    "status": "WIP",
    "completed" "30%"
}

## Technologies Used
- Backend
    - NodeJS
    - ExpressJs
    - MongoDB
    - Mongoose
- Frontend
    - HTML
    - CSS
    - JavaScript(Vanilla)
- Version Control
    - Git