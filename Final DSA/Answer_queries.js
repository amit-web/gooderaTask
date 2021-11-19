function runProgram(input) {
  let inp = input.trim().split("\n");
  let N = +inp[0];
  let arr = inp[1].trim().split(" ").map(Number).map(Number);
  let querry = +inp[2];
  let q_array = inp[3].trim().split(" ").map(Number);

  //   console.log(q_array, arr);

  //   for (let i = 0; i < querry; i++) {
  //     let flag = false;
  //     for (let j = 0; j < N; j++) {
  //       if (q_array[i] === arr[j]) {
  //         flag = true;
  //       }
  //     }
  //     if (flag) {
  //       console.log("YES");
  //     } else {
  //       console.log("NO");
  //     }
  //   }

  // let final =arr.concat(q_array);

  // console.log(final)

  // let obj = {}

  // for(let i=0;i<final.length;i++) {

  //   if(obj[final[i]] === undefined) {
  //     obj[final[i]] =1
  //   }
  //   else{
  //     obj[final[i]]+=1
  //   }
  // }

  // let flag = false;
  // for(key in obj ){

  //   if(obj[key]>1){
  //     flag=true;
  //   }
  // }

  // if(flag){
  //   console.log("YES");
  // }
  // else{
  //   console.log("NO");
  // }

  // console.log(obj)

  //   arr.sort();
  //   q_array.sort();

  //   let ans = [];

  //   let i = 0;
  //   let j = 0;

  //   while (i < arr.length && j < q_array.length) {
  //     if (arr[i] === q_array[j]) {
  //       ans.push(arr[i]);
  //       i += 1;
  //       j += 1;
  //     } else if (arr[i] < q_array[j]) {
  //       i += 1;
  //     } else {
  //       j += 1;
  //     }
  //   }
  // console.log(ans)


  //This method is also right but time limit exceed occured : ----

  // for (let i of q_array) {
  //   if (arr.includes(i)) {
  //     console.log("YES");
  //   } else {
  //     console.log("NO");
  //   }
  // }
}
if (process.env.USERNAME === "Asus") {
  runProgram(`5
      1 2 3 4 5
      3
      3 5 7`);
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
