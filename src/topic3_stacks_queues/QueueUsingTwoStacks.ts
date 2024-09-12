'use strict';

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

class Queue {
  private sIn: number[] = [];
  private sOut: number[] = [];
  private top: number;

  add(e: number) {
    if (this.sIn.length === 0) this.top = e;
    this.sIn.push(e);
  }

  pop(): number {
    if (this.sOut.length === 0) {
      while (this.sIn.length > 0) {
        this.sOut.push(this.sIn.pop());
      }
    }
    return this.sOut.pop();
  }

  peek(): number {
    return this.sOut[this.sOut.length - 1] ?? this.top;
  }
}

function main() {
  const q = new Queue();
  for (let i = 1; i < inputLines.length; i++) {
    const [c, p] = inputLines[i].split(' ');
    if (c === '1') q.add(parseInt(p));
    else if (c === '2') q.pop();
    else console.log(q.peek());
  }
}
