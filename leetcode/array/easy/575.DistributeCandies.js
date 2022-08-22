// https://leetcode.com/problems/distribute-candies/

var distributeCandies = function(candyType) {
    let differentTypeOfCandy ={}
    let lengthCandyType = candyType.length;
    for (let i=0; i<lengthCandyType; i++) {
        if(!differentTypeOfCandy[candyType[i]]) {
            differentTypeOfCandy[candyType[i]] = candyType[i]
        }
    }
    let candyToEat = lengthCandyType/2;
    let lengthDifferentTypeOfCandy = Object.keys(differentTypeOfCandy).length;
    if (candyToEat <= lengthDifferentTypeOfCandy) {
        return candyToEat;
    } 
    return lengthDifferentTypeOfCandy;
};

let candyType = [1,1,2,2,3,3];

let result = distributeCandies(candyType);

console.log(result);