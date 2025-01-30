function gcd(a, b) {
  if (b === 0) {
    return a;
  } else {
    return gcd(b, a % b);
  }
}

console.log(gcd(10, 2)); // Expected output: 2, Actual output: 2
console.log(gcd(15, 5)); // Expected output: 5, Actual output: 5