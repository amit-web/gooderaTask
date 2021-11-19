function runProgram(input) {
    var input = input.trim().split('\n')
     var test = +input[0]
     var arr = input[1].split(' ').map(Number)

     for(var i=0;i<arr.length;i++){
         
     }
     
    console.log(input);
    console.log(arr)
}
if (process.env.USERNAME === 'Asus') {
    runProgram(`12
1 1 1 1 2 2 2 2 2 1 1 1`)
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

