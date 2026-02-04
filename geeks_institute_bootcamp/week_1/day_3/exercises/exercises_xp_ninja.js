// // ===== Exercise 1
// let containerDiv = document.getElementById("container");
// let clearButton = document.getElementById("clear");
// let counter = 0;


// setTimeout(() => {
//     alert("Hello World !")
// } , 2000);

// const timer = setInterval(addHelloWorld, 2000);

// function addHelloWorld()
// {
//     if(counter >= 5){
//         clearInterval(timer);
//         return;
//     }

//     let newP = document.createElement("p");
//     newP.textContent = "Hello World !";

//     containerDiv.appendChild(newP);
//     counter ++;
// }

// clearButton.addEventListener("click", () => {
//     alert("Done");
//     clearInterval(timer);
// });

// // ===== Exercise 2
const button = document.getElementById("btn");
const box = document.getElementById("animate");
const container = document.getElementById("container");

let interval;

button.addEventListener("click", myMove);

function myMove() {
  let position = 0;

  // sécurité : stop ancien interval si on reclique
  clearInterval(interval);

  interval = setInterval(() => {
    if (position >= container.offsetWidth - box.offsetWidth) {
      clearInterval(interval); // stop animation
    } else {
      position++;
      box.style.left = position + "px";
    }
  }, 1);
}

// // ===== Exercise 3

// // ===== Exercise 4

// // ===== Exercise ...