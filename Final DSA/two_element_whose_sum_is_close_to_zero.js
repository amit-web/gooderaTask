function runProgram(input) {
    let inp = input.trim().split("\n")
      let test = +inp[0];

    for(let i=0 ,line=1;i<test;i++) {

       let arr = inp[line++].trim().split(" ").map(Number)

       let arr_size = arr.length;
       
        if(arr_size<2){
            console.log("Invalid input")
            return;
        }
        else{
           
          let min_1 = 0;
          let min_2 = 1;
          
         
          let min_sum = arr[min_1]+arr[min_2];

          for(let j=0;j<arr.length-1;j++){
           

            for(let k=j+1;k<arr.length;k++){
               

                 sum = arr[j]+arr[k];

                if(Math.abs(min_sum) > Math.abs(sum)){
                    min_sum = sum;

                    min_1=j
                    min_2=k
                }
            }
          }
          console.log(arr[min_1],arr[min_2]);
        }
    
      

    }
      
  }
  if (process.env.USERNAME === 'Asus') {
      runProgram(`1
      2 6 3 7 8`)
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
  
  