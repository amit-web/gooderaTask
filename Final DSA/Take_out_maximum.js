function runProgram(input) {
    let inp = input.trim().split("\n")
    let l=0;
    let [n,k]=inp[l++].trim().split(" ").map(Number)
    
    let arr = inp[l++].trim().split(" ").map(Number)
     
     console.log(n,k,arr)
    let sum = 0
    let  maximum_sum =0;
    for(let i = 0; i < k; i++){
        sum = sum + arr[i]
        maximum_sum =maximum_sum +arr[i];

    }
    let start = 0

    for(let j = k; j < arr.length; j++){
        sum = sum - arr[start] + arr[j]
        if(sum > maximum_sum){
            maximum_sum = sum
        }
        start++
    }

    //   for(let i=0;i<n-3;i++){
    //       for(let j=i+1;j<3;j++){
    //          console.log(arr.slice(i,j))
    //       }
    //   }
     console.log(maximum_sum);
  }
  if (process.env.USERNAME === 'Asus') {
      runProgram(`100 5
      56 96 57 87 65 82 2 74 60 81 66 84 89 28 78 62 100 58 96 29 41 43 92 37 38 38 58 81 64 -8 9 13 16 16 54 37 32 5 84 -1 30 91 24 31 85 71 13 3 56 49 91 74 28 8 85 81 78 13 69 89 72 33 99 14 71 84 26 89 3 70 33 75 88 93 12 96 35 15 6 25 74 -4 11 68 73 59 41 16 26 42 84 81 34 50 8 -4 16 20 71 23`)
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
  
  