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

function rotLeft(numArr: number[], rotations: number): number[] {
  return numArr.map((_, index) => {
    let newIndex = index + rotations;
    if (newIndex >= numArr.length) {
      newIndex -= numArr.length;
    }

    return numArr[newIndex];
  });
}

function main() {
  const ws: WriteStream = createWriteStream(process.env['OUTPUT_PATH']);

  const firstMultipleInput: string[] = readLine()
    .replace(/\s+$/g, '')
    .split(' ');

  const n: number = parseInt(firstMultipleInput[0], 10);

  const d: number = parseInt(firstMultipleInput[1], 10);

  const a: number[] = readLine()
    .replace(/\s+$/g, '')
    .split(' ')
    .map((aTemp) => parseInt(aTemp, 10));

  const result: number[] = rotLeft(a, d);

  ws.write(result.join(' ') + '\n');

  ws.end();
}
