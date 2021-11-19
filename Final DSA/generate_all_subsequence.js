function runProgram(input) {
    let inp = input.trim().split("\n")
      let test = +inp[0]
      let str = inp[1].trim()
      console.log(test,str)
       for(let i=0;i<test;i++){
            //   console.log(str[i])
        for( let j=i+1;j<=test;j++){
            console.log(str.slice(i,j)) 
        }
       }
      
  }
  if (process.env.USERNAME === 'Asus') {
      runProgram(`4
      abcd`)
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
  
  