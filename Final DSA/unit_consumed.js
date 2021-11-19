function runProgram(input) {
    var input = +input.trim()
      var price = input-80
    //   console.log(consumed)
     var unit =0;
    
     if(price>=650){
        var b =price-650
       
        unit =unit+b/10
        price=price-b
     }
    
     if(price>=500){
        var c =price-150
       
        unit =unit+c/5
        price=price-c
        
    }
    if(price>=150){
        var d =price-150
       
        unit =unit+150/3+d/5
        price=price-d
       
    }
   
    
    console.log(unit)
}
if (process.env.USERNAME === 'Asus') {
    runProgram(`455`)
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

