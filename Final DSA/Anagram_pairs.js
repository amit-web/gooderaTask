function runProgram(input) {
  let inp = input.trim().split("\n");
  let test = +inp[0];

  //console.log(test);

  let count = 1;
  while (test > 0) {
    let n = +inp[count];
    let str_array = [];
    for (let i = 1; i <= n; i++) {
      str_array.push(inp[i + count].split("").sort().join(""));
    }

    checkAnagramsPairs(str_array, n);
    count += n + 1;
    test--;
  }

  function checkAnagramsPairs(str_array, n) {
    // console.log(str_array,n)
    let obj = {};

    for (let i = 0; i < n; i++) {
      if (obj[str_array[i]] === undefined) {
        obj[str_array[i]] = 1;
      } else {
        obj[str_array[i]] = obj[str_array[i]] + 1;
      }
    }

    // console.log(obj);
    let count = 0;
    for (let key in obj) {
      let value = obj[key] * (obj[key] - 1);

      count = count + value / 2;
    }

    console.log(count);
  }
}
if (process.env.USERNAME === "Asus") {
  runProgram(`2
  5
  aaaaabbbbb
  baabbbbaaa
  aaaabbbbba
  xxxxxxxxxy
  yxxxxxxxxx
  2
  abcdefghij
  jighdefabc
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
