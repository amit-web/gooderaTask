function runProgram(input) {
  let inp = input.trim().split("\n");
  let N = +inp[0];

  //  To convert a string in lexographical order you have to convert the string to array and then sort the array and then after join() to get string:--

  let str = inp[1].trim().split("").sort().join("");

  //   console.log(str)

  let obj = {};

  for (let i = 0; i < N; i++) {
    obj[str[i]] = (obj[str[i]] || 0) + 1;
  }

  for (key in obj) {
    console.log(key + "-" + obj[key]);
  }
}
if (process.env.USERNAME === "Asus") {
  runProgram(`31
      xiysdrfjgthkdehkyqquroroiujztqg`);
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
