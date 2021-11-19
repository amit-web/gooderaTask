function runProgram(input) {
  let inp = input.trim().split("\n");
  let test = +inp[0];

  for (let i = 0, line = 1; i < test; i++) {
    let N = +inp[line++];
    let arr = inp[line++].trim().split(" ").map(Number);

    let type = +inp[line++];

    let even = [];
    let odd = [];

    if (type === 1) {
      for (let j = 0; j < N; j++) {
        if (arr[j] % 2 === 0) {
          even.push(arr[j]);
        } else {
          odd.push(arr[j]);
        }
      }

      console.log(even.sort((a,b)=>{return a-b}).concat(odd.sort((a,b)=>{return a-b})).join(" "))

    }
    if(type===2){
        for (let j = 0; j < N; j++) {
            if (arr[j] % 2 === 0) {
              even.push(arr[j]);
            } else {
              odd.push(arr[j]);
            }
          }

    console.log(odd.sort((a,b)=>{return a-b}).concat(even.sort((a,b)=>{return a-b})).join(" "))
    }

   
 }



 
}
if (process.env.USERNAME === "Asus") {
  runProgram(`2
      6
      1 3 5 2 7 4
      1
      6 
      1 3 5 2 7 4
      2`);
}
process.stdin.resume();
process.stdin.setEncoding("ascii");
let read = "";
process.stdin.on("data", function (input) {
  read += input;
});
process.stdin.on("end", function () {
  read = read.replace(/\n$/, "");
  runProgram(read);
});

process.on("SIGINT", function () {
  read = read.replace(/\n$/, "");
  runProgram(read);
  process.exit(0);
});
