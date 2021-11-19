function runProgram(input) {
  let inp = input.trim().split("\n");
  let N = +inp[0];

  let arr = inp[1].trim().split(" ").map(Number);

  let obj = {};

  for (let i = 0; i < N; i++) {
      obj[arr[i]]= (obj[arr[i]] || 0) + 1;
  }

  let temp=""
for(let x in obj ){
   temp =(temp+ x+" ");
}

console.log((temp))


}
if (process.env.USERNAME === "Asus") {
  runProgram(`5
      2 2 2 7 9
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
