function runProgram(input) {
    let inp = input.trim().split("\n")
    let string_arr = inp[0].split(" ")
    let str = -1
    let max = 1;
    //console.log(string_arr);

    for (let i = 0; i < string_arr.length; i++) {
        search(string_arr[i])
    }

   

    function search(el) {
        let obj = {};


        for (let i = 0; i < el.length; i++) {
            obj[el[i]] = (obj[el[i]] || 0) + 1

        }

        for (let key in obj) {
            if (obj[key] > max) {
                max = obj[key]
                str = el
            }
        }



        //console.log(obj)
    }
    return console.log(str);
}
if (process.env.USERNAME === 'Asus') {
    runProgram(`Hello apple pie`)
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

