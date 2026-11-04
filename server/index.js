import express from "express";
import "dotenv/config";
import messageRoutes from "./routes/messages.js";
import { MongoClient } from "mongodb";
import mongoose from "mongoose";

const PORT = process.env.PORT || 5000;

const app = express();

const client = new MongoClient(
  `mongodb+srv://itgrad07_db_user:${process.env.MONGODB_PASSWORD}@cluster0.6yrxypo.mongodb.net/`,
);

export async function connectToMongoDB() {
  try {
    await client.connect();
    console.log("You successfully connected to MongoDB!");
    return client;
  } catch (err) {
    console.dir(err);
  }
}

// Call this only when your application terminates
export async function disconnectFromMongoDB() {
  await client.close();
}

// middleware, support json
app.use(express.json());
// another middleware, support routing
app.use("/api/messages", messageRoutes);

mongoose
  .connect(
    `mongodb+srv://itgrad07_db_user:${process.env.MONGODB_PASSWORD}@cluster0.6yrxypo.mongodb.net/`,
  )
  .then(() => {
    console.log("Successfully connected to DB");

    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
      // connectToMongoDB();
    });
  })
  .catch((error) => {
    console.error("DB connection error", error);
  });
