// ==========================================
// Exercise 1: Random Number
// ==========================================
// console.log("=== Exercise 1: Random Number ===");

// // Get a random number between 1 and 100
// const randomNumber = Math.floor(Math.random() * 100) + 1;
// console.log(`Random number: ${randomNumber}`);

// // Console.log all even numbers from 0 to the random number
// console.log("Even numbers:");
// for (let i = 0; i <= randomNumber; i++) {
//   if (i % 2 === 0) {
//     console.log(i);
//   }
// }

// ==========================================
// Exercise 2: Capitalized letters
// ==========================================
// console.log("\n=== Exercise 2: Capitalized letters ===");

// function capitalize(str) {
//   let evenCapitalized = "";
//   let oddCapitalized = "";
  
//   for (let i = 0; i < str.length; i++) {
//     if (i % 2 === 0) {
//       // Even index: capitalize in first string, lowercase in second
//       evenCapitalized += str[i].toUpperCase();
//       oddCapitalized += str[i].toLowerCase();
//     } else {
//       // Odd index: lowercase in first string, capitalize in second
//       evenCapitalized += str[i].toLowerCase();
//       oddCapitalized += str[i].toUpperCase();
//     }
//   }
  
//   return [evenCapitalized, oddCapitalized];
// }

// // Test the function
// console.log(capitalize("abcdef")); // ['AbCdEf', 'aBcDeF']
// console.log(capitalize("javascript")); // ['JaVaScRiPt', 'jAvAsCrIpT']

// ==========================================
// Exercise 3: Is palindrome?
// ==========================================
// console.log("\n=== Exercise 3: Is palindrome? ===");

// function isPalindrome(str) {
//   // Remove spaces and convert to lowercase for comparison
//   const cleanedStr = str.toLowerCase().replace(/\s/g, "");
  
//   // Compare the string with its reverse
//   const reversedStr = cleanedStr.split("").reverse().join("");
  
//   return cleanedStr === reversedStr;
// }

// // Test the function
// console.log(isPalindrome("madam")); // true
// console.log(isPalindrome("bob")); // true
// console.log(isPalindrome("kayak")); // true
// console.log(isPalindrome("hello")); // false
// console.log(isPalindrome("A man a plan a canal Panama")); // true (with spaces)

// ==========================================
// Exercise 4: Biggest Number
// ==========================================
// console.log("\n=== Exercise 4: Biggest Number ===");

// function biggestNumberInArray(arrayNumber) {
//   // Filter only numbers from the array
//   const numbers = arrayNumber.filter(item => typeof item === 'number' && !isNaN(item));
  
//   // If no numbers found, return 0
//   if (numbers.length === 0) {
//     return 0;
//   }
  
//   // Return the maximum number
//   return Math.max(...numbers);
// }

// // Test the function
// const array = [-1, 0, 3, 100, 99, 2, 99];
// console.log(`Array: [${array}]`);
// console.log(`Biggest number: ${biggestNumberInArray(array)}`); // should return 100

// const array2 = ['a', 3, 4, 2];
// console.log(`\nArray: [${array2}]`);
// console.log(`Biggest number: ${biggestNumberInArray(array2)}`); // should return 4

// const array3 = [];
// console.log(`\nArray: [${array3}]`);
// console.log(`Biggest number: ${biggestNumberInArray(array3)}`); // should return 0

// ==========================================
// Exercise 5: Unique Elements
// ==========================================
// console.log("\n=== Exercise 5: Unique Elements ===");

// function getUniqueElements(arr) {
//   // Method 1: Using Set (most efficient)
//   return [...new Set(arr)];
  
//   // Alternative Method 2: Using filter
//   // return arr.filter((item, index) => arr.indexOf(item) === index);
// }

// // Test the function
// const list = [1, 2, 3, 3, 3, 3, 4, 5];
// const newList = getUniqueElements(list);
// console.log(`Original list: [${list}]`);
// console.log(`Unique list: [${newList}]`); // [1, 2, 3, 4, 5]

// const list2 = ['a', 'b', 'c', 'a', 'b', 'd'];
// const newList2 = getUniqueElements(list2);
// console.log(`\nOriginal list: [${list2}]`);
// console.log(`Unique list: [${newList2}]`); // ['a', 'b', 'c', 'd']

// ==========================================
// Exercise 6: Calendar
// ==========================================
console.log("\n=== Exercise 6: Calendar ===");
console.log("Calendar function created! Open calendar.html in a browser to see the result.");

function createCalendar(year, month) {
  // Create table element
  const table = document.createElement('table');
  table.style.borderCollapse = 'collapse';
  table.style.margin = '20px';
  
  // Create table header with weekday names
  const thead = document.createElement('thead');
  const headerRow = document.createElement('tr');
  const weekdays = ['MO', 'TU', 'WE', 'TH', 'FR', 'SA', 'SU'];
  
  weekdays.forEach(day => {
    const th = document.createElement('th');
    th.textContent = day;
    th.style.border = '1px solid #ccc';
    th.style.padding = '10px';
    th.style.backgroundColor = '#f0f0f0';
    th.style.fontWeight = 'bold';
    headerRow.appendChild(th);
  });
  
  thead.appendChild(headerRow);
  table.appendChild(thead);
  
  // Create table body
  const tbody = document.createElement('tbody');
  
  // Get the first day of the month
  const firstDay = new Date(year, month - 1, 1);
  
  // Get the last day of the month
  const lastDay = new Date(year, month, 0);
  const daysInMonth = lastDay.getDate();
  
  // Get the day of the week for the first day (0=Sunday, 1=Monday, etc.)
  // Convert to Monday-based (0=Monday, 6=Sunday)
  let firstDayOfWeek = firstDay.getDay();
  firstDayOfWeek = firstDayOfWeek === 0 ? 6 : firstDayOfWeek - 1;
  
  let currentDay = 1;
  let weekRow = document.createElement('tr');
  
  // Fill empty cells before the first day of the month
  for (let i = 0; i < firstDayOfWeek; i++) {
    const emptyCell = document.createElement('td');
    emptyCell.style.border = '1px solid #ccc';
    emptyCell.style.padding = '10px';
    emptyCell.style.textAlign = 'center';
    emptyCell.style.width = '40px';
    emptyCell.style.height = '40px';
    weekRow.appendChild(emptyCell);
  }
  
  // Fill in the days of the month
  while (currentDay <= daysInMonth) {
    const dayCell = document.createElement('td');
    dayCell.textContent = currentDay;
    dayCell.style.border = '1px solid #ccc';
    dayCell.style.padding = '10px';
    dayCell.style.textAlign = 'center';
    dayCell.style.width = '40px';
    dayCell.style.height = '40px';
    weekRow.appendChild(dayCell);
    
    // If it's Sunday (end of week) or the last day of month
    if (weekRow.children.length === 7) {
      tbody.appendChild(weekRow);
      weekRow = document.createElement('tr');
    }
    
    currentDay++;
  }
  
  // Fill remaining cells in the last week if necessary
  if (weekRow.children.length > 0) {
    while (weekRow.children.length < 7) {
      const emptyCell = document.createElement('td');
      emptyCell.style.border = '1px solid #ccc';
      emptyCell.style.padding = '10px';
      emptyCell.style.textAlign = 'center';
      emptyCell.style.width = '40px';
      emptyCell.style.height = '40px';
      weekRow.appendChild(emptyCell);
    }
    tbody.appendChild(weekRow);
  }
  
  table.appendChild(tbody);
  
  return table;
}

// Make the function available globally for the HTML file
if (typeof window !== 'undefined') {
  window.createCalendar = createCalendar;
}
