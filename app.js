const express = require("express");
const cors = require("cors");
const userRouter = require("./routes/todo.route");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api/todos',userRouter);

//initial Route
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/./views/server.html");
});

//invalid route
app.use("/", (req, res, next) => {
  res.status(404).json({
    message: "Route Not Found",
    statuscode: 404,
  });
});

//server eror
app.use("/", (error, req, res, next) => {
  res.status(500).json({
    message: "Server error occured",
    statuscode: 5000,
  });
});

module.exports = app;
