console.log("Hiii !");

function isAnagram(str1, str2) {
  const format = str =>
    str
      .toLowerCase()
      .replace(/\s+/g, "")
      .split("")
      .sort()
      .join("");

  return format(str1) === format(str2);
}



console.log(isAnagram("Astronomer", "Moon starer")); // true
isAnagram("School master", "The classroom"); // true
isAnagram("The Morse Code", "Here come dots"); // true
isAnagram("Hello", "World"); // false
