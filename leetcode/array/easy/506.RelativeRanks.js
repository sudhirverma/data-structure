// https://leetcode.com/problems/relative-ranks/


var findRelativeRanks = function(score) {
    let result = [];
    let rank = {
        1: 'Gold Medal',
        2: 'Silver Medal',
        3: 'Bronze Medal'
    }
    let hash = {}
    let sortDescending = score.slice().sort((a,b) => b-a);
    for (let i=0; i<sortDescending.length; i++) {
        hash[sortDescending[i]] = i + 1;
    }
    for (let i=0; i<score.length; i++) {
        if (hash[score[i]] <= 3) {
            result.push(rank[hash[score[i]]]);
            continue;
        }
        result.push(`${hash[score[i]]}`);
    }
    return result;
};


let score = [5,4,3,2,1]
let result = findRelativeRanks(score);