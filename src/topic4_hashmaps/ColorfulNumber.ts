function isColorfulNumber(num: number): boolean {
  const digits = num.toString().split('').map(Number);
  const products = new Set<number>();

  for (let i = 0; i < digits.length; i++) {
    let product = 1;

    for (let j = i; j < digits.length; j++) {
      product *= digits[j];

      if (products.has(product)) {
        return false;
      }

      products.add(product);
    }
  }

  return true;
}

const example1 = 3245;
const example2 = 326;

console.log(`Is ${example1} a colorful number? ${isColorfulNumber(example1)}`);
console.log(`Is ${example2} a colorful number? ${isColorfulNumber(example2)}`);
