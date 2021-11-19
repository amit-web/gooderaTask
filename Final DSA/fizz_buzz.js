function runProgram(input) {
  let inp = input.trim().split("\n");
  let test = +inp[0];

  for (let i = 0, line = 1; i < test; i++) {
    let N = +inp[line++];

    for (let j = 1; j <= N; j++) {
      if (j % 3 === 0 && j % 5 === 0) {
        console.log("FizzBuzz");
      } else if (j % 5 === 0) {
        console.log("Buzz");
      } else if (j % 3 === 0) {
        console.log("Fizz");
      } else {
        console.log(j);
      }
    }
  }
}
if (process.env.USERNAME === "Asus") {
  runProgram(`2
      1
      3`);
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
