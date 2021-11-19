/*
Marks & Competition Ended
Description

You have the marks of students in the form of an array, where arr[i] represents the marks of the ith student.

Since you are a curious kid, you want to find all the marks that are not smaller than those on its right side in the array.


Input
Input Format :

The first line of input will contain a single integer n denoting the number of students.

The next line will contain n space separated integers representing the marks of students.



Constraints :

1 <= n <= 1000000

0 <= arr[i] <= 10000


Output
Output all the integers separated in the array from left to right that are not smaller than those on its right side.


Sample Input 1 

6
16 17 4 3 5 2
Sample Output 1

17 5 2
Hint

Output Explanation :

17, 5 and 2 are three integers present in the list which has no integers greater than it to its right (all the integers present in right of it)


*/

function runProgram(input) {
  let inp = input.trim().split("\n");
  let N = +inp[0];
  let arr = inp[1].trim().split(" ").map(Number);
  //   console.log(N,arr);

  let stack = [];
  let ans = [];

  for (let i = N - 1; i >= 0; i--) {
    // console.log(arr[i])

    if (stack.length === 0) {
      ans.push(arr[i]);
    } else if (stack.length > 0 && stack[stack.length - 1] <= arr[i]) {
      while (stack.length > 0 && stack[stack.length - 1] <= arr[i]) {
        stack.pop();
      }

      if (stack.length == 0) {
        ans.push(arr[i]);
      }
    }
    stack.push(arr[i]);
  }
  console.log(ans.reverse().join(" "));
}
if (process.env.USERNAME === "Asus") {
  runProgram(`6
      16 17 4 3 5 2`);
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
