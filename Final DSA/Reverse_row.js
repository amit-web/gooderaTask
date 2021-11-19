function runProgram(input) {
    var input = input.trim().split('\n')

    var [row] = input[0].trim().split(' ').map(Number)

    var line = 1
    arr1 = [];
    for (var i = 0; i < row; i++) {
        var arr = input[line++].trim().split(' ').map(Number)
        arr1.push(arr)
    }

    var arr2 = [];
    for (var i = 0; i < row; i++) {
        var a = []
        for (var j = row - 1; j >= 0; j--) {
            a.push(arr1[i][j])
        }
        arr2.push(a.join(' '))
    }
    console.log(arr2.join('\n'))
    // console.log(input);
}
if (process.env.USERNAME === 'Asus') {
    runProgram(`4
    1 2 3 4
    1 2 3 4
    1 2 3 4
    1 2 3 4`)
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

