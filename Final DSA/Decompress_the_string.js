function runProgram(input) {
    let inp = input.trim()
   
    let arr = []
   
    for(let i=0;i<inp.length;i++){
        if(inp[i]==="a"||inp[i]==="b" ||inp[i]==="c" ||inp[i]==="d" ||inp[i]==="e" ||inp[i]==="f" ||inp[i]==="g" ||inp[i]==="h" ||inp[i]==="i" ||inp[i]==="j" ||inp[i]==="k" ||inp[i]==="l" ||inp[i]==="m" ||inp[i]==="n" ||inp[i]==="o" ||inp[i]==="p" ||inp[i]==="q" ||inp[i]==="r" ||inp[i]==="s" ||inp[i]==="t" ||inp[i]==="u" ||inp[i]==="v" ||inp[i]==="w" ||inp[i]==="x" ||inp[i]==="y" ||inp[i]==="z"){
            for(let j=0;j<inp[i+1];j++){
                arr.push(inp[i])
            }
        }
    }
     console.log(arr.join(""));
}
if (process.env.USERNAME === 'Asus') {
    runProgram(`a3b2`)
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

