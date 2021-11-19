
function runProgram(input) {
    let inp = input.trim().split("\n")
      let test = +inp[0]
      for(let i=0,line=1;i<test;i++){
          let [n,k]=inp[line++].trim().split(" ").map(Number)
          let arr = inp[line++].trim().split(" ").map(Number)

        //   brute force approach  :-)
         
          
        //    let res = 0;
        //   for(let j=0;j<=n-k;j++){
        //       let sum =0;
        //       for(let m=j;m<=j+k-1;m++){
                
        //         sum = sum +arr[m]
               
        //       }
           
        //       if(sum>res){
        //         res = sum;
        //       }
           
        //   }
       

        // Optimized approach sliding window approach:)
        // let curr_sum=0
        // for(let i=0;i<k;i++){

        //     curr_sum =curr_sum +arr[i];
            
        // }
        // let res = curr_sum
        // for(i=k;i<n;i++){
        //     curr_sum = curr_sum +arr[i]-arr[i-k]

        //     if(curr_sum>res){
        //         res=curr_sum
        //     }
        // }
        console.log(res)
      }
  
  
     
    
  }
 

  if (process.env.USERNAME === 'Asus') {
      runProgram(`1
      9 4
      2 1 4 -6 8 9 10 7 1`)
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
  
  