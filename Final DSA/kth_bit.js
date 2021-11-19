function runProgram(input) {
    let inp = input.trim().split("\n")
      let test = +inp[0]

      for (let i=0,line=1;i<test;i++){
           
          [N,K] = inp[line++].trim().split(" ").map(Number)

          let j=1;

          j=j<<K

          let res = N & j

          if(res === 0){
              console.log("No")
          }
          else{
              console.log("Yes")
          }

      }
  
    
  }
  if (process.env.USERNAME === 'Asus') {
      runProgram(`2
      5 2
      5 1`)
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
  
  