let k =3;

let arr = [9,4,9,7,4];

let obj ={};

for(let i = 0; i <arr.length; i++){
    if(obj[arr[i]]===undefined){
        obj[arr[i]]=arr[i];
    }
    else{
        obj[[i]]++
    }
}

console.log(obj)

  
  