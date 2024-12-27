import mongoose from "mongoose";

// only the schema properties are gonna save in database
// other extra properties are gonna ignored
// some basic validation
const TasksSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "must provide a name"],
    trim: true,
    maxLength: [200, `can't more then 200 words`],
  },
  isCompleted: { type: Boolean, default: false },
});

export const Task = mongoose.model("Task", TasksSchema);
