process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString: string = '';
let inputLines: string[] = [];
let currentLine: number = 0;

process.stdin.on('data', function (inputStdin: string): void {
  inputString += inputStdin;
});

process.stdin.on('end', function (): void {
  inputLines = inputString.split('\n');
  inputString = '';

  main();
});

function readLine(): string {
  return inputLines[currentLine++];
}

function insertionSort2(n: number, arr: number[]): void {
  // Loop through the array starting from the second element
  for (let i = 1; i < n; i++) {
    // The 'key' is the current element we're trying to place in the sorted part
    let elementToSort = arr[i];
    // Start comparing the current element with the previous elements
    let previousElementIdx = i - 1;

    // Move elements of arr[0..i-1], that are greater than 'key', one position ahead
    // of their current position to make space for 'key'
    while (previousElementIdx >= 0 && arr[previousElementIdx] > elementToSort) {
      arr[previousElementIdx + 1] = arr[previousElementIdx]; // Shift the element to the right
      previousElementIdx = previousElementIdx - 1; // Move the pointer to the previous element
    }
    // Place the 'key' in its correct position
    arr[previousElementIdx + 1] = elementToSort;

    // Print the array after placing 'key' in its sorted position
    console.log(arr.join(' '));
  }
}

function main() {
  const n: number = parseInt(readLine().trim(), 10);

  const arr: number[] = readLine()
    .replace(/\s+$/g, '')
    .split(' ')
    .map((arrTemp) => parseInt(arrTemp, 10));

  insertionSort2(n, arr);
}
