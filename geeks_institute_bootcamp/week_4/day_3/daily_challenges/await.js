// ################## 1. Fonction SYNCHRONE (sync)
// function sayHello() {
//   console.log("Bonjour");
// }

// function sayBye() {
//   console.log("Au revoir");
// }

// sayHello();
// sayBye();

// // Exemple avec calcul lent (sync)
// function slowTask() {
//   for (let i = 0; i < 1e9; i++) {}
//   console.log("Tâche terminée");
// }

// console.log("Début");
// slowTask();
// console.log("Fin");


//######################### 2. Fonction ASYNCHRONE (callback)
// Exemple avec setTimeout :
// function asyncTask(callback) {
//   setTimeout(() => {
//     console.log("Tâche async terminée");
//     callback();
//   }, 2000);
// }

// console.log("Début");

// asyncTask(() => {
//   console.log("Callback exécuté");
// });

// console.log("Fin");

// Fonction asynchrone avec Promise
// function fetchData() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("Données reçues");
//     }, 2000);
//   });
// }

// console.log("Début");

// fetchData().then(result => {
//   console.log(result);
// });

// console.log("Fin");

// // async / await (la version propre ✨)
// async function getData() {
//   console.log("Début fonction");

//   const result = await fetchData();
//   console.log(result);

//   console.log("Fin fonction");
// }

// getData();


// 🧠 Différence essentielle
async function add(a, b) {
    // setTimeout(() => {
    //     console.log("add done !");
    //     return a+b;
    // }, 2000);
    for (let index = 0; index < 100000000000; index++) {
        // const element = array[index];
        
    }
    return a+b;
}

let sum = await add(2, 9);
console.log("sum = ", sum);
