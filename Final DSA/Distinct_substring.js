function runProgram(input) {
    let inp = input.trim().split("\n")
      let test = +inp[0]

      for(let i=0,l=1;i<test;i++){

        let n = +inp[l++]
        let str = inp[l++].trim()
       
        // let substr_arr=[]
        let items = new Set();
        let count = 0;
        for(let i =0;i<n;i++){
            let temp = "";
            let ans = new Set();
            for(let j=i+1;j<=n;j++){
             
                temp = temp +str[j]

                if(!items.has(temp)){
                    items.add(temp)

                   count =items.size;
                }
              
            }
           
        }
        console.log(count)
     
     
      
      
     
      }
    //   console.log(input);
  }
  if (process.env.USERNAME === 'Asus') {
      runProgram(`1
      3
      aaa
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
  
  