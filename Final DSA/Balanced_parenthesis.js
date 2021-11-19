function runProgram(input) {
  let inp = input.trim().split("\n");
  let str = inp[0];

  let stack = [];
  let flag = true;
  for (let i = 0; i < str.length; i++) {
    if (str[i] == "(" || str[i] == "{" || str[i] == "[") {
      stack.push(str[i]);
    } else if (
      (str[i] == ")" && stack[stack.length - 1] == "(") ||
      (str[i] == "}" && stack[stack.length - 1] == "{") ||
      (str[i] == "]" && stack[stack.length - 1] == "[")
    ) {
      stack.pop();
    }
    else{
      console.log("unbalanced");
      flag=false;
      break;
    }
  }

  //  console.log(stack)


    if (stack.length == 0 && flag) {
      console.log("balanced");
    } else if (flag) {
      console.log("unbalanced");
    }
  
}
if (process.env.USERNAME === "Asus") {
  runProgram(`[one[two[three[four[five[six[seven[eight[nine[ten]]]]]]]]]]`);
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
