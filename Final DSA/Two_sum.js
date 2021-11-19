function runProgram(input) {
  input = input.trim().split("\n");

  const t = +input[0];
  let line = 1;
  for (var k = 1; k <= t; k++) {
    const [n, target] = input[line++].trim().split(" ").map(Number);
    const arr = input[line++]
      .trim()
      .split(" ")
      .map(Number)
      .sort((a, b) => a < b);

    let [i, j] = [0, n - 1];

    while (i < j) {
      if (arr[i] + arr[j] === target) {
        console.log(i + " " + j);
        break;
      } else if (arr[i] + arr[j] > target) {
        j--;
      } else {
        i++;
      }
    }

    if (i === j) {
      console.log("-1 -1");
    }
  }
}

if (process.env.USERNAME === "Asus") {
  runProgram(`3
       4 9
       2 7 11 15
       5 10
       1 2 3 5 5
       2 100
       48 49`);
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
