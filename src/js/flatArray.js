//数组展平

function flat(arr){
    if(!Array.isArray(arr)) return
    let res=[]

    for(let i=0;i<arr.length;i++){
        console.log(arr[i])
        if(Array.isArray(arr[i])){
            res=res.concat(flat(arr[i]))
        }else{
            console.log(arr[i])
            res=res.concat(arr[i])
        }
    }

    return res
}

console.log(flat([1,[2,3,4,['a','b']],3,[5,6,7,8]]))