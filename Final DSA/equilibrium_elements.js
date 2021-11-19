function runProgram(input) {
  let inp = input.trim().split("\n");
  let N = +inp[0];

  let arr = inp[1].trim().split(" ").map(Number);

  // Brute force approach Tc = O(n2) and Sc - O(1)

  //   Remember edge case here:-

  //   console.log(N)
  //   for (let i = 1; i < N - 2; i++) {
  //     let ls = 0;
  //     let rs = 0;

  //     for (let j = 0; j < i; j++) {
  //       ls = ls + arr[j];
  //     }

  //     for (let j = i + 1; j < N; j++) {
  //       rs = rs + arr[j];
  //     }

  //     if (ls === rs) {
  //       return console.log(i + 1);
  //     }
  //   }

  //   return console.log(-1);

  //   2nd approach - [Taking two array]
  //   Taking two array Tc=O(n) sc-O(n)

  //   let front_arr = [];

  //   let back_arr = [];

  //   let front_sum = arr[0];
  //   for (let i = 0; i < N; i++) {
  //     if (i == 0) {
  //       front_arr.push(arr[i]);
  //     } else {
  //       front_sum += arr[i];
  //       front_arr.push(front_sum);
  //     }
  //   }

  //   let back_sum = arr[N - 1];
  //   for (let i = N - 1; i >= 0; i--) {
  //     if (i == N - 1) {
  //       back_arr.push(arr[i]);
  //     } else {
  //       back_sum += arr[i];
  //       back_arr.push(back_sum);
  //     }
  //   }

  //   back_arr.reverse();

  //   function findNumber(front_arr, back_arr, N) {
  //     for (let i = 1; i < N - 2; i++) {
  //       if (front_arr[i] === back_arr[i]) {
  //         return console.log(i + 1);
  //       }
  //     }

  //     return console.log(-1);
  //   }

  //   findNumber(front_arr, back_arr,N)

  //   More optimized way Tc = O(n) Sc = O(1)

  let sum = 0;
  let left_sum = 0;

  for (let i = 0; i < N; i++) {
    sum = sum + arr[i];
  }

  for (let i = 0; i < N; ) {
    sum = sum - arr[i];
    if (sum === left_sum) {
      return console.log(i + 1);
    } else {
      left_sum = left_sum + arr[i];
      i++;
    }
   
  }
  console.log(-1)
}
if (process.env.USERNAME === "Asus") {
  runProgram(`5
  3 3 5 5 1`);
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
