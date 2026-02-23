// ===== Exercise 1 : Giphy API #3
// const API_key = "hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My";
// const API_Griphy = "https://api.giphy.com/v1/gifs/search";
// let categorieInput = document.getElementById("categorieGif");
// let btn = document.getElementById("btn");
// let container = document.getElementById("container"); // ← ajoute un div dans ton HTML

// function fetchData() {
//     fetch(`${API_Griphy}?q=${categorieInput.value}&limit=100&offset=1&api_key=${API_key}`)
//     .then((response) => {
//         if (response.ok) {
//             return response.json();
//         } else {
//             throw new Error("Wrong artwork");
//         }
//     })
//     .then((obj) => {
//         console.log(obj);

//         // Vider le container avant d'afficher les nouveaux gifs
//         container.innerHTML = "";

//         // Parcourir les gifs et les afficher
//         obj.data.forEach(gif => {
//             const img = document.createElement("img");
//             img.src = gif.images.fixed_height.url;
//             img.alt = gif.title;
//             container.appendChild(img);
//         });
//     })
//     .catch((err) => {
//         console.log(`catch: ${err}`);
//     });
// }

// btn.addEventListener("click", (e) => {
//     e.preventDefault();
//     fetchData();
// });



// // ===== Exercise 2 : Analyze #4
// let resolveAfter2Seconds = function () {
//     console.log("starting slow promise");
//     return new Promise(resolve => {
//         setTimeout(function () {
//             resolve("slow");
//             console.log("slow promise is done");
//         }, 2000);
//     });
// };

// let resolveAfter1Second = function () {
//     console.log("starting fast promise");
//     return new Promise(resolve => {
//         setTimeout(function () {
//             resolve("fast");
//             console.log("fast promise is done");
//         }, 1000);
//     });
// };

// //The Promise.all() method returns a single Promise that fulfills when all of the promises passed as an iterable have been fulfilled.

// let concurrentPromise = function () {
//     console.log('==CONCURRENT START with Promise.all==');
//     return Promise.all([resolveAfter2Seconds(), resolveAfter1Second()]).then((messages) => {
//         console.log(messages[0]);
//         console.log(messages[1]);
//     });
// }

// setTimeout(concurrentPromise, 1000)

// Output => """
// ==CONCURRENT START with Promise.all==
// starting slow promise
// starting fast promise
// fast promise is done
// slow promise is done
// slow
// fast
// """


// // ===== Exercise 3 : Analyze #5
// let resolveAfter2Seconds = function () {
//     console.log("starting slow promise");
//     return new Promise(resolve => {
//         setTimeout(function () {
//             resolve("slow");
//             console.log("slow promise is done");
//         }, 2000);
//     });
// };

// let resolveAfter1Second = function () {
//     console.log("starting fast promise");
//     return new Promise(resolve => {
//         setTimeout(function () {
//             resolve("fast");
//             console.log("fast promise is done");
//         }, 1000);
//     });
// };

// let parallel = async function () {
//     console.log('==PARALLEL with await Promise.all==');
//     // Start 2 "jobs" in parallel and wait for both of them to complete
//     await Promise.all([
//         (async () => console.log(await resolveAfter2Seconds()))(),
//         (async () => console.log(await resolveAfter1Second()))()
//     ]);
// }

// setTimeout(parallel, 5000)

// Output => """
// ==CONCURRENT START with Promise.all==
// starting slow promise
// starting fast promise
// fast promise is done
// fast
// slow promise is done
// slow
// """


// // ===== Exercise 4 : Analyze #6
// let resolveAfter2Seconds = function () {
//     console.log("starting slow promise");
//     return new Promise(resolve => {
//         setTimeout(function () {
//             resolve("slow");
//             console.log("slow promise is done");
//         }, 2000);
//     });
// };

// let resolveAfter1Second = function () {
//     console.log("starting fast promise");
//     return new Promise(resolve => {
//         setTimeout(function () {
//             resolve("fast");
//             console.log("fast promise is done");
//         }, 1000);
//     });
// };

// // This function does not handle errors. See warning below!
// let parallelPromise = function () {
//     console.log('==PARALLEL with Promise.then==');
//     resolveAfter2Seconds().then((message) => console.log(message));
//     resolveAfter1Second().then((message) => console.log(message));
// }

// setTimeout(parallelPromise, 13000)

// Output => """
// ==PARALLEL with Promise.then==
// starting slow promise
// starting fast promise
// fast promise is done
// fast
// slow promise is done
// slow
// """