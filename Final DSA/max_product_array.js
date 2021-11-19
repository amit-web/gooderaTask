//Brute force appproach Tc =

// function maxProduct(arr,n){
//     let ans = -999999999
//     for(let i=0;i<n;i++){

//         for(let j=i+1;j<=n;j++){

//             subarr = arr.slice(i,j);

//             let max = 1

//             for(let k=0;k<subarr.length;k++){
//                 max = max *subarr[k]
//             }

//            if(ans<max){
//                ans = max;
//            }
//         }
//     }

//     console.log(ans)

// }

// maxProduct([2, 3, 4, 5, -1, 0],6)

function printsubarray(arr, start, end) {
  if (end == arr.length) {
    return;
  } else if (start > end) {
    printsubarray(arr, 0, end + 1);
  } else {
    let arr1 = [];
    for (let i = start; i <= end; i++) {
      arr1.push(arr[i]);
    }
    printsubarray(arr, start + 1, end);

    let max = 1;
    var ans = -9999999999;
    for (let k = 0; k < arr1.length; k++) {
      max = max * arr1[k];
    }

    if (ans < max) {
      ans = max;
    }

    console.log(ans);
  }
}
let arr = [2, 3, 4, 5, -1, 0];
printsubarray(arr, 0, 0);

// function MaxProduct(subarr) {
//   // console.log(subarr,n)
//   let pro = 1;
//   var max = -9999999999;

//   for (let i = 0; i < subarr.length; i++) {
//     pro = pro * subarr[i];
//   }

//   return console.log(max);
// }
