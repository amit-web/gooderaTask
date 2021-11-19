function runProgram(input) {
    var input = input.trim().split('\n')
    var test = +input[0]
    var line = 1;
    var arr1 = []
    for (var i = 0; i < test; i++) {
        var arr = input[line++].trim().split(' ').map(Number)
        arr1.push(arr)
    }
    //   console.log(arr1);
    //   var b =[]
    //   for(var i=arr.length-1;i>=0;i--){
    //       var a = []
    //       for(var j=0;j<arr1[i].length;j++){
    //            a.push(arr1[j][i])
    //       }
    //       b.push(a.join(' '))
    //   }
    //   console.log(b.join('\n'))


    // console.log(arr1)
    var ans = [] 
    // var line = 1;
    // var m = 0;
    for (var j = test - 1; j >= 0; j--) {
        var c = []
        for (var i = 0; i < test; i++) {
            c.push (arr1[i][j])
           
          
        }
        ans.push(c.join(' '))
    }
    console.log(ans.join('\n')) 
     



}
if (process.env.USERNAME === 'Asus') {
    runProgram(`4
1 2 3 4
5 6 7 8
1 2 3 4
5 6 7 8`)
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

