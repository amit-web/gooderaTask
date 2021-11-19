function runProgram(input) {
  let inp = input.trim().split("\n");
  let test = +inp[0];

  for (let i = 0, line = 1; i < test; i++) {
    let N = +inp[line++];
    let arr = inp[line++].trim().split(" ").map(Number);

    let harry = [];
    let jhon = [];
    let ansharry = [];
    let ansjhon = [];
    for (let j = 0; j < N; j++) {
      harry.push(arr[j]);
    }

    for (let k = N - 1; k >= 0; k--) {
      jhon.push(arr[k]);
    }

    ansharry.push(harry[0]);

 
      for(let i=0;i<N;i++) {
        for (let i = 0; i < N; i++) {
            if (jhon[i] > ansharry[i]) {
              ansjhon.push(jhon[i]);
            }
          }
          for (let i = 0; i < N; i++) {
            if (harry[i] > ansjhon[i]) {
              ansharry.push(harry[i]);
            }
          }
      }

      console.log(ansjhon,ansharry);
    }

 
  //console.log(input);
}
if (process.env.USERNAME === "Asus") {
  runProgram(`1
      11
      3 1 4 1 5 9 2 6 5 3 5
      
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
