// ====== Daily Challenge 1

function makeAllCaps(words) {
  return new Promise((resolve, reject) => {
    const allStrings = Array.isArray(words) && words.every((w) => typeof w === 'string');

    if (!allStrings) {
      return reject('All items in the array must be strings');
    }

    const uppercased = words.map((w) => w.toUpperCase());
    resolve(uppercased);
  });
}

function sortWords(words) {
  return new Promise((resolve, reject) => {
    if (!Array.isArray(words) || words.length <= 4) {
      return reject('Array length must be greater than 4');
    }

    const sorted = [...words].sort();
    resolve(sorted);
  });
}

// Tests
makeAllCaps([1, 'pear', 'banana'])
  .then((arr) => sortWords(arr))
  .then((result) => console.log(result))
  .catch((error) => console.log('Test 1 error:', error));

makeAllCaps(['apple', 'pear', 'banana'])
  .then((arr) => sortWords(arr))
  .then((result) => console.log(result))
  .catch((error) => console.log('Test 2 error:', error));

makeAllCaps(['apple', 'pear', 'banana', 'melon', 'kiwi'])
  .then((arr) => sortWords(arr))
  .then((result) => console.log('Test 3 success:', result))
  .catch((error) => console.log('Test 3 error:', error));

// ====== Daily Challenge 2

const morse = `{
  "0": "-----",
  "1": ".----",
  "2": "..---",
  "3": "...--",
  "4": "....-",
  "5": ".....",
  "6": "-....",
  "7": "--...",
  "8": "---..",
  "9": "----.",
  "a": ".-",
  "b": "-...",
  "c": "-.-.",
  "d": "-..",
  "e": ".",
  "f": "..-.",
  "g": "--.",
  "h": "....",
  "i": "..",
  "j": ".---",
  "k": "-.-",
  "l": ".-..",
  "m": "--",
  "n": "-.",
  "o": "---",
  "p": ".--.",
  "q": "--.-",
  "r": ".-.",
  "s": "...",
  "t": "-",
  "u": "..-",
  "v": "...-",
  "w": ".--",
  "x": "-..-",
  "y": "-.--",
  "z": "--..",
  ".": ".-.-.-",
  ",": "--..--",
  "?": "..--..",
  "!": "-.-.--",
  "-": "-....-",
  "/": "-..-.",
  "@": ".--.-.",
  "(": "-.--.",
  ")": "-.--.-"
}`;

function toJs() {
  return new Promise((resolve, reject) => {
    try {
      const morseJS = JSON.parse(morse);
      if (!morseJS || Object.keys(morseJS).length === 0) {
        return reject('Morse object is empty');
      }
      resolve(morseJS);
    } catch (e) {
      reject('Failed to parse morse JSON');
    }
  });
}

function toMorse(morseJS) {
  return new Promise((resolve, reject) => {
    const input =
      typeof prompt === 'function' ? prompt('Enter a word or sentence to translate to Morse:') : null;

    if (!input) {
      return reject('No input provided');
    }

    const chars = input.toLowerCase().split('');
    const translation = [];

    for (const ch of chars) {
      if (ch === ' ') {
        translation.push(' / ');
        continue;
      }

      if (!morseJS[ch]) {
        return reject(`Character "${ch}" is not supported in Morse mapping`);
      }

      translation.push(morseJS[ch]);
    }

    resolve(translation);
  });
}

function joinWords(morseTranslation) {
  const output = morseTranslation.join('\n');

  if (typeof document !== 'undefined') {
    let container = document.getElementById('morse-output');
    if (!container) {
      container = document.createElement('pre');
      container.id = 'morse-output';
      document.body.appendChild(container);
    }
    container.textContent = output;
  } else {
    console.log(output);
  }
}

toJs()
  .then((morseJS) => toMorse(morseJS))
  .then((morseTranslation) => joinWords(morseTranslation))
  .catch((err) => console.log('Morse error:', err));

// ====== Daily Challenge 3
