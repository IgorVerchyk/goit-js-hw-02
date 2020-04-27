const logItems = function (logItems) {
  for (let i = 0; i < logItems.length; i += 1) {
    const sequenseNumber = `${i + 1}-${logItems[i]}`;
    console.log(sequenseNumber);
  }
};
logItems(["Mango", "Poly", "Ajax", "Lux", "Jay", "Kong"]);

logItems([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);
