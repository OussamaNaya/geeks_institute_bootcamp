// app.js
import persons from "./data.js";

// fonction pour calculer la moyenne d'âge
function averageAge(array) {
  const totalAge = array.reduce((sum, person) => sum + person.age, 0);
  const avg = totalAge / array.length;
  console.log(`Average age: ${avg}`);
}

// utilise la fonction
averageAge(persons);