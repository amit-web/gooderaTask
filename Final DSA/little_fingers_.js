function runProgram(input) {
  let inp = input.trim().split("\n");
  let test = +inp[0];

  for (let i = 0, line = 1; i < test; i++) {
    let str = inp[line++].trim();
    let count = 0;
    for (let j = 0; j < str.length; j++) {
      if (str[j] === str[j + 1]) {
        continue;
      } else {
        count++;
      }
    }

    console.log(count);
  }
}
if (process.env.USERNAME === "Asus") {
  runProgram(`2
      aaaaa
      abbbaaz`);
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
