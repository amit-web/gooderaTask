//Stock span problem is also same as this problem for problem statement you  can refer the below question : question like this will be solved using stack ;

//  Observation : -- consequetive smaller or equal  elemement before it : -

//observation :-2  ---- Next greater element to left : - -

// observation -3 ---- index position store and find answer from that : -
// Signal's Capacity 
// Description

// There are many signal towers present in Bangalore.Towers are aligned in a straight horizontal line(from left to right) and each tower transmits a signal in the right to left direction.

// Tower X shall block the signal of Tower Y if Tower X is present to the left of Tower Y and Tower X is taller than Tower Y. So,the power of a signal of a given tower can be defined as :

// {(the number of contiguous towers just to the left of the given tower whose height is less than or equal to the height of the given tower) + 1}.





function runProgram(input) {
    let inp = input.trim().split("\n")
      let test = +inp[0]
  
      for(let i=0,line=1;i<test;i++){

           let N = inp[line++]

           let arr = inp[line++].trim().split(" ").map(Number);

           
          
           let stack = [];
           let ans=[];

           for(let j=0;j<N;j++){

                if(stack.length == 0){
                    ans.push(-1)
                }
                else if(stack.length>0 && stack[stack.length-1].first>arr[j]){
                    ans.push(stack[stack.length - 1].second)
                }

                else if(stack.length>0 && stack[stack.length-1].first<=arr[j]){
                      while(stack.length > 0 && stack[stack.length - 1].first<=arr[j]){
                          stack.pop()
                      }

                      if(stack.length===0){
                         ans.push(-1)
                      }
                      else{
                        ans.push(stack[stack.length - 1].second)
                      }
                }
             
                stack.push({first:arr[j],second:j})

                
           }
        
           for(let k=0;k<ans.length;k++){
               
              ans[k] = k-ans[k]
           }

           console.log(ans.join(" "))
      }

    
  
      
  }
  if (process.env.USERNAME === 'Asus') {
      runProgram(`2
      7
      100 80 60 70 60 75 85
      5
      3 5 0 9 8`)
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
  
  