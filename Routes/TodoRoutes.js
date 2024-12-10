const {Router} = require('express');
const { getTask, addTask, editTask, deleteTask} = require('../Controllers/TodoController');

const router = Router();

router.get('/', getTask);
router.post('/addTask', addTask);
router.put('/editTask', editTask);
router.post('/deleteTask', deleteTask);
module.exports = router;