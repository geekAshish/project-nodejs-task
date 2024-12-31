import { NextFunction, Request, Response } from "express";
import { Task } from "../models/Task";
import { asyncWrapper } from "../middleware/async";
import { createCustomAPIError } from "../error/custom-error";

export const getAllTasks = asyncWrapper(async (req: Request, res: Response) => {
  const allTask = await Task.find({});
  // res.status(200).json(allTask);
  res
    .status(200)
    .json({ status: "success", data: { allTask, nbHits: allTask?.length } });
});

// wrap code in try-catch, so the user just don't hang, if something broke
export const createTasks = asyncWrapper(async (req: Request, res: Response) => {
  const task = await Task.create(req.body);
  res.status(201).json({ task });
});

export const getTasksById = asyncWrapper(
  async (req: Request, res: Response, next: NextFunction) => {
    const { id: taskID } = req.params;
    const task = await Task.findOne({ _id: taskID });

    if (!task) {
      return next(
        createCustomAPIError(`No task found with id : ${taskID}`, 404)
      );
    }

    res.status(200).json(task);
  }
);

export const updateTasksById = asyncWrapper(
  async (req: Request, res: Response, next: NextFunction) => {
    const { id: taskID } = req.params;

    const task = await Task.findOneAndUpdate({ _id: taskID }, req.body, {
      new: true,
      runValidators: true,
    });

    if (!task) {
      return next(
        createCustomAPIError(`No task found with id : ${taskID}`, 404)
      );
    }

    res.status(200).json(task);
  }
);

export const deleteTasksById = asyncWrapper(
  async (req: Request, res: Response, next: NextFunction) => {
    const { id: taskID } = req.params;
    const task = await Task.findOneAndDelete({ _id: taskID });

    if (!task) {
      return next(
        createCustomAPIError(`No task found with id : ${taskID}`, 404)
      );
    }

    res.status(200).json(task);
    // res.status(200).send();
    // res.status(200).json({ status: "success" });
  }
);
