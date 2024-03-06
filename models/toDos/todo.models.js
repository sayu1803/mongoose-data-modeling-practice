import mongoose from 'mongoose';

const todoSchema = new mongoose.todoSchema(
  {
    content: {
      type: String,
      required: true,
    },
    complete: {
      type: Boolean,
      default: false,
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'user',
    },
    subTodos: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'SubTodo',
      }, //array of subTodos
    ],
  },
  { timestamps: true }
);

export const Todo = mongoose.model('Todo', todoSchema);
