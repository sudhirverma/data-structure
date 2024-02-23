// https://leetcode.com/problems/minimum-index-sum-of-two-lists/

var findRestaurant = function (list1, list2) {
    let List1Map = {};
    let minSum = Number.MAX_SAFE_INTEGER;
    let result;
    for (let i = 0; i < list1.length; i++) {
        List1Map[list1[i]] = i;
    }
    for (let i = 0; i < list2.length; i++) {
        if (List1Map[list2[i]] !== undefined && List1Map[list2[i]] + i < minSum) {
            result = [];
            minSum = List1Map[list2[i]] + i;
            result.push(list2[i]);
        } else if (List1Map[list2[i]] + i === minSum) {
            result.push(list2[i]);
        }
    }
    return result;
};


let list1 = ["Shogun", "Tapioca Express", "Burger King", "KFC"], list2 = ["Piatti", "The Grill at Torrey Pines", "Hungry Hunter Steakhouse", "Shogun"]
let result = findRestaurant(list1, list2);

console.log(result);