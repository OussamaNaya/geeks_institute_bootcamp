// app.js
import { TodoList } from "./todo.js";

// Créer une instance de TodoList
const myTodo = new TodoList();

// Ajouter des tâches
myTodo.addTask("Finish homework");
myTodo.addTask("Buy groceries");
myTodo.addTask("Walk the dog");

// Marquer certaines tâches comme complétées
myTodo.completeTask(1); // marque "Buy groceries" comme complétée

// Lister toutes les tâches
myTodo.listTasks();
