//https://enumclass.tistory.com/113
//https://leetcode.com/problems/count-subtrees-with-max-distance-between-cities/

var countSubgraphsForEachDiameter = function(n, edges) {
    let nodes = new Array(n+1).fill().map(_=> new Array());
    let resultArr = new Array(n - 1).fill(0);
    for (let [source, dest] of edges) {
        nodes[source].push(dest);
        nodes[dest].push(source);
    }

    let permutation = 1 << n;

    for (let i = 1; i < permutation; i++) {
        if(((i-1) & i) === 0) continue;

        let subtree = i;
        let startNode = 0;
        let result = 0;

        for(let j = 0; j < n; j++) {

            if( subtree & (1 << j)) {
                startNode = j + 1;
                let tmpSubtree = subtree;
                let tmpVal = Math.max(result, dfs(startNode, 0));

                function dfs(startNode, max) {

                    let count = max;
                    tmpSubtree = tmpSubtree ^ 1 << (startNode - 1);
                    for (let endNode of nodes[startNode]) {
                        if(tmpSubtree & (1 << (endNode - 1))) {
                            count = Math.max(count, dfs(endNode, max) + 1);
                        }
                    }
                    return count;
                }

                if(tmpSubtree === 0) {
                    result = tmpVal;
                } else {
                    break;
                }
            }
        }
        if(0 < result) resultArr[result-1]++;
    }

    return resultArr;


};

console.log(countSubgraphsForEachDiameter(4, [[1,2],[2,3],[2,4]]))