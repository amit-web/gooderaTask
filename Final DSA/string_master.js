let master = "BILLIIBOBBBILLLLLLLOOOBLL"

let str = ["BILL", "BOB", "IB",]

let masterobj = {}
for(let i = 0; i < master.length; i++){
    let current = master[i]
    masterobj[current] = (masterobj[current] || 0) + 1
}

console.log(masterobj)

let ans = ""
let max = 0
for(let i = 0; i < str.length; i++){
    let strobj = {}
    for(let j = 0; j < str[i].length; j++){
        let current = str[i][j]
        strobj[current] = (strobj[current] || 0) + 1
    }
    let count = 0;
    let flag = true;
    //  console.log(strobj)
    for(let key in strobj){
        if(masterobj[key]){
            let factor = Math.floor(masterobj[key] / strobj[key])
            // console.log(str[i], factor)
            if(flag){
                count = Math.max(count, factor)
                flag = false
            }
            else if(!flag){
                count = Math.min(count, factor)
            }
        }
        else{
            count = 0
            break;
        }
    }
   
    if(count && max < count){
        max = count
        ans = str[i]
    }
    
    // console.log(count)
}
 console.log(ans)
 console.log(max)