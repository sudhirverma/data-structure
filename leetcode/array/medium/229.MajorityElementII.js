// https://leetcode.com/problems/majority-element-ii/

var majorityElement = function (nums) {
    let num1 = 0, count1 = 0, num2 = 0, count2 = 0;
    // Find the numbers which exist in the array most
    for (let num of nums) {
        if (num == num1) {
            ++count1;
        } else if (num == num2) {
            ++count2;
        } else if (count1 == 0) {
            num1 = num;
            count1 = 1;
        } else if (count2 == 0) {
            num2 = num;
            count2 = 1;
        } else {
            --count1;
            --count2;
        }
    }

    count1 = 0;
    count2 = 0;

    for (let num of nums) {
        if (num == num1) {
            ++count1;
        } else if (num == num2) {
            ++count2;
        }
    }

    let required = parseInt(nums.length / 3);
    let result = [];
    if (count1 > required) {
        result.push(num1);
    }

    if (count2 > required) {
        result.push(num2);
    }
    return result;
};

let nums = [3, 2, 3, 3, 4];
console.log(majorityElement(nums));