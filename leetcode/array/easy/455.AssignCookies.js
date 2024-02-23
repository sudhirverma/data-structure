// https://leetcode.com/problems/assign-cookies/


var findContentChildren = function (g, s) {
    let greed = g.sort((a, b) => a - b);
    let cookies = {};
    let count = 0;
    for (let i = 0; i < s.length; i++) {
        if (!cookies[s[i]]) {
            cookies[s[i]] = 1;
        } else {
            cookies[s[i]]++;
        }
    }
    let keys = Object.keys(cookies)
    for (i = 0; i < keys.length; i++) {
        let cookie = keys[i];
        if (greed[0] === undefined) break;
        if (cookie < greed[0]) {
            delete cookies[cookie];
        } else {
            count++;
            if (cookies[cookie] === 1) {
                delete cookies[cookie];
            } else {
                cookies[cookie]--;
                i--;
            }
            greed.shift();
        }
    }

    return count;
};

const g = [1, 2, 3], s = [1, 1];

console.log(findContentChildren(g, s))