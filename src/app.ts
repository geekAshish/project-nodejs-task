import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./db/connect";
import router from "./routes/tasks";

dotenv.config();

const app = express();
const port = 8080;

// middleware
app.use(express.json());

// route
app.get("/hello", (req, res) => {
  res.send("Hello World!");
});

app.use("/api/v1/tasks", router);

const start = async () => {
  try {
    await connectDB(process.env.MONGODB_URI);

    app.listen(port, () => {
      console.log(`server is listening at http://localhost:${port}`);
    });
  } catch (error) {
    console.error(error);
  }
};

start();
