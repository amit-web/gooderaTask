function runProgram(input) {
    let inp = input.trim().split("\n")
     
    let [N,K] = inp[0].trim().split(" ").map(Number)
    
     let data = inp[1].trim().split(" ").map(Number);
     let arr=data.sort((a, b)=>{ 
         return (a-b)
        })
        // console.log(arr)
    let sum =0;
    let count = 0;
    
    for(let i=0; i<=N; i++){
        if(sum+arr[i]<=K){
            sum += arr[i]
            count++
        }
        else{
            break;
        }
    }
    console.log(count)
    
  }
  if (process.env.USERNAME === 'Asus') {
      runProgram(`4 10
      5 4 2 4`)
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
  
  