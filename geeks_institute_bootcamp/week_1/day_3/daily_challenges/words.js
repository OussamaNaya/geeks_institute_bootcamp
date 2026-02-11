// ==========================================
// Daily Challenge : Words in a Frame
// ==========================================

function createFrame(wordsArray) {
  // Find the longest word to determine frame width
  let maxLength = 0;
  for (let word of wordsArray) {
    if (word.length > maxLength) {
      maxLength = word.length;
    }
  }
  
  // Create the top border
  const topBorder = '*'.repeat(maxLength + 4); // +4 for "* " and " *"
  console.log(topBorder);
  
  // Print each word with proper padding
  for (let word of wordsArray) {
    const padding = ' '.repeat(maxLength - word.length);
    console.log(`* ${word}${padding} *`);
  }
  
  // Create the bottom border
  const bottomBorder = '*'.repeat(maxLength + 4);
  console.log(bottomBorder);
}

// Example 1: As shown in the instructions
console.log('Example 1: Hello, World, in, a, frame');
const words1 = ['Hello', 'World', 'in', 'a', 'frame'];
console.log('Array:', JSON.stringify(words1));
console.log('');
createFrame(words1);

console.log('\n' + '='.repeat(50) + '\n');

// // Example 2: Different lengths
// console.log('Example 2: JavaScript, is, awesome');
// const words2 = ['JavaScript', 'is', 'awesome'];
// console.log('Array:', JSON.stringify(words2));
// console.log('');
// createFrame(words2);

// console.log('\n' + '='.repeat(50) + '\n');

// // Example 3: Single word
// console.log('Example 3: Programming');
// const words3 = ['Programming'];
// console.log('Array:', JSON.stringify(words3));
// console.log('');
// createFrame(words3);

// console.log('\n' + '='.repeat(50) + '\n');

// // Example 4: Multiple words with varying lengths
// console.log('Example 4: Code, Development, Fun, Learning, Together');
// const words4 = ['Code', 'Development', 'Fun', 'Learning', 'Together'];
// console.log('Array:', JSON.stringify(words4));
// console.log('');
// createFrame(words4);