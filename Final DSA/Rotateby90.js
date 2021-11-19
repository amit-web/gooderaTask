function runProgram(input) {
    let inp = input.trim().split("\n");
  
    var test = +inp[0].trim()
  
    let matrix = [];
  
    for (let i = 0, line = 1; i < test; i++) {
      let arr = inp[line++].trim().split(" ").map(Number);
      matrix.push(arr);
    }

    let ans = [];
  
    for (let i = test-1; i >=0; i--) {
        let arr2 =[]
      for (let j = 0; j< test; j++) {
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
    runProgram(`4
    1 2 3 4
    5 6 7 8
    1 2 3 4
    5 6 7 8`);
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
  