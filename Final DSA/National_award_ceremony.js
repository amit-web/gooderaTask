function runProgram(input) {
  let inp = input.trim().split("\n");
  let test = +inp[0];

  for (let i = 0, line = 1; i < test; i++) {
    let N = +inp[line++];

    let arr = inp[line++].trim().split(" ").map(Number);

    //   for(let j=0;j<N;j++){

    //     let isSwapped = false
    //       for(let k=0;k<N-j-1;k++){
    //           if(arr[k]>arr[k+1]){
    //               let temp = arr[k]
    //                   arr[k] = arr[k+1]
    //                   arr[k+1]=temp

    //                   isSwapped=true
    //           }
    //       }

    //       if(!isSwapped){
    //           break;
    //       }
    //   }

    // for (let j = 0; j < N - 1; j++) {
    //   if (arr[j] > arr[j + 1]) {
    //     let temp = arr[j];
    //     arr[j] = arr[j + 1];
    //     arr[j + 1] = temp;

    //     j = -1;
    //   }

    // }
    // console.log(arr.join(" "));

    //Dutch National flag Algorithm:-
    //    let  lo = 0;
    //    let hi = N-1;

    //    let mid = 0;

    //    let temp;

    //    while(mid<=hi){
    //        switch(arr[mid]){
    //            case 0:{
    //                temp = arr[lo];
    //                arr[lo]=arr[mid];
    //                arr[mid] = temp;
    //                lo++;
    //                mid++;
    //                break;
    //            }

    //            case 1 :{
    //                mid++;
    //                break;
    //            }

    //            case 2 :{
    //             temp = arr[mid];
    //             arr[mid]=arr[hi];
    //             arr[hi] = temp;

    //             hi--;
    //             break;

    //            }

    //        }
    //    }

    // Using object:-
    let obj = {};

    for (let i = 0; i < N; i++) {
      obj[arr[i]] = (obj[arr[i]] || 0) + 1;
    }

    console.log(obj);

    let arr2 = [];

    for (let key in obj) {
      console.log(obj[key]);

      for (let i = 0; i < obj[key]; i++) {
        arr2.push(key);
      }
    }

    // let x1 = obj[0];

    // let x2 = obj[1];

    // let x3 = obj[2];

    // for (let i = 0; i < x1; i++) {
    //   arr2.push(0);
    // }

    // for (let i = 0; i < x2; i++) {
    //   arr2.push(1);
    // }

    // for (let i = 0; i < x3; i++) {
    //   arr2.push(2);
    // }

    // console.log(x1, x2, x3);

    console.log(arr2.join(" "));
  }
}
if (process.env.USERNAME === "Asus") {
  runProgram(`1
  4
  2 0 2 1`);
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
