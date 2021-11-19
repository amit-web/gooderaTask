function runProgram(input) {
  let inp = input.trim().split("\n");
  let test = +inp[0];

  for (let i = 0, line = 1; i < test; i++) {
    let Num = +inp[line++];
    let max = -9999999;
    for (let j = 1; j <= Math.floor(Num/2); j++) {
      if (Num % j === 0) {
        if (j % 2 === 1) {
          if (j > max) {
            max = j;
          }
        }
      }
    }

    console.log(max);
  }

  //console.log(input);
}
if (process.env.USERNAME === "Asus") {
  runProgram(`2
      10
      4`);
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
