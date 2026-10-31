import express from "express";

const PORT = 5000;

const app = express();

app.get("/", (req, res) => {
  res.send("<h1>Home page</h1>");
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
