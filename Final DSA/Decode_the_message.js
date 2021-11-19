function runProgram(input) {
    var string  =  input.trim()
    
     var global_counter =0;
    for(var i=0;i<string.length;){
        
          var local_counter = 1;
         for(var j=i+1; j<string.length;j++){
           
            if(string[i]==string[j]){
                local_counter+=1
            }
            else{
                break;
            }
         }
         i=i+local_counter
         if(local_counter>global_counter){
             global_counter=local_counter
         }
    }
    console.log(global_counter)
}
if (process.env.USERNAME === 'Asus') {
    runProgram(`ATTCGGGA`)
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

