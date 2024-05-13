import express from 'express';
import * as todoController from '../controllers/todoController';

const router = express.Router();

router.get('/', todoController.getAllTodos);
router.post('/', todoController.addTodo);
router.put('/:id/complete', todoController.completeTodoById);

export default router;