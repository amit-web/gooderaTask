function runProgram(input) {
  let inp = input.trim().split("\n");
  let str = inp[0].trim();

  let stack = [];

  let top = 0;

  stack.push(str[0]);

  for (let i = 0; i < str.length; i++) {
    if (top == 0) {
      stack.push(str[i]);
      top++;
    } else if (
      (stack[top] == "{" && str[i] == "}") ||
      (stack[top] == "[" && str[i] == "]") ||
      (stack[top] == "(" && str[i] == ")")
    ) {
      stack.pop();
      top--;
    } else if (
      str[i] == "{" ||
      str[i] == "}" ||
      str[i] == "[" ||
      str[i] == "]" ||
      str[i] == "(" ||
      str[i] == ")"
    ) {
      stack.push(str[i]);
      top++;
    }
  }

  if (top == 0) {
    console.log("balanced");
  } else {
    console.log("unbalanced");
  }

  //   console.log(input);
}
if (process.env.USERNAME === "Asus") {
  runProgram(`(((((((((())))))))))`);
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
