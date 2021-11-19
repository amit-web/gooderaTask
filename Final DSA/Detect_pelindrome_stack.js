function runProgram(input) {
  let inp = input.trim().split("\n");
  let test = +inp[0];

  for (let i = 0, line = 1; i < test; i++) {
    let N = +inp[line++];
    let str = inp[line++].trim();

    // console.log(str,N);

    IsCheck(str, N);
  }

  function IsCheck(str, N) {
    let obj = {};

    for (let i = 0; i < N; i++) {
      obj[str[i]] = (obj[str[i]] || 0) + 1;
    }

    //   console.log(obj)
    let count = 0;
    for (key in obj) {
      if (obj[key] % 2 == 0) {
        continue;
      } else {
        count++;
      }
    }

    if (count > 1) {
      console.log("Not Possible!");
    } else {
      console.log("Possible!");
    }
  }
}
if (process.env.USERNAME === "Asus") {
  runProgram(`2
      6
      aabbcc
      5
      aabcd`);
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
