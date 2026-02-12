// Exercise 1 : Merge Words

const mergeWords = (string) => (nextString) => {
    return  nextString === undefined ? string : mergeWords(string + ' ' + nextString);
}

console.log(mergeWords('There')('is')('no')('spoon.')());