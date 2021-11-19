function runProgram(input) {
  let inp = input.trim().split("\n");
  let N = +inp[0];
  let temp = "";
  for (let i = 10; i < 100; i++) {
    let x = String(i);

    for (let j = 0; j < x.length; j++) {
      if (x[j] === x[j + 1]) {
        temp = temp + x + " ";
      }
    }
  }
  console.log(temp);
}
if (process.env.USERNAME === "Asus") {
  runProgram(`2`);
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
