// ===== Exercise 1
// db.users.insertOne({
//   name: "Yasmine",
//   email: "yasmine@tech.ma",
//   address: {
//     city: "Casablanca",
//     country: "Morocco",
//     postalCode: "20000"
//   }
// })


// db.users.find()




   // ===== Exercise 2
// Replace 'PASTE_ID_HERE' with the actual ObjectId from your users collection
// db.orders.insertOne({
//   orderNumber: "ORD-99X",
//   total: 1500,
//   currency: "MAD",
//   status: "Processing",
//   userId: ObjectId("PASTE_ID_HERE") 
// })

// db.orders.find()

   // ===== Exercise 3
// Promise qui se résout avec la valeur 3
let promiseResolve = Promise.resolve(3);

promiseResolve
  .then(result => console.log(result));


// Promise qui se rejette avec "Boo!"
let promiseReject = Promise.reject("Boo!");

promiseReject
  .catch(error => console.log(error));
