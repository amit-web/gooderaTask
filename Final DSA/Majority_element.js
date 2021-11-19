function runProgram(input) {
  let inp = input.trim().split("\n");
  let test = +inp[0];

  for (let i = 0, line = 1; i < test; i++) {
    let N = +inp[line++];

    let arr = inp[line++].trim().split(" ").map(Number);
    var ans = Math.floor(N / 2);

    // console.log(arr,N)
    // Hash map approach:-
    // Time comlexity - o(n)
    // space comlexity - o(n)
    // worst case:- 1,2,3,4,5,6,7,8 so you have to give push all the element in empty object.

    var obj = {};

    for (let j = 0; j < N; j++) {
    //   console.log(obj[arr[j]]);
      if (obj[arr[j]]) {
        obj[arr[j]] = obj[arr[j]] + 1;
      } else {
        obj[arr[j]] = 1;
      }
    }

    // console.log(obj);
    let y = 0;
    for (let x in obj) {
      if (obj[x] > ans) {
        y = 1;
        console.log(x);
        break;
      }
    }

    if (y === 0) {
      console.log("-1");
    }

    //Brute force approach for this

    //Time complexity :- O(n2)
    //space complexity :- O(1)
    //   function findMjority(arr, N, ans) {
    //     let max = 0;
    //     var x = -1;

    //     for (let j = 0; j < N; j++) {
    //       let count = 1;
    //       for (let k = j + 1; k < N; k++) {
    //         if (arr[j] === arr[k]) {
    //           count = count + 1;
    //         }
    //       }

    //       if (count > max) {
    //         max = count;
    //         x = j;
    //       }
    //     }

    //     if (max> ans) {
    //       console.log(arr[x]);
    //     }
    //     else{
    //       console.log(-1)
    //     }
    //   }

    //   findMjority(arr, N, ans);

    // Optimized approach
    //1st sort  loop through i=0 to i=n/2 and then
    //and then compare arr[i] = arr[i+n/2]

    // Time complexity:- beacuse we are sorting here O(nlogn)
    // Space complexity - O(1)

    function findMajority(arr, N, ans) {
      let arr1 = arr.sort((a, b) => {
        return a - b;
      });

      var ind = -1
      let flag = false
      for (let j = 0; j < N / 2; j++) {
        if (arr1[j] === arr1[j + ans]) {
          ind = arr1[j];
          flag = true
        } 
      }
      if(flag){
        console.log(ind)
      }
      else{
        console.log(-1)
      }
    }

    findMajority(arr,N, ans)
  }
}
if (process.env.USERNAME === "Asus") {
  runProgram(`1
  3
  2 8 8
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
