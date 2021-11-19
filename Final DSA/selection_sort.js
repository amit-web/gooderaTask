function runProgram(input) {
    let inp = input.trim().split("\n")
    let l=0;
    let n = +inp[l++];
    let arr = inp[l++].trim().split(" ").map(Number)
    let temp;
      for(let i = 0; i <n-1;i++){
         

          for(let j = i+1; j <n;j++){
          
            if(arr[j]<arr[i]){
                temp = arr[i]
                arr[i] = arr[j]
                arr[j] = temp
            }
            
           
          }
         
         
      }
  
      console.log(arr.join(" "));
  }
  if (process.env.USERNAME === 'Asus') {
      runProgram(`5
      3 5 0 9 8`)
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
  
  