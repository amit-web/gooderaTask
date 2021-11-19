/* Substrings with K distinct letters Ended
Description

Given string str of lowercase alphabets of length n and an integer K, the task is to count all substrings of length K which have exactly K distinct characters.


  Input
Input Format

First line contains n and k separated by space

Second line contains strings of length n.

  Constraints

1 <= n <= 10 ^ 6

1 <= k <= 10 ^ 6








Output
Print count of substrings of length k with k distinct letters


Sample Input 1

4 2
abcc
Sample Output 1

2
Hint

Sample 1 Explanation

Possible substrings of length K = 2 are

ab: 2 distinct characters

bc: 2 distinct characters

cc: 1 distinct character

Only two valid substrings exist {“ab”, “bc” }.


*/




function runProgram(input) {
  let inp = input.trim().split("\n");

  let l = 0;
  let [n, k] = inp[l++].trim().split(" ").map(Number);

  let str = inp[l++].trim();

  // console.log(str[0])

  //console.log(str)

  let obj = {};
  let count = 0;
  let start = 0;
  for (let i = 0; i < k; i++) {
    if (obj[str[i]] == undefined) {
      obj[str[i]] = 1;
    } else {
      obj[str[i]]++;
    }
  }

  //console.log(obj)

  // console.log(Object.keys(obj))
  // console.log(Object.keys(obj).length)

  if (Object.keys(obj).length == k) {
    count++;

  }
  //console.log(count)

  console.log(obj[str[start]])
  for (let j = k; j < n; j++) {

    if (obj[str[start]] > 1) {
      obj[str[start]]--;
    } else {
      delete obj[str[start]];
    }
    start++;

    if (obj[str[j]] == undefined) {
      obj[str[j]] = 1;
    } else {
      obj[str[j]]++;
    }
    if (Object.keys(obj).length == k) {

      count++;
    }
  }
  console.log(count);
}

if (process.env.USERNAME === "Asus") {
  runProgram(`4 2
aabbcc`);
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
