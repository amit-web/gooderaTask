function check(arr,M){

  let l=0;
  let h = arr.length-1;
  let res = -1;

  while(l<=h){
    let mid = l+Math.floor((h-l)/2);

    if(arr[mid]<M){
      res=mid;
      l=mid+1;
    }
    else if(arr[mid]===M){
      h=mid-1;
  }
  else{
    h = mid-1
  }

}

  return res;
}


function runProgram(input) {
  let inp = input.trim().split("\n");
  let N = +inp[0];

  let arr = inp[1].trim().split(" ").map(Number).sort((a, b)=>{return a-b});

  let query = +inp[2];

  for (let i = 0, line = 3; i < query; i++) {
    let M = +inp[line++];

    // for (let i = 0; i <N; i++) {
    //   if (arr[i] < M) {
    //     count++;
    //   }
    // }

    let count = check(arr,M)+1

    console.log(count);
  }


  

  //

  //   console.log(input);
}
if (process.env.USERNAME === "Asus") {
  runProgram(`5
      1 4 10 5 6
      4
      2
      3
      5
      11`);
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
