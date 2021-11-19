function runProgram(input) {
  let inp = input.trim().split("\n");
  let test = +inp[0];

  for (let i = 0, line = 1; i < test; i++) {
    let N = +inp[line++];

    let arr = inp[line++].trim().split(" ").map(Number);

    let maxleft = [];
    let maxright = [];

    //first we have to calculate maximum element  to the left of that element  and store it in maxleft;

    maxleft[0] = arr[0];
    for (let j = 1; j < N; j++) {
      maxleft[j] = Math.max(maxleft[j - 1], arr[j]);
    }

    maxright[N - 1] = arr[N - 1];

    // from right we also calculate maximum element to the right of that element and store it in maxright

    for (let k = N - 2; k >= 0; k--) {
      maxright[k] = Math.max(maxright[k + 1], arr[k]);
    }

    // console.log(maxleft);
    // console.log(maxright);

    //after that we have to calculate for each element water trapped

    let water = [];

    for (let i = 0; i < N; i++) {
      water[i] = Math.min(maxleft[i], maxright[i]) - arr[i];
    }

    // console.log(water);

    // And finally  sum up all the elementwe got our final output: -

    let sum = 0;

    for (let i = 0; i < water.length; i++) {
      sum += water[i];
    }

    console.log(sum);
  }

  // console.log(input);
}
if (process.env.USERNAME === "Asus") {
  runProgram(`1
      5
      3 2 0 4 6
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
