function runProgram(input) {
    let inp = input.trim().split("\n")
    
    let l=0;
    let [n,k]= inp[l++].trim().split(" ").map(Number)
    let arr=inp[l++].trim().split(" ").map(Number)

    
    
    let subarr=[]
    for(let i=0; i<arr.length; i++){
        for(let j=i+1; j<=arr.length;j++){
        substring=(arr.slice(i,j))
        //  console.log(substring)
        let sum =0 
        for(let k=0; k < substring.length; k++){
            // console.log(substring[k])
          sum = sum + substring[k]
        }
        subarr.push(sum)
      
    }


        // let max = subarr[0]
        // for(let m=0; m<subarr.length; m++){
        //      if(subarr[m]>max){
        //          max = subarr[m]
        //      }
        // }
        // console.log(max) 
        // }
       
    }
    //  console.log(subarr)
    // console.log(n,k,arr);
  }
  if (process.env.USERNAME === 'Asus') {
      runProgram(`4 3
      2 3 4 6`)
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
  
  