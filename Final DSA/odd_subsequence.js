function runProgram(input) {
    let inp = input.trim().split("\n")
      let test = +inp[0]

      for(let i=0,line=1;i<test;i++){
             
        let N = +inp[line++]
        let arr = inp[line++].trim().split(" ").map(Number)
        
        let count =0
        for(let j=0;j<N;j++){
           if(arr[j]%2!=0){
               count++
           }
        }

        if(count!=0){
            console.log("yes")
        }
        else{
            console.log("no")
        }
      }
  
   
  }
  if (process.env.USERNAME === 'Asus') {
      runProgram(`1
      4
      4 3 2 1
     `)
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
  
  