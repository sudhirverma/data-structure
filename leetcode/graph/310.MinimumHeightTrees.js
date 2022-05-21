// https://leetcode.com/problems/minimum-height-trees/

var findMinHeightTrees = function (n, edges) {
    if (n === 1) {
        return [0];
    }

    if (n === 2) {
        return edges[0];
    }
    let roots = createGraph(edges);
    let queue = [];
    for (let i = 0; i < n; i++) {
        if (roots[i]?.length === 1) {
            queue.push(i);
        }
    }
    while (queue.length !== Object.keys(roots).length) {
        const currentLevelLength = queue.length;

        for (let i = 0; i < currentLevelLength; i++) {
            const leaf = queue.shift();
            const parentVal = roots[leaf][0];
            let parent = roots[parentVal];
            delete roots[leaf];
            roots[parentVal] = parent.filter((val) => {
                return val != leaf
            });
            if (roots[parentVal].length === 1) {
                queue.push(parentVal);
            }
        }
    }
    return queue;
}

function createGraph(edges) {
    const hash = {};
    for (let i = 0; i < edges.length; i++) {
        if (!hash[edges[i][0]]) {
            hash[edges[i][0]] = [edges[i][1]]
        } else {
            hash[edges[i][0]].push(edges[i][1])
        }

        if (!hash[edges[i][1]]) {
            hash[edges[i][1]] = [edges[i][0]]
        } else {
            hash[edges[i][1]].push(edges[i][0])
        }
    }
    return hash;
}



console.log(findMinHeightTrees(4, [[1,0],[1,2],[1,3]]))
