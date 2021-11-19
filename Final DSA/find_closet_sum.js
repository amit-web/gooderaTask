function closestSum(arr, n, k) {

 
  if (n === 3) {
    return (arr[0] + arr[1] + arr[2]);
  }

  let closestSum = 0;

  for (let i = 0; i < n - 2; i++) {
    let left = i + 1;
    let right = n - 1;

    while (left < right) {
      let sum = arr[i] + arr[left] + arr[right];

      if (Math.abs(k - sum) <= Math.abs(k - closestSum)) {
        closestSum = sum;
      }

      if (sum > k) {
        right--;
      } else {
        left++;
      }
    }
  }

  return closestSum;
}

function runProgram(input) {
  let inp = input.trim().split("\n");
  let test = +inp[0];
  for (let i = 0, line = 1; i < test; i++) {
    let [N, K] = inp[line++].trim().split(" ").map(Number);

    // console.log(N, K);

    let arr = inp[line++]
      .trim()
      .split(" ")
      .map(Number)
      .sort((a, b) => {
        return a - b;
      });

    //  console.log(N,arr)

    // Brute force approach of finding two elements whose sum is close to zero  time cpmplexity:-O(n2) space complexity:- O(1)

    // let min_sum = 3;

    // for (let j = 0; j < N; j++) {
    //   for (let k = j + 1; k < N; k++) {
    //     sum = arr[j] + arr[k];

    //     //  console.log(sum)

    //     if (Math.abs(0 - sum) < min_sum) {
    //       min_sum = sum;

    //       console.log(arr[j], arr[k]);
    //     }
    //   }
    // }

    // console.log(min_sum);

    //  sorting + twopointer approach :-

    console.log(closestSum(arr, N, K));
  }
}
if (process.env.USERNAME === "Asus") {
  runProgram(`1
  3 1
  0 0 0`);
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
