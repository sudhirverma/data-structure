// https://leetcode.com/problems/group-anagrams/description/

var groupAnagrams = function(strs) {

    const map = new Map();

    for (let str of strs) {
        const sortStr = str.split('').sort().join('');
        if (!map.has(sortStr)) map.set(sortStr, []);
        map.get(sortStr).push(str);
    }
    return Array.from(map.values())
};

// Test Case

console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"]))
// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

