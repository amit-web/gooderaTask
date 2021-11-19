function runProgram(input) {
  let inp = input.trim().split("\n");
  let test = +inp[0];

  for (let i = 0, line = 1; i < test; i++) {
    let [N, K] = inp[line++].trim().split(" ").map(Number);
    let arr = inp[line++]
      .trim()
      .split(" ")
      .map(Number)
      .sort((a, b) => {
        return a - b;
      });

   // console.log(arr);
    // console.log(arr);
    // let start = 0;
    // let end = N - 1;
    let flag = false;
    // for (let j = 0; j < N; j++) {
    //   for (let k = j + 1; k <= N; k++) {
    //     if (arr[j] + arr[k] === K) {
    //       flag = true;
    //     }
    //   }
    // }

    // if (flag) {
    //   console.log("1");
    // } else {
    //   console.log("-1");
    // }

    function findSum(arr, N, K) {
      let start = 0;
      let end = N - 1;

      while (start < end) {
        if (arr[start] + arr[end] === K) {
          return 1;
        } else if (arr[start] + arr[end] < K) {
          start++;
        } else {
          end--;
        }
       
      }
      return -1;
    }

   console.log( findSum(arr, N, K));

    // let obj = {};

    // for(let i=0;i<N;i++){
    //     obj[arr[i]]=(obj[arr[i]]||0)+1
    // }

    // for(key in obj ){

    // }

    // console.log(obj);
  }

  //   console.log(input);
}
if (process.env.USERNAME === "Asus") {
  runProgram(`1
      5 2
      3 4 0 2 7`);
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
