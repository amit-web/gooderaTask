function runProgram(input) {
    var input = input.trim().split("\n")

    var test = +input[0]
    var stack =[]
    for(let i=0,l=1;i<test;i++){
        let [method,N]=input[l++].trim().split(" ")
        
       if(method=="push"){
           stack.push(Number(N))
       }
       if(stack.length!=0){
         
           if(method=="getMin"){
               let min=stack[0];

               for(let j=0;j<stack.length;j++){
                   if(min>stack[j]){
                       min = stack[j]
                   }
               }
               console.log(min)
           }

           if(method=="pop"){
            stack.pop(Number(N))
        }
       }

    }
    
}
if (process.env.USERNAME === 'Asus') {
    runProgram(`8
    push 5
    push 3
    push 1
    getMin
    pop
    getMin
    pop
    getMin`)
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

