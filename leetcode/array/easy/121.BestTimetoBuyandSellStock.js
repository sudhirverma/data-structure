// https://leetcode.com/problems/best-time-to-buy-and-sell-stock/

var maxProfit = function (prices) {
    let hash = {
        maxProfit: 0,
        day1Price: undefined
    }
    for (let i = 0; i < prices.length; i++) {
        if (hash.day1Price === undefined) {
            hash.day1Price = prices[i];
        }
        if (hash.day1Price > prices[i]) {
            hash.day1Price = prices[i];
        } else {
            let day2Price = prices[i];
            let profit = day2Price - hash.day1Price;
            if (hash.maxProfit < profit) {
                hash.maxProfit = profit;
            }
        }
    }
    return hash.maxProfit;
};