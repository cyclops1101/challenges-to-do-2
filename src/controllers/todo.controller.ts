import { Request, Response } from "express";
import Todo from "../models/todo.model";

export const listTodos = async (req: Request, res: Response) => {
  try {
    const tasks = await Todo.find();

    res.status(200).json({ data: tasks });
  } catch (err) {
    res.status(500).json({ error: "network error" });
  }
};

export const createTodo = async (req: Request, res: Response) => {
  try {
    const { text } = req.body;
    const newTodo = await Todo.create({ text });
    res.status(201).json({ data: newTodo });
  } catch (err) {
    res.status(500).json({ error: "network error" });
  }
};

export const updateTodo = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { completed } = req.body;
    const todo = await Todo.findById(id);
    if (!todo) {
      return res.status(404).json({ error: "todo not found" });
    }
    todo.completed = completed;
    await todo.save();
    res.status(200).json({ message: "updated todo" });
  } catch (err) {
    res.status(500).json({ error: "network error" });
  }
};

export const deleteTodo = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const deletedTodo = await Todo.findByIdAndDelete(id);
    res.status(200).json({ data: deletedTodo });
  } catch (err) {
    res.status(500).json({ error: "network error" });
  }
};
