const findLongestWord = function (string) {
  const splitText = string.split(" ");
  let longestWord = splitText[0];
  for (let i = 0; i < splitText.length; i += 1) {
    if (splitText[i].length > longestWord.length) {
      longestWord = splitText[i];
    }
  }
  return longestWord;
};
console.log(findLongestWord("The quick brown fox jumped over the lazy dog")); // 'jumped'

console.log(findLongestWord("Google do a roll")); // 'Google'

console.log(findLongestWord("May the force be with you")); // 'force'
