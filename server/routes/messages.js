// handle all urls in the routes folder
import express from "express";
import mongoose from "mongoose";
import Message from "../models/Message.js";

const router = express.Router();

router.get("/", (req, res) => {
  //   res.send("<h1>Home page</h1>");
  res.send({ message: "Get all messages" });
});

router.get("/:id", (req, res) => {
  res.send({ message: "Get one message" });
});

// router.post("/", async (req, res) => {
//   const result = await mongoose.connection
//     .collection("test")
//     .insertOne({ title: "Test data" });
//   res.send({ message: req.body });
// });

router.post("/", async (req, res) => {
  try {
    const { text, author } = req.body;
    const message = await Message.create({ text, author });
    res.status(200).json(message);
  } catch (error) {
    console.log();
    res.status(400).json({ error: error.message });
  }
});

router.patch("/:id", (req, res) => {
  res.send({ message: "Update one message" });
});

router.post("/:id", (req, res) => {
  res.send({ message: "Delete one message" });
});

export default router;
