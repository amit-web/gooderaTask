function runProgram(input) {
  let inp = input.trim().split("\n");
  let test = +inp[0];

  for (let i = 0, line = 1; i < test; i++) {
    let N = +inp[line++];

    let arr = inp[line++].trim().split(" ").map(Number);

    let obj = {};

    // Time complexity : O(n)

    // space complexity : O(n)

    for (let i = 0; i < N; i++) {
      obj[arr[i]] = (obj[arr[i]] || 0) + 1;
    }

    // console.log(obj);

    for (x in obj) {
      // console.log(obj[x])

      if (obj[x] === 1) {
        console.log(x);
      }
    }
  }

  //   console.log(input);

  // second approach : - bitwise approach  tc - O(n)  sc = O(1)
}
if (process.env.USERNAME === "Asus") {
  runProgram(`2
      1
      5
      5
      1 2 1 3 2`);
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
