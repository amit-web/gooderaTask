function runProgram(input) {
  let inp = input.trim().split("\n");
  let N = +inp[0];

  let arr = inp[1].trim().split(" ").map(Number);

//   let ans = [];
//   ans.push(-1);
//   let flag = 0;
//   for (let i = N - 2; i >= 0; i--) {
//     console.log(arr[i]);
//     for (let j = i + 1; j < N; j++) {
//       if (arr[i] > arr[j]) {
//         ans.push(arr[j]);
//         break;
//       } else {
//         flag = 1;
//       }
//     }

//     if (flag) {
//       ans.push(-1);
//     }
//   }

//   console.log(ans);

  let ans =[];

  let stack=[];
   
   for(let i=N-1;i>=0;i--) {
      if(stack.length===0){
          ans.push(-1)
      }
      else if(stack.length>0 && stack[stack.length - 1]< arr[i]){
          ans.push(stack[stack.length - 1]);
      }
      else if(stack.length > 0 && stack[stack.length - 1]>=arr[i]){
          while(stack.length > 0 && stack[stack.length - 1]>=arr[i]){
                stack.pop();
          }

          if(stack.length===0){
              ans.push(-1);
          }
          else{
              ans.push(stack[stack.length-1])
          }
      }

      stack.push(arr[i])

      


   }

   console.log(ans);
}
if (process.env.USERNAME === "Asus") {
  runProgram(`5
      4 5 2 10 8`);
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
