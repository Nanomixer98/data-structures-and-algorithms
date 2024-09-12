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

function designerPdfViewer(heights: number[], word: string): number {
  const alphabet = [...'abcdefghijklmnopqrstuvwxyz'];
  const wordAray: string[] = [...word];

  const maxHeight = wordAray.reduce((max, char) => {
    console.log(max, char);
    const index = alphabet.indexOf(char);
    return Math.max(max, heights[index]);
  }, 0);

  return maxHeight * word.length;
}

function main() {
  const ws: WriteStream = createWriteStream(process.env['OUTPUT_PATH']);

  const h: number[] = readLine()
    .replace(/\s+$/g, '')
    .split(' ')
    .map((hTemp) => parseInt(hTemp, 10));

  const word: string = readLine();

  const result: number = designerPdfViewer(h, word);

  ws.write(result + '\n');

  ws.end();
}
