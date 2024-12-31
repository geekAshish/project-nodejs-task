import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./db/connect";
import router from "./routes/tasks";
import { notFound } from "./middleware/not-found";
import { errorHandlerMiddleware } from "./middleware/error-handler";

dotenv.config();

const app = express();
const port = process.env.PORT || 8080;

// middleware
app.use(express.json());

// route
app.use("/api/v1/tasks", router);

app.use(notFound as any);
app.use(errorHandlerMiddleware as any);

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
