function runProgram(input) {
    var input = input.trim().split('\n')

    var test = input[0];
    var line = 1
    
    for (let i = 0; i < test; i++) {
        var arr = input[line++].trim().split(' ').map(Number)
        var sum = 0;

        for (var j = 0; j < arr.length; j++) {
            sum = sum + arr[j]
        }

        var k = 0;
        if (sum % 3 == 0) {

            var out = sum / 3;

            if (out >= arr[k] && out >= arr[k + 1] && out >= arr[k + 2]) {
                console.log("Yes")
            }
            else {
                console.log("No")
            }
        }
        else {
            console.log("No")
        }

        k++;

    }


}
if (process.env.USERNAME === 'Asus') {
    runProgram(`4
    5 3 1 9 
    100 101 102 105 
    10 20 15 14 
    101 101 101 3`)
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

