function quickSort(arr) {
    if (arr.length <= 1) return arr;

    let pivot = arr[0];
    let left = [];
    let right = [];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }

    let sortedLeft = quickSort(left);
    let sortedRight = quickSort(right);

    let partitionedArray = [...sortedLeft, pivot, ...sortedRight];
    console.log(partitionedArray.join(' '));

    return partitionedArray;
}

function processData(input) {
    let lines = input.trim().split('\n');
    let n = parseInt(lines[0]);
    let arr = lines[1].split(' ').map(Number);

    quickSort(arr);
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
let _input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
    processData(_input);
});
