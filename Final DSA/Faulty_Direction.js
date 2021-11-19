function runProgram(input) {
    let inp = input.trim().split("\n")
    let test = +inp[0]
    
    for(let i=0,l=1;i<test;i++){
        let n = +inp[l++]

        let string = inp[l++].trim()

        let x =0;
        let y=0;

        let L=x-1;
        let R=x+1;
        let U=y+1;
        let D=y-1;

        let sum_x = 0;
        let sum_y=0;
        for(let j=0;j<n;j++){
            if(string[j]=="L"){
               
                sum_x = sum_x +L;
            }
            else if(string[j]=="R"){
              
                sum_x = sum_x + R;
            }
            else if(string[j]=="U"){
               
                sum_y= sum_y + U;
            }
            else if(string[j]=="D"){
               
                sum_y= sum_y + D;
            }
        }
        // console.log(sum)

        if(sum_y===0&&sum_x===0){
            console.log("Yes")
        }
        else{
            console.log("No")
        }
        // console.log(string,n)
    }
    // console.log(inp);
  }
  if (process.env.USERNAME === 'Asus') {
      runProgram(`2
      5
      RLRUD
      4
      LRUD`)
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
  
  