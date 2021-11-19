function runProgram(input) {
  let inp = input.trim().split("\n");
  let test = +inp[0];

  for (let i = 0, line = 1; i < test; i++) {
    let N = +inp[line++];
    let arr = inp[line++]
      .trim()
      .split(" ")
      .map(Number)
      .sort((a, b) => {
        return a - b;
      });
    // console.log(arr);

    for (let k = 0; k < N; k++) {
      for (let j = N - 1; j >= 0; j--) {
        if (arr[j] === -arr[k]) {
          console.log(arr[j]);
          break;
        }
      }
    }
  }

  // console.log(input);
}
if (process.env.USERNAME === "Asus") {
  runProgram(`2
  5
  2 1 -1 -2 3
  5
  -3 2 -4 4 -2`);
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
