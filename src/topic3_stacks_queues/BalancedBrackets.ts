'use strict';

import { WriteStream, createWriteStream } from 'fs';
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

function isBalanced(bracketsText: string): string {
  const stack: string[] = [];
  const pairs: { [key: string]: string } = {
    ')': '(',
    '}': '{',
    ']': '[',
  };

  for (const bracket of bracketsText) {
    if (bracket === '(' || bracket === '{' || bracket === '[') {
      stack.push(bracket);
    } else if (bracket === ')' || bracket === '}' || bracket === ']') {
      if (stack.length === 0 || stack.pop() !== pairs[bracket]) {
        return 'NO';
      }
    }
  }

  return stack.length === 0 ? 'YES' : 'NO';
}

function main() {
  const ws: WriteStream = createWriteStream(process.env['OUTPUT_PATH']);

  const t: number = parseInt(readLine().trim(), 10);

  for (let tItr: number = 0; tItr < t; tItr++) {
    const s: string = readLine();

    const result: string = isBalanced(s);

    ws.write(result + '\n');
  }

  ws.end();
}
