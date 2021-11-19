function runProgram(input) {
  let inp = input.trim().split("\n");
  let distance = +inp[0];

  let remainder1 = distance % 1;

  //   console.log(remainder1);

  let count = 0;

  if (distance === 1 && remainder1 === 0) {
    count = count + 1;
    console.log(count)
  }

  if (distance === 2 && remainder1 === 0) {
    count = count + 1;
    console.log(count)
  }
  if (distance === 3 && remainder1 === 0) {
    count = count + 1;
    console.log(count)
  }

  if (distance === 4 && remainder1 === 0) {
    count = count + 1;
    console.log(count)
  }

  if (distance === 5 && remainder1 === 0) {
    count = count + 1;
    console.log(count)
  }

  if(distance>5){
      let ans = Math.floor(distance/5)
      let rem = distance%5

      if(rem==0){
          console.log(ans)
      }
     else if(rem ===1){
         console.log(ans+1)
      }
      else if(rem===2){
        console.log(ans+1)
      }
      else if(rem===3){
        console.log(ans+1)
      }
      else if(rem===4){
        console.log(ans+1)
      }
     
  }

 
}
if (process.env.USERNAME === "Asus") {
  runProgram(`31`);
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
