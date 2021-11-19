function runProgram(input) {
  let inp = input.trim().split("\n");
  let test = +inp[0];

  for (let i = 0, line = 1; i < test; i++) {
    let N = +inp[line++];

    let arr = inp[line++].trim().split(" ").map(Number);

    //   console.log(N,arr)

    let obj = {};
    let flag = false;
    for (let j = 0; j < N; j++) {
      obj[arr[j]] = (obj[arr[j]] || 0) + 1;
    }

    for (let key in obj) {
      //   console.log(obj[key])

      if (obj[key] > 1) {
        flag = true;
        break;
      }
    }

    if (flag) {
      console.log("YES");
    } else {
      console.log("NO");
    }
  }

  //   console.log(input);
}
if (process.env.USERNAME === "Asus") {
  runProgram(`1  
      2
      1 1
     `);
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
