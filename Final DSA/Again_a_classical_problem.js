function runProgram(input) {
    var input = input.trim().split("\n")

    var test = +input[0]
    var stack=[]

    for(let i=0,l=1;i<test;i++){

        var string = input[l++].trim()

        // if(string.length%2==0){
        //     console.log("balanced")
        // }
        // else{
        //     console.log("Notbalanced")
        // }

         for(let j=0;j<string.length;j++){
             stack.push(j)

             if(string[0])
         } 
        
    }
    
}
if (process.env.USERNAME === 'Asus') {
    runProgram(`3
    {([])}
    ()
    ([]
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

