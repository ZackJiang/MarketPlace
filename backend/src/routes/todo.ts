import express from 'express'
import { todo, addTodo, deleteTodo } from '../controllers/todo'

const router = express.Router();

router.get('/api/todo', todo);
router.post('/api/todo', addTodo);
router.delete('/api/todo/:id', deleteTodo);

export { router as todoRouter }
