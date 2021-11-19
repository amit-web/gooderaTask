let arr = [1,2,3,4];

let str = "amit"
function subArray(arr) {

    for(let i=0;i<arr.length;i++){
    
        for(let j=i+1;j<=arr.length;j++){

            //Here end point when we use slice is not  included :-
            

            console.log(arr.slice(i,j))

            console.log(str.substring(i,j))
             
        }
    }
}


subArray(arr)