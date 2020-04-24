const logItems = function (logItems) {
  for (let i = 0; i < logItems.length; i += 1) {
    const a = `${i + 1}-${logItems[i]}`;
    console.log(a);
  }
};
logItems(["Mango", "Poly", "Ajax", "Lux", "Jay", "Kong"]);

logItems([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);
