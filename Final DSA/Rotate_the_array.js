function runProgram(input) {
    let inp = input.trim().split("\n")
      let test = +inp[0]

      for(let i=0,line=1;i<test;i++){
         
         let [N,K] = inp[line++].trim().split(" ").map(Number)

         let arr =inp[line++].trim().split(" ").map(Number)
       
         for(let j=0;j<K;j++){
             for(let k=0;k<N-1;k++){

                //  console.log(arr[k])
                // console.log(arr[k+1])

                // console.log(arr[N-1])
                 temp = arr[k]
                 arr[k] = arr[N-1]
                 arr[N-1] =temp

                

                //  arr2.push(temp)
             }
         }

         console.log(arr.join(" "))

      }
  
    //   console.log(input);
  }
  if (process.env.USERNAME === 'Asus') {
      runProgram(`3
      3 1
      1 2 3
      2 2
      1 2
      2 3
      1 2
     `)
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
  
  