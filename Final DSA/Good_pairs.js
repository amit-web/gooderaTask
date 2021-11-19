function runProgram(input) {
  let inp = input.trim().split("\n");
  let test = +inp[0];

  for (let i = 0, line = 1; i < test; i++) {
    let N = +inp[line++];

    let arr = inp[line++].trim().split(" ").map(Number);
    let count = 0;
    for (let i = 0; i < N; i++) {
      for (let j = 0; j < N; j++) {
        if (arr[j] === 2 * arr[i]) {
          count++;
        }
      }
    }
    console.log(count);
  }
}
if (process.env.USERNAME === "Asus") {
  runProgram(`2
      5
      1 1 1 1 1
      6
      1 1 2 2 4 1 `);
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
