function runProgram(input) {
    var input = input.trim().split("\n")
    var test = +input[0]
    var iq=[]
    for(var i=0,l=1;i<test;i++){
      let [name,H,W,IQ]=input[l++].trim().split(" ")
      
        iq.push(IQ)
       console.log(name,H,W,IQ)
    }
    console.log(iq);
}
if (process.env.USERNAME === 'Asus') {
    runProgram(`10
    jack 158 85 112
    john 168 74 124
    arti 148 65 120
    bhuvan 182 84 124
    navi 182 84 124
    vijay 175 88 115
    amit 180 89 119
    kevin 182 77 120
    rohit 174 85 100
    vivek 184 75 111
    
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

