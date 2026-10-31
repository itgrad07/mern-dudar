import express from "express";
import "dotenv/config";
import messageRoutes from "./routes/messages.js";

const PORT = process.env.PORT || 5000;

const app = express();

// middleware, support json
app.use(express.json());
// another middleware, support routing
app.use("/api/messages", messageRoutes);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
