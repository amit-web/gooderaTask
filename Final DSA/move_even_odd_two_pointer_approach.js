function runProgram(input) {
    let inp = input.trim().split("\n")
      let test = +inp[0]
  
      for(let i = 0,line=1; i < test; i++) {
          let arr = inp[line++].trim().split(" ").map(Number).sort((a,b)=> {return (a-b)})

          let j=0;
          let k=arr.length-1;
          let temp;
          while(j<=k){
          
            if(arr[j]%2===0 ){
                j++;
               
            }
            if(arr[k]%2!==0){
                k--;
            }
        

                temp = arr[k]
                arr[k]=arr[j]
                arr[j]=temp
               
            }
           
          
          console.log(arr) 
      }
    //   console.log(input);
  }
  if (process.env.USERNAME === 'Asus') {
      runProgram(`1
      1 2 3 4 5 6 7 8 9`)
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
  
  