function runProgram(input) {
    let inp = input.trim().split("\n")
      let test = +inp[0]
      for(let i = 0,line=1; i <test; i++){
          let [n,k] = inp[line++].trim().split(" ").map(Number)
          let arr = inp[line++].trim().split(" ").map(Number)

          let curr_sum =arr[0];
          let start=0;
         for(i=1;i<=n;i++){
             
            while(curr_sum>k && start<i-1){
                curr_sum = curr_sum-arr[start]
                start++;
            }
                if(curr_sum===k){
                    console.log(start,i-1)
                    return 1;
                }

                if(i<n){
                    curr_sum = curr_sum +arr[i]
                }
            
             
         }
        
         console.log("-1")

      }
  
    //   console.log(input);
  }
  if (process.env.USERNAME === 'Asus') {
      runProgram(`1
      6 33
      1 4 20 3 10 5`)
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
  
  