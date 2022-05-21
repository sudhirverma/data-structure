// https://leetcode.com/problems/reconstruct-itinerary/

var findItinerary = function(tickets) {
    var i, curr, map = {}, countNode = 0;
    //build graph
    for(i = 0; i < tickets.length; i++){
        curr = tickets[i];
        if(!map[curr[0]]) {
          map[curr[0]] = [{dest: curr[1], visited: false}];
        }
        else {
          map[curr[0]].push({dest: curr[1], visited: false});
        }
    }

    for(i in map){
        map[i] = map[i].sort(sorting).slice(0);
    }

    return dfs("JFK", ["JFK"]);

    function sorting(a, b){
        if(a.dest === b.dest) return 0;
        else if(a.dest > b.dest) return 1;
        return -1;
    }

    function dfs(fromNode, path){
        if(countNode === tickets.length) return path;
        var currNode = map[fromNode], res;
        if(!currNode) return false;
        for(var i = 0; i < currNode.length ; i++){
            if(currNode[i].visited) {
                 continue;
            }
            currNode[i].visited = true;
            countNode++;
            path.push(currNode[i].dest);
            res = dfs(currNode[i].dest, path);
            if(res) return res;
            currNode[i].visited = false;
            countNode--;
            path.pop();
        }
        return false;
    }
};


console.log(findItinerary([["JFK","SFO"],["JFK","ATL"],["SFO","ATL"],["ATL","JFK"],["ATL","SFO"]]));
