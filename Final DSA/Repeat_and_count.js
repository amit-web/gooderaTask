
function runProgram(input) {
    let inp = input.trim().split("\n")
    let test = +inp[0]

    for (let i = 0, line = 1; i < test; i++) {

        let N = +inp[line++]
        let arr = inp[line++].trim().split(" ").map(Number);

        let obj = {}
        let ans = []

        for (let j = 0; j < arr.length; j++) {

            obj[arr[j]] = (obj[arr[j]] || 0) + 1

        }
        //console.log(obj)
        for (let key in obj) {
            if (obj[key] > 1) {
                ans.push(arr[N - 1] + 1)
                ans.push(key)
            }


        }

        console.log(ans.join(" "))

    }

    //console.log(input);
}
if (process.env.USERNAME === 'Asus') {
    runProgram(`3
5
1 2 3 3 4
2
1 1
3
1 2 2`)
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

