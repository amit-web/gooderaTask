function runProgram(input) {
  let inp = input.trim().split("\n");
  let test = +inp[0];

  for (let i = 0, line = 1; i < test; i++) {
    let number = +inp[line++];
    // console.log(number);

    let count = 0;
    while (number != 0 ) {
      number = (number & (number << 1));
      count++;
    }

    console.log(count);
  }

  //   console.log(input);
}
if (process.env.USERNAME === "Asus") {
  runProgram(`4
      1
      0
      4294967295
      13`);
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
