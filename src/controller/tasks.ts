import { Request, Response } from "express";
import { Task } from "../models/Task";

export const getAllTasks = async (req: Request, res: Response) => {
  try {
    const allTask = await Task.find({});
    res.status(200).json(allTask);
  } catch (error) {
    res.status(500).json(error);
  }
};

// wrap code in try-catch, so the user just don't hang, if something broke
export const createTasks = async (req: Request, res: Response) => {
  try {
    const task = await Task.create(req.body);
    res.status(201).json({ task });
  } catch (error) {
    res.status(500).json(error);
  }
};

export const getTasksById = async (req: Request, res: Response) => {
  try {
    const { id: taskID } = req.params;
    const task = await Task.findOne({ _id: taskID });

    if (!task) {
      res.status(404).json({ msg: "task not found", taskId: taskID });
      return;
    }

    res.status(200).json(task);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const updateTasksById = (req: Request, res: Response) => {
  res.send("Update task by id");
};

export const deleteTasksById = async (req: Request, res: Response) => {
  try {
    const { id: taskID } = req.params;
    const task = await Task.findOneAndDelete({ _id: taskID });

    if (!task) {
      res.status(404).json({ msg: "task not found", taskId: taskID });
      return;
    }

    res.status(200).json(task);
    // res.status(200).send();
    // res.status(200).json({ status: "success" });
  } catch (error) {
    res.status(500).json(error);
  }
};
