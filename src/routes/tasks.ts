import express, { Request, Response } from "express";
import {
  createTasks,
  deleteTasksById,
  getAllTasks,
  getTasksById,
  updateTasksById,
} from "../controller/tasks";

const router = express.Router();

router.route("/").get(getAllTasks).post(createTasks);
router
  .route("/:id")
  .get(getTasksById)
  .patch(updateTasksById)
  .delete(deleteTasksById);

export default router;
