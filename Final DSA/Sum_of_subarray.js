function Sum(x) {
  let sum = 0;

  for (let i = 0; i < x.length; i++) {
    sum += x[i];
  }

  return sum;
}

function runProgram(input) {
  let inp = input.trim().split("\n");
  let test = +inp[0];

  for (let i = 0, line = 1; i < test; i++) {
    let [N, K] = inp[line++].trim().split(" ").map(Number);

    let arr = inp[line++].trim().split(" ").map(Number);

    //      let flag = false;

    //      for(let j=0;j<N;j++) {

    //         for(let k=j+1;k<=N;k++){

    //             let subarr = arr.slice(j,k)

    //             var x=Sum(subarr)

    //             if(x===K){
    //               flag = true
    //             }

    //         }
    //      }

    //      if(flag){
    //          console.log("Yes")
    //      }
    //      else{
    //          console.log("No")
    //      }

    //second approch : -

    let sum = 0;
    let start = 0;
    let flag = false;
    for (let j = 0; j < N; j++) {
      sum = sum + arr[j];
      while (sum > K) {
        sum = sum - arr[start];
        start++;
      }

      if(sum===K){
          console.log("Yes")
          flag = true;
          break;
      }
    }

    if(!flag){
        console.log("No")
    }
  }

  //   console.log(input);
}
if (process.env.USERNAME === "Asus") {
  runProgram(`1
      4 5
      1 2 1 3
     `);
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

// function runProgram(input) {
//   let inp = input.trim().split("\n");

//   let test = +inp[0];

//   for (let i = 0, l = 1; i < test; i++) {
//     let [n, target] = inp[l++].trim().split(" ").map(Number);
//     // console.log(n,target)

//     let arr = inp[l++].trim().split(" ").map(Number);
//     let sum = 0;
//     let start = 0;
//     let flag = false;
//     for (let i = 0; i < n; i++) {
//       sum = sum + arr[i];

//       while (sum > target) {
//         sum = sum - arr[start];
//         start++;
//       }

//       if (sum === target) {
//         console.log("Yes");
//         flag = true;
//         break;
//       }
//     }

//     if (!flag) {
//       console.log("No");
//     }
//   }
//   //     let flag = false;
//   //     for (let j=0;j<arr.length;j++){
//   //         for(let k=j+1;k<=arr.length;k++){
//   //             let subarray=(arr.slice(j,k))
//   //             //  console.log(subarray)
//   //              sum =0
//   //             for(let m=0;m<subarray.length;m++){
//   //                  sum =sum+subarray[m];
//   //                 // console.log(sum)

//   //             }
//   //             // console.log(sum)
//   //             // console.log(target)
//   //             if(sum ===target){
//   //                 flag=true
//   //             }

//   //         }

//   //     }
//   //     if(flag==false){
//   //         console.log("No")
//   //      }
//   //      else{
//   //          console.log("Yes")
//   //      }
//   // }

//   //console.log(input);
// }
// if (process.env.USERNAME === "Asus") {
//   runProgram(`1
//     5 3
//     1 2 1 3 4
//     `);
// }
// process.stdin.resume();
// process.stdin.setEncoding("ascii");
// let read = "";
// process.stdin.on("data", function (input) {
//   read += input;
// });
// process.stdin.on("end", function () {
//   read = read.replace(/\n$/, "");
//   runProgram(read);
// });

// process.on("SIGINT", function () {
//   read = read.replace(/\n$/, "");
//   runProgram(read);
//   process.exit(0);
// });
