function runProgram(input) {
    var input = input.trim().split("\n")

    var len = +input[0]
    var arr = input[1].trim().split(" ").map(Number)
    var stack =[]
    var Ans=[]
    stack.push(arr[0])
    Ans[0]=-1
    for(let i=1 ;i<len;i++){
       
        while (stack.length>0 && stack[stack.length-1]>=arr[i]){
            stack.pop()   
    }
    
    if(stack.length==0 ){
        Ans.push(-1)
        
      }
      
      else{
        Ans.push(stack[stack.length-1])
      }
      
   stack.push(arr[i])
}
    // console.log(input);
     console.log(Ans.join(" "))


}
if (process.env.USERNAME === 'Asus') {
    runProgram(`8
    39 27 11 4 24 32 32 1`)
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

