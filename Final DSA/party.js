function runProgram(input) {
  let inp = input.trim().split("\n");
  let [N, P, M] = inp[0].trim().split(" ").map(Number);
  let data = inp[1].trim().split(" ").map(Number);
  let arr = data.sort((a, b) => {
    return a - b;
  });

  let sum = 0;

  for (let i = 0; i < P; i++) {
    sum = sum + arr[i];
  }


    if (sum <= M) {
       console.log("Party")
    }
    else{
      console.log("Sad")
    }
}
if (process.env.USERNAME === "Asus") {
  runProgram(`4 4 10
      2 2 5 2`);
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
