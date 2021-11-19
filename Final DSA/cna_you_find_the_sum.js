//Enter code here
function runProgram(input) {
  let inp = input.split("\n");
  let N = +inp[0];
  let arr = inp[1].trim().split(" ").map(Number);

  function checkX(arr, N) {
    let s = [];
    let res = [];
    for (let i = 0; i < N; i++) {
      if (s.length === 0) {
        res.push(-1);
      } else if (s.length > 0 && arr[s[s.length - 1] - 1] > arr[i]) {
        res.push(s[s.length - 1]);
      } else if (s.length > 0 && arr[s[s.length - 1] - 1] <= arr[i]) {
        while (s.length > 0 && arr[s[s.length - 1] - 1] <= arr[i]) {
          s.pop();
        }

        if (s.length === 0) {
          res.push(-1);
        } else {
          res.push(s[s.length - 1]);
        }
      }

      s.push(i + 1);
    }
    return res;
  }

  function checkY(arr, N) {
    let s = [];
    let res = [];
    for (let i = N - 1; i >= 0; i--) {
      if (s.length === 0) {
        res.push(-1);
      } else if (s.length > 0 && arr[s[s.length - 1] - 1] > arr[i]) {
        res.push(s[s.length - 1]);
      } else if (s.length > 0 && arr[s[s.length - 1] - 1] <= arr[i]) {
        while (s.length > 0 && arr[s[s.length - 1] - 1] <= arr[i]) {
          s.pop();
        }

        if (s.length === 0) {
          res.push(-1);
        } else {
          res.push(s[s.length - 1]);
        }
      }

      s.push(i + 1);
    }
    return res;
  }

  let res1 = checkX(arr, N);

  //    console.log(res1)
  let res2 = checkY(arr, N);

//   console.log(res2)
     let result=[]
     for(let i=0;i<N;i++){
         result.push(res1[i]+res2[N-1-i]);
     }
     console.log(result.join(" "));
}
if (process.env.USERNAME === "Asus") {
  runProgram(`5
    5 4 1 3 2`);
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
