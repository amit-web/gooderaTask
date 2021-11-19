function runProgram(input) {
    let inp = input.trim().split("\n")
    let arr = inp[0].trim().split(" ").map(Number);

    //console.log(arr)

    let sum = 0;

    let flag = false;

    for (let i = 0; i < arr.length; i++) {

        if (arr[i] <= sum) {
            flag = true
        }

        sum = sum + arr[i]

    }
    if (flag) {
        console.log(false)
    }
    else {
        console.log(true)
    }

    // console.log(input);
}
if (process.env.USERNAME === 'Asus') {
    runProgram(`1 3 6 13 54`)
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

