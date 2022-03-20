import mongoose from "mongoose";

interface TodoDoc extends mongoose.Document {
  title: string;
  description: string;
}

const todoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  }
});

const Todo = mongoose.model<TodoDoc>('Todo', todoSchema)

export { Todo }
