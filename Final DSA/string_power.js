
function runProgram(input) {

    
    
  let inp = input.trim().split("\n")
    let test = +inp[0]
    
    for(let i=0,l=1;i<test;i++){
        let string = inp[l++].trim()
   
          let count =1;
          let max =1;
         for (let j=1;j<string.length;j++){
             if(string[j-1]===string[j]){
                 count++
                 
             }else{
                 if(max<count){
                     max = count
                 }
                 count=1;
             }                                     //  aaabbbb
         }
        
         
         if(max<count){
            max=count
        }
        console.log(max)
       
    }
    // console.log(substring_arr);

   


}
if (process.env.USERNAME === 'Asus') {
    runProgram(`4
    aaaaaa
    aaabbb
    asd
    aabbcc
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

