// ====== Daily Challenge 1
const firstArr = [1, 4, 9, 16];

const secondArr = firstArr.map((value, index, arr) => {
    console.log(value); // each element
    console.log(index); // each index
    console.log(arr); // the firstArr (logged 4 times)
    return value * index;
});

console.log(secondArr);
//expected output : [ 0, 4, 18, 48 ]

// ====== Daily Challenge 2

// ====== Daily Challenge 3
