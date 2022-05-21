// https://leetcode.com/problems/evaluate-division/

var calcEquation = function(equations, values, queries) {
    let pathMap = {}
  
    for (let i = 0; i < equations.length; i++) {
      if (!pathMap[equations[i][0]]) {
        pathMap[equations[i][0]] = []
      }
      if (!pathMap[equations[i][1]]) {
        pathMap[equations[i][1]] = []
      }
  
      pathMap[equations[i][0]].push([equations[i][1], values[i]])
      pathMap[equations[i][1]].push([equations[i][0], 1 / values[i]])
    }
  
    const results = queries.map(query => {
      return solve(query, pathMap)
    })
    return results
  }

// [["a","c"],["b","a"],["a","e"],["a","a"],["x","x"]]
  
  function solve(query, pathMap) {
    const queryNumerator = query[0]
    const queryDenominator = query[1]
    // If the numerator or denominator do not exist in pathMap, return -1
    if (!(queryNumerator in pathMap) || !(queryDenominator in pathMap)) {
      return -1
    }
    // If the numerator and denominator are the same, return 1
    if (queryNumerator == queryDenominator) {
      return 1
    }
  
    // Use slice to initialize a new array of queryNumerator's edges
    let arr = pathMap[queryNumerator].slice()
    let seen = []
  
    while (arr.length) {
      const edge = arr.shift()
      const edgeValue = edge[0]
      const edgeWeight = edge[1]
  
      // If the edge value matches the query's denominator, then we have a winner
      if (edgeValue == queryDenominator) {
        return edgeWeight
      }
      // If there's no match, want to add it to our 'seen' values so we don't visit it again
      // Then we want to push the new path we're taking to the queue
      seen.push(edgeValue)
      pushPathToQueue(edgeValue, edgeWeight, pathMap, seen, arr)
    }
  
    return -1
  }
  
  function pushPathToQueue(currentEdgeValue, currentEdgeWeight, pathMap, seen, arr) {
    const newPaths = pathMap[currentEdgeValue]
  
    for (let edge = 0; edge < newPaths.length; edge++) {
      const newEdge = newPaths[edge]
      if (seen.includes(newEdge[0])) {
        continue
      }
      arr.push([newEdge[0], newEdge[1] * currentEdgeWeight])
    }
  }

console.log(calcEquation([["a","b"],["b","c"]], [2.0,3.0], [["a","c"],["b","a"],["a","e"],["a","a"],["x","x"]]))