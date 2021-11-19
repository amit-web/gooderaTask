function runProgram(input) {
  let inp = input.trim().split("\n");
  let test = +inp[0];

  for (let i = 0, line = 1; i < test; i++) {
    let N = +inp[line++];
    let arr = inp[line++].trim().split(" ").map(Number);

    //First we have to calculate  Nearest smaller to left to right:-----

    let stack = [];
    let leftans = [];
    let psudoleftvalue = -1;
    for (let j = 0; j < N; j++) {
      if (stack.length == 0) {
        leftans.push(psudoleftvalue);
      } else if (stack.length > 0 && stack[stack.length - 1].first < arr[j]) {
        leftans.push(stack[stack.length - 1].second);
      } else if (stack.length > 0 && stack[stack.length - 1].first >= arr[j]) {
        while (stack.length > 0 && stack[stack.length - 1].first >= arr[j]) {
          stack.pop();
        }

        if (stack.length === 0) {
          leftans.push(psudoleftvalue);
        } else {
          leftans.push(stack[stack.length - 1].second);
        }
      }

      stack.push({ first: arr[j], second: j });
    }

    // console.log(leftans);

    //  and then find nearest smaller element to right
    let rightans = [];
    let psudorightvalue = N;

    let stack1 = [];

    for (let k = N - 1; k >= 0; k--) {
      if (stack1.length === 0) {
        rightans.push(psudorightvalue);
      } else if (
        stack1.length > 0 &&
        stack1[stack1.length - 1].first < arr[k]
      ) {
        rightans.push(stack1[stack1.length - 1].second);
      } else if (
        stack1.length > 0 &&
        stack1[stack1.length - 1].first >= arr[k]
      ) {
        while (stack1.length > 0 && stack1[stack1.length - 1].first >= arr[k]) {
          stack1.pop();
        }
        if (stack1.length === 0) {
          rightans.push(psudorightvalue);
        } else {
          rightans.push(stack1[stack1.length - 1].second);
        }
      }

      stack1.push({ first: arr[k], second: k });
    }

    rightans.reverse();

    // console.log(rightans);

    //for finding the width we have calculate  (rightans (which is index) - leftans (which is index))-1

    let width = [];
    for (let l = 0; l < N; l++) {
      width.push(rightans[l] - leftans[l] - 1);
    }

    //  console.log("width",width)

    //  console.log("array",arr)

    //After that we have to calculate the area  so we traverse through actual array and after that we multiply with width[i] and get area arrray :

    let area = [];

    for (let m = 0; m < N; m++) {
      area.push(arr[m] * width[m]);
    }

    //After that we calulate maximum out of area array which is our final answer: -

    let max = -99999999;

    for (let n = 0; n < area.length; n++) {
      if (area[n] > max) {
        max = area[n];
      }
    }

    console.log(max);
  }

  //   console.log(input);
}
if (process.env.USERNAME === "Asus") {
  runProgram(`1
      4
      2 3 4 5
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
