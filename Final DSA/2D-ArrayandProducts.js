function runProgram(input) {
  let inp = input.trim().split("\n");

  var [r, c, s] = inp[0].trim().split(" ").map(Number);

  let matrix = [];

  for (let i = 0, line = 1; i < r; i++) {
    let arr = inp[line++].trim().split(" ").map(Number);
    matrix.push(arr);
  }

  let sum1 = 0;
  let sum2 = 0;
  let sum3 = 0;
  let sum4 = 0;
  let count = 0;
  for (i = 0; i < r; i++) {
    for (j = 0; j < c; j++) {
      if (j + 2 < c) {
        sum1 = matrix[i][j] * matrix[i][j + 1] * matrix[i][j + 2];
        if (sum1 === s) {
          count++;
        }
      }

      if (i + 2 < r) {
        sum2 = matrix[i][j] * matrix[i + 1][j] * matrix[i + 2][j];
        if (sum2 === s) {
          count++;
        }
      }

      if (i + 2 < r && j + 2 < c) {
        sum3 = matrix[i][j] * matrix[i + 1][j + 1] * matrix[i + 2][j + 2];
        if (sum3 === s) {
          count++;
        }
      }
  
      if (i > 1 && j + 2 < c) {
        sum4 = matrix[i][j] * matrix[i - 1][j + 1] * matrix[i-2][j + 2];
        if (sum4 === s) {
          count++;
        }
      }
    }
  
  }
  console.log(count);
}
if (process.env.USERNAME === "Asus") {
  runProgram(`3 3 6
        3 2 1
        2 2 2
        1 5 1`);
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
