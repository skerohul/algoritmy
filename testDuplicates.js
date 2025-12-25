function generateData(size) {
  const arr = [];
  for (let i = 0; i < size; i++) {
    arr.push("item" + (i % 100));
  }
  return arr;
}

function measure(name, fn) {
  const start = performance.now();
  fn();
  const end = performance.now();
  console.log(name + ": " + (end - start).toFixed(2) + " ms");
}

const smallData = generateData(1000);
const bigData = generateData(50000);

console.log("Test – 1000 prvků");
measure("Pole", () => removeDuplicatesList(smallData));
measure("Set", () => removeDuplicatesSet(smallData));

console.log("Test – 50 000 prvků");
measure("Pole", () => removeDuplicatesList(bigData));
measure("Set", () => removeDuplicatesSet(bigData));