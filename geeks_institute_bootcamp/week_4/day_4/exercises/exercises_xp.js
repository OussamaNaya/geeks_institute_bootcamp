// // ===== Exercise 1
// db.students.insertMany([
//   { name: "Yassine", age: 19, city: "Rabat", major: "AI" },
//   { name: "Sophia", age: 26, city: "Paris", major: "Cybersecurity" },
//   { name: "Kaito", age: 22, city: "Tokyo", major: "Web Dev" },
//   { name: "Elena", age: 31, city: "Madrid", major: "Data Science" },
//   { name: "Marcus", age: 24, city: "New York", major: "AI" }
// ])


// // ===== Exercise 2: Data Intelligence
// // Task A: The "Young Pros" Filter
// // {age: { $gt: 18, $lt: 25}}
// // Task C: The Graduation
// // db.students.deleteOne({name: "Sophia"});

// // 🏆 Boss Level Challenge (Optional)
// // db.students.find().pretty()