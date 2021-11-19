function runProgram(input) {
    let inp = input.trim().split("\n")
      let N = +inp[0]
      let arr =inp[1].trim().split(" ").map(Number)

      let smallest = arr[0]
      let largest = arr[0]
      for(let i=1; i<N; i++) {
          
          if(arr[i]<smallest) {
              smallest = arr[i]
          }

          if(arr[i]>largest) {
             largest = arr[i]
          }
      
      }
  
      console.log(smallest)
      console.log(largest)
  }
  if (process.env.USERNAME === 'Asus') {
      runProgram(`4
      -2 0 8 4`)
  }
  process.stdin.resume();
  process.stdin.setEncoding("ascii");
  let read = "";
  process.stdin.on("data", function (input) {
      read += input;
  });
  process.stdin.on("end", function () {
      read = read.replace(/\n$/, "")
      runProgram(read);
  });
  
  process.on("SIGINT", function () {
      read = read.replace(/\n$/, "")
      runProgram(read);
      process.exit(0);
  });
  
  