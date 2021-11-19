let master = "BILLIIBOBBBILLLLLLLOOOBLL";

let str = ["BILL", "BOB", "IB"];

let masterobj = {};

for (let i = 0; i < master.length; i++) {
  //   if(obj[master[i]]===undefined){
  //       obj[master[i]]=1
  //   }
  //   else{
  //       obj[master[i]]++
  //   }

  masterobj[master[i]] = (masterobj[master[i]] || 0) + 1;
}

// console.log(masterobj);

let ans = "";
let max = 0;

for (let i = 0; i < str.length; i++) {
  let str_obj = {};

  for (let j = 0; j < str[i].length; j++) {
    let current = str[i][j];

    str_obj[current] = (str_obj[current] || 0) + 1;
  }

//   console.log(str_obj);

  let count = 0;
  let flag = true;

  for (let key in str_obj) {
    if (masterobj[key]) {
      let factor = Math.floor(masterobj[key] / str_obj[key]);
       
      if(flag){
          count = Math.max(count, factor);
          flag=false;
      }
      else if(!flag){
          count = Math.min(count, factor);
      }
    }
    else{
        count = 0;
        break;
    }
  }


  if(count&& max<count){
      max = count;
      ans = str[i]
  }
}

console.log(ans,max)
