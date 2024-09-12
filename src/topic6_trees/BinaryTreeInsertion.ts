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

class NodeClass {
  public left: any;
  public right: any;
  public data: any;
  constructor(value: any) {
    this.data = value;
    this.left = null;
    this.right = null;
  }
}

class TreeNode {
  private root: any;
  constructor() {
    this.root = null;
  }

  insert(newData: any) {
    const newNode = new NodeClass(newData);
    if (!this.root) {
      this.root = newNode;
      return this;
    } else {
      let currentNode = this.root;
      while (currentNode) {
        if (currentNode.data > newNode.data) {
          if (!currentNode.left) {
            currentNode.left = newNode;
            break;
          }
          currentNode = currentNode.left;
        } else {
          if (!currentNode.right) {
            currentNode.right = newNode;
            break;
          }
          currentNode = currentNode.right;
        }
      }
      return this.root;
    }
  }

  inOrder() {
    const ans: any[] = [];
    function recurse(node: any) {
      ans.push(node.data);
      if (node.left) recurse(node.left);

      if (node.right) recurse(node.right);
    }
    recurse(this.root);

    return ans;
  }
}
function main() {
  const nodeValues = inputLines[1]
    .trim()
    .split(' ')
    .map((val) => +val);
  const tree = new TreeNode();
  for (let nodeValue of nodeValues) {
    tree.insert(nodeValue);
  }
  const preOrderArray = tree.inOrder();
  console.log(preOrderArray.join(' '));
}
