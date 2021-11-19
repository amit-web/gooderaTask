function runProgram(input) {
    let inp = input.trim().split(" ").map(Number);
    let[N,K] = inp
    // console.log(N,K)
    
          for(let i = 1; i <= K; i++){
              for(let j = 1; j <= N; j++){

                  if(K==1){
                    console.log(j)
                  }
                  if(K>1){
                      console.log(i,j)
                  }

                  

              }
          }
      
  }
  if (process.env.USERNAME === 'Asus') {
      runProgram(`4 2`)
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
  
  