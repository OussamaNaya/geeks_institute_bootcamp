// 1st daily challenge
function makeAllCaps(names)
{
  return new Promise((resolve, reject) => {
    names.forEach(name => {
        if( typeof name !== "string")
        {
            reject("Ooops");
            return; // stoppe la fonction après reject          
        }
    });

    names.forEach((name, index, arr) => {
      arr[index] = name.toUpperCase();
    });
    resolve(names);
  })
}

function sortWords(namesUpperCase)
{
  return new Promise((resolve, reject) => {
    if(namesUpperCase.length > 4)
    {
      resolve(namesUpperCase.sort())
    }
    else
    {
      reject("the lenght of array less then 4.")
    }
  });
}


let names = ["Oussama", "Othman", "Mohammed", "Ali", "Iman", "Ahmmed"];

makeAllCaps(names)
  .then(result => {
    console.log(result)
    return sortWords(result); // retourne la Promise suivante
  })
  .then(sortedResult => {
    console.log("Sorted:", sortedResult);
  })
  .catch(message => console.log(message));


// sortWords(namesUpperCase)
//   .then(result => console.log(result))
//   .catch(message => console.log(message));

// 2nd daily challenge
function toJs() {
  return new Promise((resolve, reject) => {
    try {
      const morseJS = JSON.parse(morse); // transforme la chaîne en objet
      if (Object.keys(morseJS).length === 0) {
        reject("Morse object is empty!");
      } else {
        resolve(morseJS);
      }
    } catch (error) {
      reject("Invalid JSON!");
    }
  });
}
