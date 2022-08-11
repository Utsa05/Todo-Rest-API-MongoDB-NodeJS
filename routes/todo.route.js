const express=require('express');
const router=express.Router();

const {getTodos,getTod,createTodo,deleteTod,updateTod} = require('../controllers/todo.controller');

router.get('/', getTodos);
// router.get('/', getTodos);
// router.get('/', getTodos);

module.exports = router;