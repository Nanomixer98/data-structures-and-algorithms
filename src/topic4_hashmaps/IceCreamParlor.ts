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
function icecreamParlor(m: number, arr: number[]): number[] {
  const costMap: { [key: number]: number } = {};

  for (let i = 0; i < arr.length; i++) {
    const cost = arr[i];
    const complement = m - cost;

    if (complement in costMap) {
      return [costMap[complement] + 1, i + 1];
    }

    costMap[cost] = i;
  }

  return [];
}

function main() {
  const t: number = parseInt(readLine().trim(), 10);

  for (let tItr: number = 0; tItr < t; tItr++) {
    const m: number = parseInt(readLine().trim(), 10);

    const n: number = parseInt(readLine().trim(), 10);

    const arr: number[] = readLine()
      .replace(/\s+$/g, '')
      .split(' ')
      .map((arrTemp) => parseInt(arrTemp, 10));

    const result: number[] = icecreamParlor(m, arr);

    console.log(result.join(' ') + '\n');
  }
}
