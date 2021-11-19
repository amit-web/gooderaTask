function runProgram(input) {
  let inp = input.trim().split("\n");
  let N = +inp[0];

  //Brute force approach  TC = O(root n)

  //   for(let i=1;i<N;i++){

  //        if(i*i===N){
  //            console.log(i)
  //        }
  //        else{
  //            console.log(-1)
  //        }
  //   }

  // #Method:-2  - Using binary search :  TC = O(log n)

  let low = 0;
  let high = N;

  while (low <= high) {
    let mid = low + Math.floor((high - low) / 2);

    let square = mid * mid;

    if (square === N) {
      return console.log(mid);
    }

    // if(N>mid-1* mid-1 && N<mid*mid){
    //     return console.log(mid-1)
    // }

    if (square > N) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  console.log(-1);

  //   console.log(input);
}
if (process.env.USERNAME === "Asus") {
  runProgram(`625`);
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
