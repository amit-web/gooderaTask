
function runProgram(input) {
  let inp = input.trim().split("\n");
  let test = +inp[0];
  let final_ans=[];
  let obj = {};
  for (let i = 0, line = 1; i < test; i++) {
    let str = inp[line++].trim();
    checkAnagrams(str, final_ans,obj);
  }

  function checkAnagrams(str, final_ans,obj) {
    let sorted_str = str.split("").sort().join("");



    if (!obj[sorted_str]) {
      final_ans.push(str);

      obj[sorted_str] = 1;
    }
  }

  final_ans.sort()

  console.log(final_ans.length)

  for(i in final_ans){
    console.log(final_ans[i])
  }

  
}
if (process.env.USERNAME === "Asus") {
  runProgram(`5
    eodc
    odec
    code
    baca
    aabc`);
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
