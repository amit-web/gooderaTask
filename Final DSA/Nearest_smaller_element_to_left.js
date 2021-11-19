function runProgram(input) {
    let inp = input.trim().split("\n")
      let N= +inp[0]

      let arr = inp[1].trim().split(" ").map(Number)

      /*Brute force :    Time complexity = O(n^2)  ans Space complexity =O(n)

      for(let i = 0; i < N; i++) {
          for(let j=i-1; j>=0;j-->)
      }

      
e

      */

      //Optimized approach  from stack : -- Time complexity = O(n) ans Space complexity =O(n)
      let stack =[];
      let ans =[];
      for( let i=0; i<N; i++) {
           
          if(stack.length==0){
              ans.push(-1)
          }

          else if(stack.length>0 && stack[stack.length-1]<arr[i]){
              ans.push(stack[stack.length-1])
          }
          else if(stack.length>0 && stack[stack.length-1]>=arr[i]){

            while(stack.length>0 && stack[stack.length-1]>=arr[i]){
                 stack.pop()
            }

            if(stack.length===0){
                ans.push(-1)
            }
            else{
                ans.push(stack[stack.length-1])
            }

          }

          stack.push(arr[i])
      }
  
    console.log(ans)
  }
  if (process.env.USERNAME === 'Asus') {
      runProgram(`5
      4 5 2 10 8`)
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
  
  