const express = require("express");
const Task = require("./models/task.model");
const connect = require("./db/dbConnection");

const app = express();
connect();


const PORT = 3000;
app.listen(PORT, () => {
    console.log("Application is runing on localhost:3000 !");
})