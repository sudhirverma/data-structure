// https://leetcode.com/problems/number-of-ways-to-reconstruct-a-tree/

const NO_SOLUTION = 0
const ONE_WAY = 1
const MANY_WAYS = 2

var checkWays = function(pairs) {
    //map each node to all nodes on its path (ancestors, itself and decendants) 
    let linkedNodes = buildLinkedNodes(pairs)
    
    let allNodes = Object.keys(linkedNodes).map(node => parseInt(node))
    
    //root must be a node that is linked to all other nodes
    let root = nodeWithMaxLinks(allNodes, linkedNodes)
    if(linkedNodes[root].length !== allNodes.length) {
        return NO_SOLUTION
    }
    
    return checkWaysRecursive(root, [root], linkedNodes)
}

/**
    A recursive call that checks if there is a valid subtree starting from the given node, excluding its ancestors.
    
    node = the given node to check its subtree
    ancestors = the nodes in the tree above the given node, and the given node itself
    linkedNodes = the map built above. doesn't change between calls
*/
function checkWaysRecursive(node, ancestors, linkedNodes) {    
    let unassignedDescendants = difference(linkedNodes[node], ancestors) //all linked nodes that aren't ancestors must be descendants (child, or decendant of child..) we will try to assign them and form a valid tree.
    let hasManyWays = false
    
    while(unassignedDescendants.length > 0) {
        //the node with max links could either be a child or a decendant of a child with the same number of links as the child. in the latter case it means there is more than one solution. And in any case, if there is a valid solution, there must exist a valid tree where the selected node would be a direct child.
        //for example, if node=1, unassignedDescendants = [2,3,4], linkedNodes={1: [1,2,3,4], 2:[1,2,3], 3:[1,2,3], 4:[1,4]}, nodeWithMaxLinks will return either 2 or 3 and one of them must be a child of 1
        let child = nodeWithMaxLinks(unassignedDescendants, linkedNodes)
        
        //each node is linked to all of its decendants and ancestors, so in particular it should contain all decendants and ancestors of its children. 
        //if child is linked to a node that parent isn't linked to, there is no valid solution
        // console.log(difference(linkedNodes[child], linkedNodes[node]));
        if(difference(linkedNodes[child], linkedNodes[node]).length > 0) {
            return NO_SOLUTION
        }
        //if parent and child are linked to the same nodes (they have the same length, and we know the difference is 0 from the check above), then we can swap between them and this means there is more than one solution
        //for example, for inkedNodes={1: [1,2,3,4], 2:[1,2,3], 3:[1,2,3], 4:[1,4]} we can swap between 2 and 3 and either one could be a child of 1.
        if(linkedNodes[child].length === linkedNodes[node].length) {
            hasManyWays = true 
        }
        
        //the recursive call: for the selected child, check whether is has a valid subtree
        let ways = checkWaysRecursive(child, [...ancestors, child], linkedNodes)
        
        if(ways == NO_SOLUTION) {
            return NO_SOLUTION
        }
        if(ways == MANY_WAYS) {
            hasManyWays = true
        }
        
        //if we got here, there are either one or many valid subtrees for the child. Lets remove all the nodes of the subtree from the descendants list and continue to the next child
        unassignedDescendants = difference(unassignedDescendants, linkedNodes[child])
    }
    
    //by exiting the while loop, we are now sure that we can construct a valid subtree for the given node.
    return hasManyWays ? MANY_WAYS : ONE_WAY
}
    
/**
    Returns all elements that are in array a and not in array b
    Similar to lodash's _.difference
    For example, for: a [1,2,3,4], b [2,4,8] the return value would be [1,3]
*/
function difference(a, b) {
    const dif =  a.filter(x => {
        return !b.includes(x)
    });
    return dif;
}

/**
    Returns the node with the maximum links out of the given node
    For example, for: nodes [2,3,4], linkedNodes {1: [1,2,3,4], 2:[1,2,3], 3:[1,2,3], 4:[1,4]} the return value would be either 2 or 3
*/
function nodeWithMaxLinks(nodes, linkedNodes) {
    const maxNode =  nodes.reduce((x,y) => {
        return linkedNodes[x].length > linkedNodes[y].length ? x : y
    });
    return maxNode;
}

/**
    Linked nodes is a map between a node and all the nodes on its path (ancestors, itself and children)
    For example, for [[1,2], [1,3]] linkedNodes will be {1: [1,2,3], 2:[1,2], 3:[1,3]}
*/  
function buildLinkedNodes(pairs) {
    const linkedNodes = {}
    let first, second
    pairs.forEach(pair => {
        first = pair[0]
        second = pair[1]
      
        linkedNodes[first] = linkedNodes[first] || [first]
        linkedNodes[second] = linkedNodes[second] || [second]
        
        linkedNodes[first].push(second)
        linkedNodes[second].push(first)
    })
    
    return linkedNodes
}

// let pairs = [[1,2],[2,3], [3,4]]
// let pairs = [[1,2],[2,3],[1,3]]
let pairs = [[1,2],[2,3],[2,4],[1,5]]

console.log(checkWays(pairs));