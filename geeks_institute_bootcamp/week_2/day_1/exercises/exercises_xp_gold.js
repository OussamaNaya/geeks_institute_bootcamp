// ===== Exercise 1
// Returns "____/''''\____"
// let landscape = () => {

//     let result = "";

//     let flat = (x) => {
//         for(let count = 0; count < x; count++){
//             result = result + "_";
//         }
//     }

//     let mountain = (x) => {
//         result = result + "/"
//         for(let counter = 0; counter < x; counter++){
//             result = result + "'";
//         }
//         result = result + "\\";
//     }

//     flat(4);
//     mountain(4);
//     flat(4);

//     return result;
// }

// landscape()

// ===== Exercise 2 : Closure
// Response => 13
// const addTo = x => y => x + y;
// const addToTen = addTo(10);

// console.log(addToTen(3))


// ===== Exercise 3 : Currying
// Response => 31
// const curriedSum = (a) => (b) => a + b
// console.log(curriedSum(30)(1));


// ===== Exercise 4 : Currying
// Response => 17
// const curriedSum = (a) => (b) => a + b
// const add5 = curriedSum(5)
// add5(12)


// ===== Exercise 5 : Composing
// Response => 16
// const compose = (f, g) => (a) => f(g(a));
// const add1 = (num) => num + 1;
// const add5 = (num) => num + 5;
// compose(add1, add5)(10)
