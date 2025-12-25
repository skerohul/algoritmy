function sumPositive(arr) {
  if (!Array.isArray(arr)) {
    return 0;
  }

  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "number" && arr[i] > 0) {
      sum += arr[i];
    }
  }

  return sum;
}

// TESTY
const tests = [
  { input: [], expected: 0 },
  { input: [-4, -8, -15], expected: 0 },
  { input: [-3, 7, 2, -1], expected: 9 },
  { input: [1000000, 500000, -200000], expected: 1500000 },
  { input: [1, 2, 3, -5, 4, 6], expected: 16 }
];

for (let i = 0; i < tests.length; i++) {
  const result = sumPositive(tests[i].input);
  const status = result === tests[i].expected ? "OK" : "FAIL";

  console.log("Test", i + 1);
  console.log("Vstup:", tests[i].input);
  console.log("Očekávaný výsledek:", tests[i].expected);
  console.log("Skutečný výsledek:", result);
  console.log(status);
  console.log("----------------");
}