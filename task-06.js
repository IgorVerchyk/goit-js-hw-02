function sumInput() {
  let numbers = [];

  while (true) {
    let input = prompt("Please, enter you number");
    if (input === "" || input === null) break;
    numbers.push(+input);
  }

  let total = 0;
  for (let i = 0; i < numbers.length; i += 1) {
    total += numbers[i];
  }
  return total;
}

console.log(sumInput());
