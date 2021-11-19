function runProgram(input) {
    let inp = input.trim().split("\n")
      let test = +inp[0]

      for(let i = 0,line=1; i < test; i++) {

        let num = +inp[line++].trim();

        let arr = inp[line++].trim().split(" ").map(Number);

        let s = [];
        let ans = [];

        for(let j = num-1;j>=0;j--) {
            while(s.length!=0&&s[s.length-1]<=arr[j]){
                s.pop();
            }
            if(s.length==0){
                ans[j]=(-1);
            }
            else{
                ans[j]=s[s.length-1]
            }
            s.push(arr[j]);
        }

        let sum =0;

        for(let k=0;k<ans.length;k++){
            if(ans[k]%2==1){
                sum = sum + arr[k]
            }
        }
        console.log(sum)

      }
     
  }
  if (process.env.USERNAME === 'Asus') {
      runProgram(`1
      5
      2 3 5 8 3`)
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
  
  