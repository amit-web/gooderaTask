function runProgram(input) {
    let inp = input.trim().split("\n")
      let test = +inp[0]
      for(let i=0,l=1;i<test;i++){

        let [N,k]=inp[l++].trim().split(" ").map(Number)

        let arr = inp[l++].trim().split(" ").map(Number).sort((a,b)=>{ return a-b})

         
        let m =0;
        let n =N-1;
        while(m<n){
            if(arr[m]+arr[n]===k){
             console.log("yes")
             break;
            }
            else if(arr[m]+arr[n]>k){
               n--;
            }
            else if(arr[m]+arr[n]<k){
                m++;
            }
            else{
              console.log("No")
            }
        }
      
        console.log(N,k,arr)
      }
     
    
    //   console.log(input);
  }
  if (process.env.USERNAME === 'Asus') {
      runProgram(`1
      6 16
      -8 1 4 45 6 10`)
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
  
  