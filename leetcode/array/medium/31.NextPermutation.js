//  https://leetcode.com/problems/next-permutation/

var nextPermutation = function(nums) {
    let decrease = -1;
    const n = nums.length;
    for(let i = n-2; i>=0; i--) {
        if(nums[i] < nums[i+1]) {
            decrease = i;
            break;
        }
    }
    if(decrease === -1) {
        return reverse(nums, 0, n-1);
    } else {
        for(let i = n-1; i > decrease; i--) {
            if(nums[i] > nums[decrease]) {
                // swap i & decrease
                [nums[i], nums[decrease]] = [nums[decrease], nums[i]];
                reverse(nums, decrease+1, n-1);
                break;
            }
        }
    }
    return;
};

function reverse(arr, l, r) {
    let i = l, j = r;
    while(i<j) {
        [arr[i], arr[j]] = [arr[j], arr[i]];
        i++, j--;
    }
}

// let num = [2, 3, 1]
let num = [1,3,2]
//          i
// [2,3,1]
// [2,1,3]
// let num = [1,2,3,4];
// let num = [3,2,1];
let result = nextPermutation(num);
console.log(num)