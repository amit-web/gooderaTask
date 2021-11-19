function runProgram(input) {
    let inp = input.trim().split("\n")
      let [N,K] = inp[0].trim().split(" ").map(Number)

      let arr =  inp[1].trim().split(" ").map(Number)

       let count = 0
       let sum =0
      for (let i = 0; i <N;i++){
          for(let j = i+1; j <N;j++){
              if(arr[i]+arr[j]<K){
                  count =count + 1;
              }
              else{
                 sum = sum+1
              }
          }
      }
  
      console.log(count+sum);
  }
  if (process.env.USERNAME === 'Asus') {
      runProgram(`4 10
      7 2 3 9`)
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
  
  