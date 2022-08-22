// https://leetcode.com/problems/3sum-closest/

const threeSumClosest = function (nums, target) {
    nums.sort((a, b) => a - b);
    let closest = Infinity;
  
    for (let i = 0; i < nums.length; i += 1) {
      let [left, right] = [i + 1, nums.length - 1];
      if (nums.length === 3) return nums[0] + nums[1] + nums[2];
      while (left < right) {
        const sum = nums[i] + nums[left] + nums[right];
        if (Math.abs(sum - target) < Math.abs(closest - target)) {
          closest = sum;
        }
        if (sum > target) {
          right--;
        } else if (sum < target) {
          left++;
        } else {
          return sum;
        }
      }
    }
  
    return closest;
};

let nums = [-1,2,1,-4], target = 1;
let result = threeSumClosest(nums, target);
console.log(result);

