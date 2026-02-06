// ===== Exercise 1
function isBlank(str) {
  if (str === "") {
    return true;
  } else {
    return false;
  }
}

console.log(isBlank(""));      // true
console.log(isBlank("abc"));   // false

// ===== Exercise 2
function abbrevName(name) {
  let parts = name.split(" ");
  return parts[0] + " " + parts[1][0] + ".";
}

console.log(abbrevName("Robin Singh")); // Robin S.


// ===== Exercise 3
function swapCase(str) {
  let result = "";

  for (let i = 0; i < str.length; i++) {
    let char = str[i];

    if (char === char.toUpperCase()) {
      result += char.toLowerCase();
    } else {
      result += char.toUpperCase();
    }
  }

  return result;
}

console.log(swapCase("The Quick Brown Fox"));


// ===== Exercise 4
function isOmnipresent(arr, value) {
  for (let i = 0; i < arr.length; i++) {
    if (!arr[i].includes(value)) {
      return false;
    }
  }
  return true;
}

console.log(isOmnipresent([[1,1],[1,3],[5,1],[6,1]], 1)); // true
console.log(isOmnipresent([[1,1],[1,3],[5,1],[6,1]], 6)); // false


// ===== Exercise 5
let table = document.body.firstElementChild;

for (let i = 0; i < table.rows.length; i++) {
  table.rows[i].cells[i].style.backgroundColor = "red";
}
