const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

const connectDB = require("./config/db");

const authRoutes = require("./routes/authRoutes");
const taskRoutes = require("./routes/taskRoutes");

dotenv.config();

const app = express();

connectDB();

app.use(cors());
app.use(express.json());

app.use("/api/v1/auth",authRoutes);
app.use("/api/v1/tasks",taskRoutes);

app.get("/",(req,res)=>{
  res.send("API Running");
});

app.listen(5000,()=>{
  console.log("Server running on port 5000");
});