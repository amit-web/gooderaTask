function runProgram(input) {
    let inp = input.trim().split("\n")
      let test = +inp[0]

      var arr = inp[1].trim().split(" ").map(Number)


      function Coin(piles){
          piles.sort((a,b)=>a-b);
          var n = piles.length;
          var res=0;


          for(var i=n-2;i>=n/3;i-=2){
              res+=piles[i]
          }
          return res
      }
  
     console.log(Coin(arr))
  }
  if (process.env.USERNAME === 'Asus') {
      runProgram(`6
      2 4 1 3 5 6`)
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
  
  