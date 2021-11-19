function runProgram(input) {
    let inp = input.trim().split("\n")
      let arr = inp[0].trim().split(" ").map(Number)

        
      let obj = {};

      let sum = 0;
      for(let i=0;i<arr.length;i++){
        sum+=arr[i]
          obj[arr[i]]=(obj[arr[i]]||0)+1
      }

        let max = -1
        let mode;
        for(key in obj){
          if(obj[key]>max){
              max=obj[key]
              mode=Number(key)
          }
        }


        let mean = sum/arr.length

        if(mean === mode){
          return 1
        }
        else{
          return 0;
        }
        // console.log(max,mode)
      //console.log(obj)

      //console.log(arr)
  
  }
  if (process.env.USERNAME === 'Asus') {
      runProgram(`4 4 4 6 2`)
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
  
  