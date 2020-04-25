const formatString = function (string) {
  let splitedString = string.split("");
  //let cuttedText;
  //if (splitedString.length < 40) {
  // cuttedText = splitedString.join("");
  //} else {
  // splitedString.length = 40;
  // cuttedText = `${splitedString.join("")}...`;
  //}
  //return cuttedText;
  return splitedString.lenght < 40
    ? splitedString.join("")
    : ((splitedString.length = 40), `${splitedString.join("")}...`);
};
console.log(formatString("Curabitur ligula sapien, tincidunt non."));

console.log(formatString("Vestibulum facilisis, purus nec pulvinar iaculis."));

console.log(formatString("Curabitur ligula sapien."));

console.log(
  formatString(
    "Nunc sed turpis. Curabitur a felis in nunc fringilla tristique."
  )
);
