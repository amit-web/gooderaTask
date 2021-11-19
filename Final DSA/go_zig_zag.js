function runProgram(input) {
    var input = input.trim().split('\n')

    var [row, col] = input[0].trim().split(' ').map(Number)
    // console.log(row,col)
    // console.log(input);
    var line = 1
    arr1 = [];
    for (var i = 0; i < row; i++) {
        var arr = input[line++].trim().split(' ').map(Number)
        // console.log(arr)

        if (line % 2 == 0) {

            right_left(arr)

        }
        else {
            left_right(arr)

        }

    }


    function left_right(arr) {

        for (var i = 0; i < arr.length; i++) {

            arr1.push(arr[i])

        }

    }

    function right_left(arr) {
        for (var i = arr.length - 1; i >= 0; i--) {

            arr1.push(arr[i])
        }
    }
    console.log(arr1.join(' '))


}
if (process.env.USERNAME === 'Asus') {
    runProgram(`5 5
    4 7 1 1 7
    8 9 9 6 1
    6 4 9 5 1
    7 7 4 7 7
    8 6 2 5 5`)
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

