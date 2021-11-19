function runProgram(input) {
    let inp = input.trim().split("\n");
  
    var [r, c] = inp[0].trim().split(" ").map(Number);
  
    let matrix = [];
  
    for (let i = 0, line = 1; i < r; i++) {
      let arr = inp[line++].trim().split(" ").map(Number);
      matrix.push(arr);
    }
  
    let ans = [];
  
    for (let i = c-1; i >= 0; i--) {
      for (let j = 0; j< r; j++) {
        ans.push(matrix[j][i]);
      }
    }
  
    console.log(ans.join(" "));
  }
  if (process.env.USERNAME === "Asus") {
    runProgram(`4 3
        1 8 9
        2 7 10
        3 6 11
        4 5 12`);
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
  