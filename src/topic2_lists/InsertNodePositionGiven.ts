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

class SinglyLinkedListNode {
  data: number;
  next: SinglyLinkedListNode | null;

  constructor(nodeData: number) {
    this.data = nodeData;
    this.next = null;
  }
}

class SinglyLinkedList {
  head: SinglyLinkedListNode | null;
  tail: SinglyLinkedListNode | null;

  constructor() {
    this.head = null;
    this.tail = null;
  }

  insertNode(nodeData: number): void {
    const node = new SinglyLinkedListNode(nodeData);

    if (this.head == null) {
      this.head = node;
    } else {
      this.tail!.next = node;
    }

    this.tail = node;
  }
}

function printSinglyLinkedList(
  node: SinglyLinkedListNode | null,
  sep: string,
  ws: WriteStream
): void {
  while (node != null) {
    ws.write(String(node.data));

    node = node.next;

    if (node != null) {
      ws.write(sep);
    }
  }
}

function insertNodeAtPosition(
  llist: SinglyLinkedListNode,
  data: number,
  position: number
): SinglyLinkedListNode {
  const newNode = new SinglyLinkedListNode(data);

  if (position === 0) {
    newNode.next = llist;
    return newNode;
  }

  let current = llist;
  let currentPosition = 0;

  while (currentPosition < position - 1 && current.next !== null) {
    current = current.next;
    currentPosition++;
  }

  newNode.next = current.next;
  current.next = newNode;

  return llist;
}

function main() {
  const ws: WriteStream = createWriteStream(process.env['OUTPUT_PATH']);

  let llist: SinglyLinkedList = new SinglyLinkedList();

  const llistCount: number = parseInt(readLine().trim(), 10);

  for (let i: number = 0; i < llistCount; i++) {
    const llistItem: number = parseInt(readLine().trim(), 10);

    llist.insertNode(llistItem);
  }

  const data: number = parseInt(readLine().trim(), 10);

  const position: number = parseInt(readLine().trim(), 10);

  const llist_head: SinglyLinkedListNode = insertNodeAtPosition(
    llist.head,
    data,
    position
  );

  printSinglyLinkedList(llist_head, ' ', ws);
  ws.write('\n');

  ws.end();
}
