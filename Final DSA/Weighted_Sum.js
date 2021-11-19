function runProgram(input) {
    var input=input.trim().split("\n")
   
    var test =+input[0]

    var j=2
    for(var i=0;i<test;i++){
       
        if(j<input.length){
          
         var arr =input[j].trim().split(' ').map(Number)
      
         var sum =0
         for (var k=0, l=1;k<arr.length;k++){
           
           
                var sum = sum + arr[k]*l
              l++ 
            } 
            console.log(sum)
         }

   
         j=j+2;
       }
   
    }
    
    

if (process.env.USERNAME === 'Asus') {
    runProgram(`2
    5
    1 2 3 4 5
    2
    100 1`)
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

