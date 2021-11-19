function runProgram(input) {
    let inp = input.trim().split("\n")
      let l=0;
      let n = +inp[l++];
      let arr = inp[l++].trim().split(" ").map(Number)
      let temp;
      for (let i = 0; i <n-1; i++) {
          for(j=0;j<n-i-1;j++){
              if(arr[j]>arr[j+1]){
                  temp=arr[j]
                  arr[j]=arr[j+1]
                  arr[j+1]=temp
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
  
  