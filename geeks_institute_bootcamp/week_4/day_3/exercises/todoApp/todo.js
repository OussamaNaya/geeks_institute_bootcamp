// todo.js

export class TodoList {
  constructor() {
    this.tasks = []; // tableau pour stocker les tâches
  }

  // Ajouter une tâche
  addTask(description) {
    this.tasks.push({ description, completed: false });
    console.log(`Task added: "${description}"`);
  }

  // Marquer une tâche comme complétée
  completeTask(index) {
    if (index >= 0 && index < this.tasks.length) {
      this.tasks[index].completed = true;
      console.log(`Task completed: "${this.tasks[index].description}"`);
    } else {
      console.log("Invalid task index");
    }
  }

  // Lister toutes les tâches
  listTasks() {
    console.log("Todo List:");
    this.tasks.forEach((task, i) => {
      const status = task.completed ? "✅" : "❌";
      console.log(`${i}. [${status}] ${task.description}`);
    });
  }
}