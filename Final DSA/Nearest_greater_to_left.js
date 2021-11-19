function runProgram(input) {
  let inp = input.trim().split("\n");
  let N = +inp[0];

  let arr = inp[1].trim().split(" ").map(Number);

  //Brute force TC : - O(n^2)approach:-    space complexity= O(n)
  //for the first element left array is not present always so we push -1 in ans array

  //   let ans = [];
  //    ans.push(-1)
  //   for (let i = 1; i < N; i++) {
  //     let flag = 0;
  //     for (let j = i - 1; j >= 0; j--) {
  //       if (arr[j] > arr[i]) {
  //         ans.push(arr[j]);
  //         break;
  //       } else {
  //         flag = 1;
  //       }
  //     }

  //     if (flag) {
  //       ans.push(-1);
  //     }
  //   }

  //   console.log(ans);

  //Optimized approach Using stack : --------------------------------

  let stack = [];
  let ans = [];

  for (let i = 0; i < N; i++) {
    if (stack.length == 0) {
      ans.push(-1);
    } else if (stack.length > 0 && stack[stack.length - 1] > arr[i]) {
      ans.push(stack[stack.length - 1]);
    } else if (stack.length > 0 && stack[stack.length-1] <= arr[i]) {
      while (stack.length > 0 && stack[stack.length-1] <= arr[i]) {
        stack.pop();
      }

      if (stack.length == 0) {
        ans.push(-1);
      } else {
        ans.push(stack[stack.length - 1]);
      }
    }

    stack.push(arr[i]);
  }

  console.log(ans);
}
if (process.env.USERNAME === "Asus") {
  runProgram(`4
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
