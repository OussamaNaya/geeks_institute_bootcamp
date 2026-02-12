// ===== Exercise 1 : Analyzing the map method
// let l = [1, 2, 3].map(num => {
//   if (typeof num === 'number') return num * 2;
//   return ;
// });

// console.log(l);  // [2, 4, 6]


// ===== Exercise 2 : Analyzing the reduce method
// let l = [[0, 1], [2, 3]].reduce(
//   (acc, cur) => {
//     return acc.concat(cur);
//   },
//   [1, 2],
// );

// console.log(l); //[1, 2, 0, 1, 2, 3]

// ===== Exercise 3
// const arrayNum = [1, 2, 4, 5, 8, 9];
// const newArray = arrayNum.map((num, i) => {
//     console.log(num, i);
//     alert(num);
//     return num * 2;
// })
// console.log(i); // error : not defind


// ===== Exercise 4 : Nested arrays
const array = [[1],[2],[3],[[[4]]],[[[5]]]]
let l = array.flat(2);
array.forEach(element => {
    console.log(element)  
});

const greeting = [["Hello", "young", "grasshopper!"], ["you", "are"], ["learning", "fast!"]];
const result = greeting.map(arr => arr.join(" "));
console.log(result);

const finalString = greeting.map(arr => arr.join(" ")).join(" ");
console.log(finalString);


const trapped = [[[[[[[[[[[[[[[[[[[[[[[[[[3]]]]]]]]]]]]]]]]]]]]]]]]]]
console.log(trapped.flat(25))