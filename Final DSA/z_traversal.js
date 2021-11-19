function runProgram(input) {
    let inp = input.trim().split("\n")
    let test = +inp[0]


    for (let i = 0, l = 1; i < test; i++) {

        let n = +inp[l++];

        for (let j = 0, line = 1; j <= n; j++) {

            let arr = inp[line++].trim().split(" ").map(Number)


            if (line % 2 === 0) {
                for (let i = 0; i < arr.length; i++) {

                    for (let j = 0; j < arr.length; j++) {


                    }
                }
            }



        }

    }

    //console.log(input);
}
if (process.env.USERNAME === 'Asus') {
    runProgram(`1
3
1 2 3
4 5 6
7 8 9
`)
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

