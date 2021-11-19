function runProgram(input) {
    let inp = input.trim().split("\n")
      let N = +inp[0]
  
     if(N%35===0){
         console.log("Masai School")
     }
     else if(N%7===0){
        console.log("Masai")
     }
     else if(N%5===0){
         console.log("School")
     }
     else{
         console.log("Hurray!")
     }
  }
  if (process.env.USERNAME === 'Asus') {
      runProgram(`905`)
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
  
  