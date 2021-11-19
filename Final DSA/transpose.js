function runProgram(input) {
    let inp = input.trim().split("\n");
  
    var [r, c] = inp[0].trim().split(" ").map(Number);
  
    let matrix = [];
  
    for (let i = 0, line = 1; i < r; i++) {
      let arr = inp[line++].trim().split(" ").map(Number);
      matrix.push(arr);
    }

    let ans = [];
  
    for (let i = 0; i < c; i++) {
        let arr2 =[]
      for (let j = 0; j< r; j++) {
        arr2.push(matrix[j][i])
    //    comment 00 10 20 30 40
    //     01 11 21 31  41 
    //      02 12 22 32 42
    // 03 13 23 33 43
      }
      
      ans.push(arr2.join(" "))
    }

    console.log(ans.join("\n"))
  
    
  }
  if (process.env.USERNAME === "Asus") {
    runProgram(`5 4
    0 0 0 0
    1 1 1 1
    2 2 2 2
    3 3 3 3
    4 4 4 4`);
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
  