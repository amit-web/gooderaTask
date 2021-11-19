function runProgram(input) {
  let inp = input.trim().split("\n");
  let [row, col] = inp[0].trim().split(" ").map(Number);

  let str = "masaischool";

  let arr = [];

  for (let i = 0, line = 1; i < row; i++) {
    let oneline = inp[line++].trim().split(" ");

    arr.push(oneline);
  }

  let final_arr = [];

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      final_arr.push(arr[i][j]);
    }
  }

  const uniqueSet = new Set(final_arr);

  const backToArray = [...uniqueSet];

  const uniSet = new Set(str);

  const backArray = [...uniSet];

  let arr3=[];
 
  for (let i = 0; i < backToArray.length; i++) {
    for (let j = 0; j < backArray.length; j++) {
      if (backToArray[i] === backArray[j]) {
        
         arr3.push(backToArray[i])
        
      }
    }
  }

 let x = backArray.sort()
 let y = arr3.sort()
 
 
 

    if(JSON.stringify(x)===JSON.stringify(y)){
        console.log("YES")
    }
    else{
        console.log("NO")
    }
   console.log(x,y)


}
if (process.env.USERNAME === "Asus") {
  runProgram(`7 6
  o o s l o h
  a a s c o o
  s s l o i l
  a h h c o o
  o o m m m h
  i a s o o m
  o s s m i a`);
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
