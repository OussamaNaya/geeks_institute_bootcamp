// ===== Exercise 1
// function displayNumbersDivisible(divisor){
//     let Outcome = "";
//     let sum = 0;

//     console.log("all the numbers divisible by " + divisor + ", and their sum : ");
//     for (let index = 0; index < 500; index++) {
//         if(index%divisor === 0)
//         {
//             Outcome += " "+index;
//             sum += index;
//         }   
//     }
//     console.log("Outcome : ", Outcome); 
//     console.log("Sum : ", sum);     
// }

// displayNumbersDivisible(23);

// ===== Exercise 2
// const stock = { 
//     "banana": 6, 
//     "apple": 0,
//     "pear": 12,
//     "orange": 32,
//     "blueberry":1
// };  

// const prices = {    
//     "banana": 4, 
//     "apple": 2, 
//     "pear": 1,
//     "orange": 1.5,
//     "blueberry":10
// }; 

// const shoppingList = ["banana", "orange", "apple"];

// function myBill() {
//     let total = 0;

//     for (let item of shoppingList) {
//         if (item in stock && stock[item] > 0) {
//             total += prices[item];      
//             stock[item] -= 1;           
//         }
//     }

//     return total;
// }

// let totalPrice = myBill();
// console.log("Total price:", totalPrice);
// console.log("Updated stock:", stock);


// ===== Exercise 3
// function changeEnough(itemPrice, amountOfChange) {
//     const coinValues = [0.25, 0.10, 0.05, 0.01]; // quarters, dimes, nickels, pennies

//     let totalChange = 0;

//     for (let i = 0; i < amountOfChange.length; i++) {
//         totalChange += amountOfChange[i] * coinValues[i];
//     }

//     return totalChange >= itemPrice;
// }

// console.log(changeEnough(4.25, [25, 20, 5, 0])); 
// console.log(changeEnough(14.11, [2, 100, 0, 0]));
// console.log(changeEnough(0.75, [0, 0, 20, 5])); 


// ===== Exercise 4
// function hotelCost()
// {
//     let nbrNight;
//     do {
//         nbrNight = prompt("Give me th enumber of night do you want to spend !");
//         nbrNight = Number(nbrNight);        
//     } while (isNaN(nbrNight) || nbrNight < 1);

//     return nbrNight * 140;

// }

// function planeRideCost() {
//     let destination;

//     do {
//         destination = prompt("Where is your destination?");
//     } while (!destination || typeof destination !== "string");

//     destination = destination.toLowerCase();

//     if (destination === "london") return 183;
//     if (destination === "paris") return 220;
//     return 300;
// }

// function rentalCarCost() {
//     let days;

//     do {
//         days = prompt("How many days do you want to rent the car?");
//         days = Number(days);
//     } while (isNaN(days) || days <= 0);

//     let total = days * 40;

//     if (days > 10) total *= 0.95; // 5% discount

//     return total;
// }

// function totalVacationCost() {
//     const plane = planeRideCost();
//     const car = rentalCarCost();
//     const hotel = hotelCost();

//     console.log(`The car cost: $${car}, the hotel cost: $${hotel}, the plane tickets cost: $${plane}.`);
//     return car + hotel + plane;
// }

// totalVacationCost();


// ===== Exercise 5
// let div = document.getElementById("container");
// console.log(div);

// let uls = document.getElementsByClassName("list");
// let firstUl = uls[0];
// let petLi = firstUl.getElementsByTagName("li")[1];
// console.log(petLi.textContent);

// setTimeout(() => {
//     petLi.textContent = "Richard";    
// }, 2000);

// let secondUl = uls[1];
// let secondLi = secondUl.getElementsByTagName("li")[1];
// console.log(secondLi);

// setTimeout(() => {
//     secondUl.removeChild(secondLi);
// }, 4000);

// setTimeout(() => {
//     let tempLi;
//     for (let ul of uls) {
//         tempLi = ul.getElementsByTagName("li")[0];
//         tempLi.textContent = "Oussama Naya";
//     }    
// }, 6000);

// setTimeout(() => {
//     for (let ul of uls) {
//         ul.classList.add("student_list");
//     }    
// }, 8000);

// setTimeout(() => {
//     uls[0].classList.add("university", "attendance");
// }, 10000);

// setTimeout(() => {
//     div.style.backgroundColor = "lightblue";
//     div.style.width = "100%";
//     div.style.marginLeft = "auto";
//     div.style.marginRight = "auto";
//     div.style.padding = "20px";
// }, 12000);

// setTimeout(() => {
//     let tempLis = document.getElementsByTagName("li");
//     for (let li of tempLis) {
//         if(li.textContent === "Dan") 
//             uls[1].removeChild(li);
//     }   
// }, 14000);

// setTimeout(() => {
//     let tempLis = document.getElementsByTagName("li");
//     for (let li of tempLis) {
//         if(li.textContent === "Richard") 
//             li.style.border = "1px solid black";
//     }
// }, 16000);

// let isShowed = false;
// let countdown = setInterval(() => {
//     if(div.style.backgroundColor == "lightblue")
//     {
//         console.log("bg color is light blue !");

//         let tempLis = uls[0].getElementsByTagName("li");
//         let x = tempLis[0].textContent;
//         let y = tempLis[1].textContent;

//         alert("Hello "+x+" and "+y);
//         isShowed = true;
//     }

//     if (isShowed) {
//         clearInterval(countdown);
//         console.log("Time's up!");
//     }
// }, 1000); // 1000ms = 1 seconde


// ===== Exercise 6
let div = document.getElementById("navBar");
div.setAttribute("id", "socialNetworkNavigation");

let newLi = document.createElement("li");
newLi.innerHTML = '<a href="#">Logout</a>';

let ul = document.getElementsByTagName("ul")[0];
ul.appendChild(newLi);

let firstLi = ul.firstElementChild;
console.log("firstLi : ", firstLi);

let lastLi = ul.lastElementChild;
console.log("lastLi : ", lastLi);