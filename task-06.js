function sumInput() {
  let numbers = [];

  while (true) {
    let input = prompt("Please, enter you number");
    if (input === "" || input === null) break;
    numbers.push(+input);
  }
  let total = 0;
  if (numbers.length > 1) {
    for (let i = 0; i < numbers.length; i += 1) {
      total += numbers[i];
    }
  } else {
    total = `Array is empty`;
  }
  return total;
}

console.log(sumInput());
