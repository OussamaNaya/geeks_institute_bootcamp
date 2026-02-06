// ===== Exercise 1
// function compareToTen(num){
//     return new Promise((resolve, reject) => {
//         if(num >= 10)
//         {
//             resolve("Number is greater than 10");
//         }
//         else
//         {
//             reject("Number is less than 10");
//         }
//     });
// }

// compareToTen(15)
//   .then(result => console.log(result))
//   .catch(error => console.log(error))
//    .finally( console.log("By by !"))

// compareToTen(8)
//   .then(result => console.log(result))
//   .catch(error => console.log(error))



   // ===== Exercise 2
// function success() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("success");
//     }, 4000);
//   });
// }

// success().then(result => console.log(result));


   // ===== Exercise 3
// Promise qui se résout avec la valeur 3
let promiseResolve = Promise.resolve(3);

promiseResolve
  .then(result => console.log(result));


// Promise qui se rejette avec "Boo!"
let promiseReject = Promise.reject("Boo!");

promiseReject
  .catch(error => console.log(error));
