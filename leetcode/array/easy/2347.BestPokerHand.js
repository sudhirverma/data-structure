// https://leetcode.com/problems/best-poker-hand/

var bestHand = function (ranks, suits) {
    let suitsMap = {}
    for (let i = 0; i < suits.length; i++) {
        if (suitsMap[suits[i]]) {
            suitsMap[suits[i]]++;
        } else {
            suitsMap[suits[i]] = 1;
        }
    }
    if (Object.keys(suitsMap).length === 1) return "Flush";
    let pair = false;
    let ranksMap = {};
    for (let i = 0; i < ranks.length; i++) {
        if (ranksMap[ranks[i]]) {
            ranksMap[ranks[i]]++;
            if (ranksMap[ranks[i]] >= 3) return "Three of a Kind";
        } else {
            ranksMap[ranks[i]] = 1;
        }
    }
    if (Object.keys(ranksMap).length === 5) return "High Card";
    return "Pair";
};

const ranks = [13, 2, 3, 1, 9], suits = ["a", "a", "a", "a", "a"];
let result = bestHand(ranks, suits);
console.log(result);