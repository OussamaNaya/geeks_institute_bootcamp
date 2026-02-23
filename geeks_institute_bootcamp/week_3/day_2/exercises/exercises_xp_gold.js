// // ===== Exercise 1 : Giphy API #2
// const API_key = "hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My";
// const API_Griphy = "https://api.giphy.com/v1/gifs/search";

// let gifsSection = document.getElementById("gifs");
// let gifImg = document.getElementById("gifImg");

// fetch(`${API_Griphy}?q=sun&limit=1&offset=1&api_key=${API_key}`)
//     .then((response) => {
//         if(response.ok)
//         {
//             return response.json();
//         }
//         else
//         {
//             throw new Error("Wrong artwork");
//         }
//     })
//     .then((obj) => {
//         console.log(obj);

//         let objGif = document.createElement("div");
//         objGif.textContent  = obj;

//         const firstGif = obj.data[0];
//         console.log(`firstGif: `);
//         console.log(firstGif);
//         console.log("URL:", firstGif.images.fixed_height.url);

//         gifImg.id = firstGif.id;
//         gifImg.src = firstGif.images.fixed_height.url;

//         gifsSection.appendChild(objGif);
//     })
//     .catch((err) => {
//         console.log(`catch: ${err}`);
//     })


// // ===== Exercise 2 : Analyze #2
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

// let sequentialStart = async function () {
//     console.log('==SEQUENTIAL START==');
//     const slow = await resolveAfter2Seconds();
//     console.log(slow);
//     const fast = await resolveAfter1Second();
//     console.log(fast);
// }

// sequentialStart()

// Output => """
// ==SEQUENTIAL START==
// starting slow promise
// slow promise is done
// slow
// starting fast promise
// fast promise is done
// fast
// """


// // ===== Exercise 3: Analyze #3
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

// let concurrentStart = async function () {
//     console.log('==CONCURRENT START with await==');
//     const slow = resolveAfter2Seconds();
//     const fast = resolveAfter1Second();
//     console.log(await slow);
//     console.log(await fast);
// }

// setTimeout(concurrentStart, 4000)


// // ===== Exercise 4

// // ===== Exercise ...