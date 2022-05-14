// https://leetcode.com/problems/validate-binary-search-tree/


class NodeTree {
    constructor(val, left, right) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

var tree = new NodeTree(5,1,4);
tree.right = new NodeTree(4,3,6);
tree.left = new NodeTree(1,null,null);
tree.right.left = new NodeTree(3,null,null);
tree.right.right = new NodeTree(6,null,null);

var isValidBST = function(root) {
    let prv = null
    
    function dfsInOrder(node){
      if(!node) {
          return true
      }
      if(!dfsInOrder(node.left)) {
          return false
      }
      if(prv !== null && node.val <= prv) {
        return false
      }
      prv = node.val
      return dfsInOrder(node.right)
    }
    
    return dfsInOrder(root)
};

console.log(isValidBST(tree));