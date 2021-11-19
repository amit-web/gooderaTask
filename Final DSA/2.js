function runProgram(input) {
  let inp = input.trim().split("\n");
  let test = +inp[0];

  for (let i = 0, line = 1; i < test; i++) {
    let N = +inp[line++];
    let arr = inp[line++].trim().split(" ").map(Number);
    let max = 0;
    for (let j = 0; j < N; j++) {
      for (let k = j + 1; k <= N; k++) {
        subarray = arr.slice(j, k);
        //console.log(subarray);
        let product = 1;
        for (let l= 0; l < subarray.length; l++) {
          product = product * subarray[l];
        }
        //  console.log(product);
        if (product > max) {
          max = product;
        }
      }
    }
    console.log(max);
   
  }
 
}
if (process.env.USERNAME === "Asus") {
  runProgram(`1
  4
  4 5 -1 2
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
