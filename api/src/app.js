const express = require("express");
const mongoose = require("mongoose");
const Todo = require("./models/todo");

const app = express();
app.use(express.json());

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });

app.get("/todos", async (req, res) => res.json(await Todo.find()));
app.post("/todos", async (req, res) => res.json(await Todo.create(req.body)));
app.get("/todos/:id", async (req, res) => res.json(await Todo.findById(req.params.id)));
app.put("/todos/:id", async (req, res) => res.json(await Todo.findByIdAndUpdate(req.params.id, req.body, { new: true })));
app.delete("/todos/:id", async (req, res) => res.json(await Todo.findByIdAndDelete(req.params.id)));

app.listen(3000, () => console.log("API running on http://localhost:3000"));
