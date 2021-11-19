function runProgram(input) {
  let inp = input.trim().split("\n");
  let test = +inp[0];

  for (let i = 0, line = 1; i < test; i++) {
    let N = +inp[line++];
    let arr = inp[line++].trim().split(" ").map(Number);

    let stack = [];
    let ans = [];

    for (let j = N - 1; j >= 0; j--) {
      if (stack.length === 0) {
        ans.push(-1);
      } else if (stack.length > 0 && stack[stack.length - 1] > arr[j]) {
        ans.push(stack[stack.length - 1]);
      } else if (stack.length > 0 && stack[stack.length - 1] <= arr[j]) {
        while (stack.length > 0 && stack[stack.length - 1] <= arr[j]) {
          stack.pop();
        }

        if (stack.length === 0) {
          ans.push(-1);
        } else {
          ans.push(stack[stack.length - 1]);
        }
      }

      stack.push(arr[j]);
    }

    console.log(ans.reverse().join(" "));
  }
}
if (process.env.USERNAME === "Asus") {
  runProgram(`1
      4
      1 3 2 4`);
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
