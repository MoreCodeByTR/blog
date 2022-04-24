var moveZeroes = function(nums) {
    if(nums.length<2) return nums

    let zk=null
    let vk=0

    while(vk<nums.length){
        if(nums[vk]==0){
            if(zk==null){
                zk=vk
            }
            
        }

        if(zk!=null&&zk<vk){
            nums[zk]=nums[vk]
            nums[vk]=0
            zk++
            console.log(zk)
        }

        vk++


    }

    return nums
};

console.log(moveZeroes([1,0,3,0,2]))