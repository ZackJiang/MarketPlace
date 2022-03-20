import { Request, Response } from 'express'
import { Todo } from '../models/todo';

const todo = async (req: Request, res: Response) => {
  const todo = await Todo.find({});
  return res.status(200).send(todo)
}

const addTodo = (req: Request, res: Response) => {
  const { title, description } = req.body;

  const todo = new Todo({
      title,
      description,
  });

  todo.save( (err) => {
    if (err) {
      res.send(`Error: ${err}`);
    }
    res.send('User Created successfully');
  })
}

const deleteTodo = async (req: Request, res: Response) => {
  const { id } = req.params;

  await Todo.deleteOne({ _id: id});
  res.send('User Deleted successfully');
}

export {
  todo,
  addTodo,
  deleteTodo
}
