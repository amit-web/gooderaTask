function runProgram(input) {
    let inp = input.trim().split("\n")
      let test = +inp[0]
     
      let line=1;
     
      for(let i=0; i<test; i++){
        let string = inp[line++].trim()
         
        let l=0;
        let r= string.length-1
        let status=true;
        while(l<r){
             
            if(string[l]===string[r]){
                
                l++;
                r--;
              
            }
            else{
                status=false;
                break;
            }
            
        }
      
        if(status){
            console.log("yes")
        }
        else{
            console.log("no")
        }
       
       
      }
    
    
    //   console.log(input);
  }
  if (process.env.USERNAME === 'Asus') {
      runProgram(`4
      masai
      amma
      malyalam
      malayalam`)
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
  
  