function runProgram(input) {
  let inp = input.trim().split("\n");

  var [r, c] = inp[0].trim().split(" ").map(Number);

  let matrix = [];

  for (let i = 0, line = 1; i < r; i++) {
    let arr = inp[line++].trim().split(" ").map(Number);
    let arr2 = [];
    if (line % 2 == 1) {
      for (let j = 0; j < arr.length; j++) {
        arr2.push(arr[j]);
      }
    } else {
      for (let k = arr.length - 1; k >= 0; k--) {
        arr2.push(arr[k]);
      }
    }

    matrix.push(arr2);
  }

  let ans = [];

  for (let i = 0; i < r; i++) {
    for (let j = 0; j < c; j++) {
      ans.push(matrix[i][j]);
    }
  }

  console.log(ans.join(" "));
}
if (process.env.USERNAME === "Asus") {
  runProgram(`5 5
    4 7 1 1 7
    8 9 9 6 1
    6 4 9 5 1
    7 7 4 7 7
    8 6 2 5 5`);
}
process.stdin.resume();
process.stdin.setEncoding("ascii");
let read = "";
process.stdin.on("data", function (input) {
  read += input;
});
process.stdin.on("end", function () {
  read = read.replace(/\n$/, "");
  runProgram(read);
});

process.on("SIGINT", function () {
  read = read.replace(/\n$/, "");
  runProgram(read);
  process.exit(0);
});
