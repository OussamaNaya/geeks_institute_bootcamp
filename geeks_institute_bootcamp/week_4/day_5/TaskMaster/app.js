const express = require("express");
const Task = require("./models/task.model");
const connect = require("./db/dbConnection");

const app = express();
connect();

const createTask = async () => {
  try {
    const newTask = await Task.create({
      title: "Learn Mongoose Validation",
      description: "Complete the daily challenge for the MongoDB bootcamp",
    });
    console.log("✅ Task Created:", newTask);
  } catch (err) {
    console.error("❌ Error:", err.message);
    console.error("Error code:", err.code); // souvent 121 si validation MongoDB
    console.dir(err.errInfo, { depth: null });}
};

console.log("createTask: ");
// createTask()

const getAllTasks = async () => {
  const tasks = await Task.find();
  console.log("📋 Current Tasks:", tasks);
};

getAllTasks();

const completeTask = async (taskId) => {
    try {
        await Task.findByIdAndUpdate(taskId, { status: 'completed' });
        console.log("🚀 Task marked as completed!");
    } catch (error) {
        consol.log(`error: ${error}`);
    }
};

completeTask('69a9b48ebe794a80c4913c8b');


const PORT = 3000;
app.listen(PORT, () => {
    console.log("Application is runing on localhost:3000 !");
})