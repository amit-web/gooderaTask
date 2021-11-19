function binarySearch(arr,low,high,key){

    // console.log(arr,low,high,key)
    if(low<=high){
        mid = low + Math.floor((high-low)/2);

        // console.log(mid);

        if(arr[mid]===key){

           
            return mid
        }

        if(key>arr[mid]){
           return binarySearch(arr,mid+1,high,key)
        }
       
        return binarySearch(arr,low,mid-1,key)
        
    }

    return -1;

}


function runProgram(input) {
    let inp = input.trim().split("\n")
      let [N, K] = inp[0].trim().split(" ").map(Number)

      let arr = inp[1].trim().split(" ").map(Number)

      let low = 0;
      let high = N-1;

     
    console.log(binarySearch(arr, low, high,K))

  
      //console.log(input);
  }
  if (process.env.USERNAME === 'Asus') {
      runProgram(`5 1
      3 4 5 1 2`)
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
  
  