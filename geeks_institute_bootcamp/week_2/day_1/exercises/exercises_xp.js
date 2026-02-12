// ===== Exercise 1 : Scope
// #1
// function funcOne() {
//     const a = 5;
//     if(a > 1) {
//         a = 3;
//     }
//     console.log(`inside the funcOne function ${a}`);
// }

// // #1.1 - run in the console:
// funcOne()
// #1.2 What will happen if the variable is declared 
// with const instead of let ?
// Response => the code will catch because the variable constante.

// //#2
// let a = 0;
// function funcTwo() {
//     a = 5;
// }

// function funcThree() {
//     console.log(`inside the funcThree function ${a}`);
// }

// // #2.1 - run in the console:
// funcThree()
// funcTwo()
// funcThree()
// // #2.2 What will happen if the variable is declared 
// // with const instead of let ?
// // Response => the code will catched because the variable is constant


// //#3
// function funcFour() {
//     window.a = "hello";
// }


// function funcFive() {
//     console.log(`inside the funcFive function ${a}`);
// }

// // #3.1 - run in the console:
// funcFour()
// funcFive()

// //#4
// let a = 1;
// function funcSix() {
//     let a = "test";
//     // console.log(a)
//     console.log(`inside the funcSix function ${a}`);
// }


// // #4.1 - run in the console:
// funcSix()
// // #4.2 What will happen if the variable is declared 
// // with const instead of let ?
// // Response => the code will be good no catch!

// //#5
// let a = 2;
// if (true) {
//     let a = 5;
//     console.log(`in the if block ${a}`);
// }
// console.log(`outside of the if block ${a}`);

// // #5.1 - run the code in the console
// // #5.2 What will happen if the variable is declared 
// // with const instead of let ?
// // Response => the code will be good no catch!


// ===== 🌟 Exercise 2 : Ternary operator
// const winBattle = () => {
//     return true;
// }

// let experiencePoints;

// winBattle() ? experiencePoints = 10 : experiencePoints = 1;
// console.log(experiencePoints);

// ===== 🌟 Exercise 3 : Is it a string ?
// const isString = (param) => typeof param === "string";

// console.log(isString('hello')); 
// console.log(isString([1, 2, 4, 0]));

// ===== 🌟 Exercise 4 : Find the sum
// const sum = (a, b) => a+b;

// console.log(`sum of 1 and 2 is ${sum(1, 2)}`);


// // ===== 🌟 Exercise 5 : Kg and grams
// // 1. Function declaration
// function kgToGramsDeclaration(weightKg) {
//     return weightKg * 1000;
// }
// console.log(kgToGramsDeclaration(2)); // 2000

// // 2. Function expression
// const kgToGramsExpression = function(weightKg) {
//     return weightKg * 1000;
// };
// console.log(kgToGramsExpression(2)); // 2000


// // 3. Arrow function (one-liner)
// const kgToGramsArrow = (weightKg) => weightKg * 1000;
// console.log(kgToGramsArrow(2)); // 2000


// // ===== 🌟 Exercise 6 : Fortune teller
// (
//     function(numberOfChildren, partnerName, geoLocation, jobTitle) {
//         const result = document.getElementById('fortune-result');
//         result.innerHTML = `
//             <strong>You will be a ${jobTitle}</strong> in <strong>${geoLocation}</strong>, 
//             and married to <strong>${partnerName}</strong> with <strong>${numberOfChildren}</strong> kids.
//         `;
//     }
// )(3, "Mary", "Casablanca", "Développeur Web");


// // ===== 🌟 Exercise 7 : Welcome
// (function(userName) {
//     const navbar = document.querySelector('.navbar');
//     const userDiv = document.getElementById('user-profile');
    
//     userDiv.innerHTML = `
//         <div class="profile-pic">👤</div>
//         <span>Welcome, <strong>${userName}</strong>!</span>
//     `;
    
//     userDiv.classList.remove('hidden');
// })( "John" );



// 🌟 EXERCICE 8 : Juice Bar 
function makeJuice(size) {
    function addIngredients(ing1, ing2, ing3) {
        document.getElementById('juice-result').innerHTML = `
            <div class="juice-message">
                The client wants a <strong>${size} drink</strong> juice, 
                containing <strong>${ing1}</strong>, <strong>${ing2}</strong>, <strong>${ing3}</strong>.
            </div>
        `;
    }
    addIngredients("orange", "banana", "apple"); // Appel unique
}

makeJuice("medium"); // Invocation globale

function makeJuicePartII(size) {
    const ingredients = []; // Array vide
    
    function addIngredients(ing1, ing2, ing3) {
        ingredients.push(ing1, ing2, ing3); // Push dans array
    }
    
    function displayJuice() {
        const juiceContent = ingredients.join(", ");
        document.getElementById('juice-result').innerHTML = `
            <div class="juice-message">
                The client wants a <strong>${size} drink</strong> juice, 
                containing <strong>${juiceContent}</strong>.
            </div>
        `;
    }
    
    // Appel addIngredients DEUX FOIS (6 ingrédients)
    addIngredients("orange", "banana", "apple");
    addIngredients("strawberry", "blueberry", "mango");
    
    displayJuice(); // Appel unique
}

makeJuicePartII("large"); // Invocation globale


