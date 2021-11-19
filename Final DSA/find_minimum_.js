function runProgram(input) {
  let inp = input.trim().split("\n");
  let test = +inp[0];

  let stack = [];

  for (let i = 0, line = 1; i < test; i++) {
    let [str, v] = inp[line++].trim().split(" ");

    // console.log(str,v)

    if (str === "PUSH" && v != undefined) {
      stack.push(Number(v));
    }

    // console.log(stack)
    else if (stack.length > 0 && str == "MIN" && v == undefined) {
      let min = 9999999;

      for (let i = 0; i < stack.length; i++) {
        if (stack[i] < min) {
          min = stack[i];
        }
      }

      console.log(min);
    } else if (stack.length > 0 && str == "POP" && v == undefined) {
      stack.pop();
    } else if (stack.length == 0) {
      console.log("EMPTY");
    }
  }

  // console.log(input);
}
if (process.env.USERNAME === "Asus") {
  runProgram(`10
  POP
  POP
  POP
  PUSH 68
  PUSH 14
  MIN
  PUSH 19
  PUSH 12
  PUSH 7
  MIN`);
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
