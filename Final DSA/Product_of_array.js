function runProgram(input) {
  let inp = input.trim().split("\n");
  let test = +inp[0];

  for (let i = 0, line = 1; i < test; i++) {
    let N = +inp[line++];

    let arr = inp[line++].trim().split(" ").map(Number);

    // //Brute force approach Tc = O(n2) Sc = O(n)

    // let arr1 = [];
    // for (let j = 0; j < N; j++) {
    //   let temp = 1;
    //   for (let k = 0; k < N; k++) {
    //     if (j === k) {
    //       continue;
    //     }

    //     temp = temp * arr[k];
    //   }
    //   arr1.push(temp);
    // }

    // console.log(arr1.join(" "));

    // Using two array optimized  Tc = O(n)  Sc = O(n);

    //Using one array optimized Tc = O(n) sc = O(n)

    let temp = 1;

    let product = []

    let temp1 = 1;

    for(j=0;j<N;j++) {
        product[j] = temp

        temp = temp * arr[j]
    }

    for(k=N-1;k>=0;k--) {
        product[k] = product[k]*temp1

        temp1 = temp1 * arr[k]
    }

    console.log(product.join(" "));


  }
}
if (process.env.USERNAME === "Asus") {
  runProgram(`1
      5
      1 2 3 4 5
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
