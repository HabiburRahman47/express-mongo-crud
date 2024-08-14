# To-Do App 
A RESTful API  for a Todo application built with Express.js and MongoDB.

## Features

- Create new todo items
- Read existing todo items
- Update todo items
- Delete todo items

## Prerequisites

- Node.js
- MongoDB

## Installation

1. Clone the repository
git clone 

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
