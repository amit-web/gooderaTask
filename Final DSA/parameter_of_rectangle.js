function runProgram(input) {

    var [length,breadth]=input.trim().split(' ').map(Number)
   
    var perimeter = 2*(length+breadth)
    console.log(perimeter)
}
if (process.env.USERNAME === 'Asus') {
    runProgram(`3 6`)
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

