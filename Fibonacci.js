/**
 *
 * @param {number} n fibonacci array length
 * @returns Array of fibonacci numbers
 */
function fibonacci(n) {
  const fibArr = [0, 1];

  if (n < 2) return fibArr.slice(0, n);

  for (let i = 2; i < n; i++) {
    const nextFib = fibArr[i - 1] + fibArr[i - 2];
    fibArr.push(nextFib);
  }

  return fibArr;
}

/**
 *
 * @param {number} num fibonacci sequence length
 * @param {array} sequence array of starter fibonacci sequence
 * @returns return Fibonacci sequence till the given length
 */
function fibonacciRecursive(num, sequence = [0, 1]) {
  if (num <= sequence.length) {
    return sequence.slice(0, num);
  }

  newFib = sequence[sequence.length - 1] + sequence[sequence.length - 2];
  sequence.push(newFib);
  return fibonacciRecursive(num, sequence);
}

console.log('Iterative function tests:');
console.log('0 Fibs:', fibonacci(0)); // []
console.log('1 Fibs:', fibonacci(1)); // [0]
console.log('1 Fibs:', fibonacci(2)); // [0, 1]
console.log('7 Fibs:', fibonacci(12)); // [0,  1,  1,  2,  3, 5,  8, 13, 21, 34, 55, 89]

console.log('Recursive function tests:');
console.log('0 Fibs:', fibonacciRecursive(0)); // []
console.log('1 Fibs:', fibonacciRecursive(1)); // [0]
console.log('1 Fibs:', fibonacciRecursive(2)); // [0, 1]
console.log('7 Fibs:', fibonacciRecursive(12)); // [0,  1,  1,  2,  3, 5,  8, 13, 21, 34, 55, 89]
