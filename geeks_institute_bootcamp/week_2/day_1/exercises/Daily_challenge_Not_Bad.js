let sentence = "The movie is not that bad, I like it";
console.log("sentence : ", sentence);

let wordNot = sentence.indexOf("not");
console.log("Position of 'not':", wordNot);

let wordBad = sentence.indexOf("bad");
console.log("Position of 'bad':", wordBad);

if (wordNot !== -1 && wordBad !== -1 && wordBad > wordNot) {
  // Remplacer "not ... bad" par "good"
  let newSentence = sentence.slice(0, wordNot) + "good" + sentence.slice(wordBad + 3);
  console.log("Modified sentence:", newSentence);
} else {
  console.log("Sentence unchanged:", sentence);
}