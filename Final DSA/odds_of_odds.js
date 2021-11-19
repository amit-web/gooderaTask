function runProgram(input) {
    var input = input.trim().split('\n')
     var test =+input[0];
     
    for(var i=0 ,l=2;i<test;i++){

        var arr = input[l].trim().split(' ').map(Number)
        
         count=0;
         for(var j=0;j<arr.length;j++){
             if(arr[j]%2!=0){
                 count=count+1
             }
         }

         if(count%2!=0){
             console.log("Yes")
         }
         else{
             console.log("No")
         }

       
         l=l+2
    }
   
}
if (process.env.USERNAME === 'Asus') {
    runProgram(`3
1
1
2
1 101
2
1 200`)
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

