// function rotateLeft(d,arr) {

//     return arr.map(() => {
//         if (d === arr.length) {
//           d= 0;
//         }

//         return arr[d++];
//       });

// //   return

// }

// console.log(rotateLeft(4,[1,2,3,4,5]))

//Brute force approcah :

let temp = [];
let d = 2;

let arr = [1, 2, 3, 4, 5];
let N = 5;

for (let i = 0; i < d; i++) {
  temp.push(arr[i]);
}

for (let i = 0; i < N - d ; i++) {
  arr[i] = arr[i + d];
}

// console.log(arr);

for(let i=N-1;i>=N-d;i--){
   arr.splice(i,temp[i])
}

console.log(arr)
