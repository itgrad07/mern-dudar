// handle all urls in the routes folder
import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  //   res.send("<h1>Home page</h1>");
  res.send({ message: "Get all messages" });
});

router.get("/:id", (req, res) => {
  res.send({ message: "Get one message" });
});

router.post("/", (req, res) => {
  res.send({ message: req.body });
});

router.patch("/:id", (req, res) => {
  res.send({ message: "Update one message" });
});

router.post("/:id", (req, res) => {
  res.send({ message: "Delete one message" });
});

export default router;
