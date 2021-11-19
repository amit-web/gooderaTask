function runProgram(input) {
    var radius = +input.trim()
    var area_of_circle = 3*radius**2
    console.log(area_of_circle);
}
if (process.env.USERNAME === 'Asus') {
    runProgram(`4`)
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

