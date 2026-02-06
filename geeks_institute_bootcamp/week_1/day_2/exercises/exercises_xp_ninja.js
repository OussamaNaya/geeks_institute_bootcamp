// ===== Exercise 1
let person1 = {
  fullName: "Alice Martin",
  mass: 68,
  height: 1.65,
  calcBMI: function () {
    return this.mass / (this.height * this.height);
  }
};

let person2 = {
  fullName: "John Doe",
  mass: 85,
  height: 1.80,
  calcBMI: function () {
    return this.mass / (this.height * this.height);
  }
};

function compareBMI(p1, p2) {
  let bmi1 = p1.calcBMI();
  let bmi2 = p2.calcBMI();

  if (bmi1 > bmi2) {
    console.log(p1.fullName + " has the higher BMI (" + bmi1.toFixed(2) + ")");
  } else if (bmi2 > bmi1) {
    console.log(p2.fullName + " has the higher BMI (" + bmi2.toFixed(2) + ")");
  } else {
    console.log("Both have the same BMI (" + bmi1.toFixed(2) + ")");
  }
}

compareBMI(person1, person2);


// ===== Exercise 2
function findAvg(gradesList) {
  let sum = 0;

  for (let i = 0; i < gradesList.length; i++) {
    sum = sum + gradesList[i];
  }

  let average = sum / gradesList.length;
  console.log("Average is:", average);

  checkResult(average); // appel de la 2ème fonction
}

function checkResult(avg) {
  if (avg >= 65) {
    console.log("You passed the course 🎉");
  } else {
    console.log("You failed and must repeat the course 😢");
  }
}

let grades = [70, 80, 60, 90, 50];
findAvg(grades);