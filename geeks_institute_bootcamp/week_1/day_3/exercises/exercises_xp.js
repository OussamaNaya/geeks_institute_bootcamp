// ===== Exercise 1
// let article = document.getElementsByTagName("article")[0];
// let h1 = document.getElementsByTagName("h1")[0];
// let ps = document.getElementsByTagName("p");
// let lastP = ps[ps.length - 1];
// let h2 = document.getElementsByTagName("h2")[0];
// let h3 = document.getElementsByTagName("h3")[0];
// let submit = document.getElementById("submit");
// let body = document.body;
// const secondP = ps[1]; 


// console.log("article = ", article);
// console.log("h1 = ", h1);
// console.log("lastP = ", lastP);
// console.log("h2 = ", h2);
// console.log("h3 = ", h3);
// console.log("submit = ", submit);

// try {   
//     article.removeChild(lastP);  
    
//     h2.addEventListener("click", () => {
//         h2.classList.toggle("red");
//     });   

//     h3.addEventListener("click", () => {
//         h3.classList.add("hed");
//     });     
    
//     submit.addEventListener("click", () => {
//         body.classList.toggle("bold");
//     }); 

//     h1.addEventListener("mouseover", () => {
//         const randomSize = Math.floor(Math.random() * 101); 
//         h1.style.fontSize = randomSize + "px";
//     });

//     secondP.addEventListener("mouseover", () => {
//         secondP.classList.remove("fade-in");
//         secondP.classList.add("fade-out");
//     });

//     secondP.addEventListener("mouseleave", () => {
//         secondP.classList.remove("fade-out");
//         secondP.classList.add("fade-in");
//     });
// } catch (error) {
//     console.error(error);
// }

// ===== Exercise 2
// let myForm = document.forms[0];

// let inputFname = document.getElementById("fname");
// let inputLname = document.getElementById("lname");
// let inputSubmit = document.getElementById("submit");

// let inputFirstname = document.getElementsByName("firstname")[0];
// let inputLastname = document.getElementsByName("lastname")[0];
// let inputSubmitName = document.getElementsByName("Submit")[0];

// let ul = document.getElementsByClassName("usersAnswer")[0];


// console.log("myForm : ", myForm);

// console.log("inputFname : ", inputFname);
// console.log("inputLname : ", inputLname);
// console.log("inputSubmit : ", inputSubmit);

// console.log("inputFirstname : ", inputFirstname);
// console.log("inputLastname : ", inputLastname);
// console.log("inputSubmitName : ", inputSubmitName);


// console.log("ul : ", ul);


// inputSubmitName.addEventListener("click", (e) => {
//     e.preventDefault(); // stop refresh

//     let inputFname = document.getElementById("fname");
//     let inputLname = document.getElementById("lname");

//     if(inputFname.value === "" || inputLname.value === "")
//     {
//         alert("Please fill in both fields 📝");
//         return;
//     }

//     let firstLi = document.createElement("li");
//     firstLi.textContent = "first name is " + inputFname.value;
//     ul.appendChild(firstLi);    
    
//     let secondLi = document.createElement("li");
//     secondLi.textContent = "last name is " + inputLname.value;
//     ul.appendChild(secondLi);
// });

// ===== Exercise 3
// let allBoldItems;

// // function to collect all <strong>
// function getBoldItems() {
//   allBoldItems = document.querySelectorAll("#myParagraph strong");
// }

// // function to highlight in blue
// function highlight() {
//   allBoldItems.forEach(item => {
//     item.style.color = "blue";
//   });
// }

// // function to return to black
// function returnItemsToDefault() {
//   allBoldItems.forEach(item => {
//     item.style.color = "black";
//   });
// }

// // call getBoldItems once
// getBoldItems();

// // add events to paragraph
// const paragraph = document.getElementById("myParagraph");

// paragraph.addEventListener("mouseover", highlight);
// paragraph.addEventListener("mouseout", returnItemsToDefault);

// ===== Exercise 4
// récupère le formulaire et les champs
const form = document.getElementById("MyForm");
const radiusInput = document.getElementById("radius");
const volumeInput = document.getElementById("volume");

form.addEventListener("submit", (e) => {
    e.preventDefault(); // stop le refresh de page

    const radius = parseFloat(radiusInput.value);

    // check si c'est un nombre
    if (isNaN(radius) || radius <= 0) {
        alert("Please enter a valid radius 👍");
        return;
    }

    // calcule le volume
    const volume = (4 / 3) * Math.PI * Math.pow(radius, 3);

    // arrondir à 2 décimales
    volumeInput.value = volume.toFixed(2);
});


// ===== Exercise ...