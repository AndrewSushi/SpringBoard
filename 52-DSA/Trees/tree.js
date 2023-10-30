/** TreeNode: node for a general tree. */

class TreeNode {
  constructor(val, children = []) {
    this.val = val;
    this.children = children;
  }
}

class Tree {
  constructor(root = null) {
    this.root = root;
  }

  /** sumValues(): add up all of the values in the tree. */

  sumValues() {
    if(!this.root){return 0}

    function recursiveSum(node){
      let sum = node.val;
      for(let child of node.children){
        sum += recursiveSum(child)
      }
      return sum
    }
    return recursiveSum(this.root)
  }

  /** countEvens(): count all of the nodes in the tree with even values. */

  countEvens() {
    if(!this.root){return 0}

    function recursiveCountEvens(node){
      let evens = node.val % 2 == 0 ? 1 : 0;
      for(let child of node.children){
        evens += recursiveCountEvens(child)
      }
      return evens
    }
    return recursiveCountEvens(this.root)
  }

  /** numGreater(lowerBound): return a count of the number of nodes
   * whose value is greater than lowerBound. */

  numGreater(lowerBound) {
    if(!this.root){return 0}

    function recursiveNumGreater(node){
      let greater = node.val > lowerBound ? 1 : 0
      for(let child of node.children){
        greater += recursiveNumGreater(child)
      }
      return greater
    }
    return recursiveNumGreater(this.root)
  }
}

module.exports = { Tree, TreeNode };
