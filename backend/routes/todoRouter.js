const express=require('express');
const { createTodo, getTodo, updateTodo, deleteTodo } = require('../controllers/todoController');
const router=express.Router()

router.post("/add",createTodo);

router.get("/",getTodo);

router.patch("/update/:id",updateTodo);

router.delete("/delete/:id",deleteTodo);

module.exports={router};