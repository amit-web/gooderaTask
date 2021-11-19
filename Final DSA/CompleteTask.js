function runProgram(input) {
    let inp = input.trim().split("\n")
      let N = +inp[0];
      
      var array =[];
      for(let i = 0 ;i < N; i++){
           array.push(inp[i+1].split(" ").map(Number))
      }

      array.sort(function(a, b){return a[0]-b[0]})

      let array1 = [];
      let array2 = [];

      for(let i=0;i<N;i++){
          array1.push(array[i][0]);
          array2.push(array[i][1]);

      }

      let finish =0;
      let reward=0;
      let initial =0;

      for(let i=0;i<array1.length;i++){
          initial=initial+array1[i];
          reward=reward + array2[i]-initial;
      }

      console.log(reward)



  
     
  }
  if (process.env.USERNAME === 'Asus') {
      runProgram(`3
      6 10
      8 15
      5 12`)
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
  
  