/** BinaryTreeNode: node for a general tree. */

class BinaryTreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }

  /** minDepth(): return the minimum depth of the tree -- that is,
   * the length of the shortest path from the root to a leaf. */

  minDepth() {
    if(!this.root){return 0}

    function recursiveMinDepth(node, depth){
      if(!node){return depth}

      const leftDepth = recursiveMinDepth(node.left, depth + 1)
      const rightDepth = recursiveMinDepth(node.right, depth + 1)
      return Math.min(leftDepth, rightDepth)
    }
    return recursiveMinDepth(this.root, 1)
  }

  /** maxDepth(): return the maximum depth of the tree -- that is,
   * the length of the longest path from the root to a leaf. */

  maxDepth() {
    if(!this.root){return 0}

    function recursiveMinDepth(node, depth){
      if(!node){return depth}

      const leftDepth = recursiveMinDepth(node.left, depth + 1)
      const rightDepth = recursiveMinDepth(node.right, depth + 1)
      return Math.max(leftDepth, rightDepth)
    }
    return recursiveMinDepth(this.root, 1)
  }

  /** maxSum(): return the maximum sum you can obtain by traveling along a path in the tree.
   * The path doesn't need to start at the root, but you can't visit a node more than once. */

  maxSum() {
    if (!this.root) {
      return 0;
    }
  
    let max = Number.NEGATIVE_INFINITY;
  
    function recursiveMaxSum(node) {
      if (!node) {
        return 0;
      }
  
      const leftSum = Math.max(0, recursiveMaxSum(node.left));
      const rightSum = Math.max(0, recursiveMaxSum(node.right));
      const pathSum = leftSum + rightSum + node.val;
      max = Math.max(max, pathSum);
  
      return Math.max(leftSum, rightSum) + node.val;
    }
  
    recursiveMaxSum(this.root);
    return max;
  }
  

  /** nextLarger(lowerBound): return the smallest value in the tree
   * which is larger than lowerBound. Return null if no such value exists. */

  nextLarger(lowerBound) {
    function findNextLarger(node) {
      if (!node) {
        return null;
      }
  
      if (node.val > lowerBound) {
        return node.val;
      }
  
      const leftResult = findNextLarger(node.left);
      const rightResult = findNextLarger(node.right);
  
      if (leftResult != null && rightResult != null) {
        return Math.min(leftResult, rightResult);
      } else if (leftResult != null) {
        return leftResult;
      } else {
        return rightResult;
      }
    }
    return findNextLarger(this.root);
  }

  /** Further study!
   * areCousins(node1, node2): determine whether two nodes are cousins
   * (i.e. are at the same level but have different parents. ) */

  areCousins(node1, node2) {
    if (!this.root) {
      return false;
    }
  
    const queue = [{ node: this.root, parent: null, level: 1 }];
  
    let levelNode1 = null;
    let levelNode2 = null;
  
    while (queue.length > 0) {
      const { node, parent, level } = queue.shift();
  
      if (node === node1) {
        levelNode1 = level;
      }
      if (node === node2) {
        levelNode2 = level;
      }
  
      if (levelNode1 !== null && levelNode2 !== null) {
        break; // Both nodes found, no need to continue searching.
      }
  
      if (node.left) {
        queue.push({ node: node.left, parent: node, level: level + 1 });
      }
      if (node.right) {
        queue.push({ node: node.right, parent: node, level: level + 1 });
      }
    }
  
    return levelNode1 === levelNode2 && node1 !== node2;
  }
  

  /** Further study!
   * serialize(tree): serialize the BinaryTree object tree into a string. */

  static serialize(tree) {
    if (!tree.root) {
      return '()';
    }
  
    function serializeNode(node) {
      if (!node) {
        return '()';
      }
      const leftStr = serializeNode(node.left);
      const rightStr = serializeNode(node.right);
      return `(${node.val}${leftStr}${rightStr})`;
    }
  
    return serializeNode(tree.root);
  }
  

  /** Further study!
   * deserialize(stringTree): deserialize stringTree into a BinaryTree object. */

  static deserialize(stringTree) {
    function deserializeNode(tokens) {
      if (tokens.length === 0) {
        return null;
      }
      const token = tokens.shift();
      if (token === '()') {
        return null;
      }
      const val = parseInt(token.slice(1, -1), 10);
      const node = new BinaryTreeNode(val);
      node.left = deserializeNode(tokens);
      node.right = deserializeNode(tokens);
      return node;
    }
  
    const tokens = stringTree.substring(1, stringTree.length - 1).split(/(?=\(\)|[()])/).filter(Boolean);
    return new BinaryTree(deserializeNode(tokens));
  }
  

  /** Further study!
   * lowestCommonAncestor(node1, node2): find the lowest common ancestor
   * of two nodes in a binary tree. */

  lowestCommonAncestor(node1, node2) {
    function findLCA(node) {
      if (!node) {
        return null;
      }
      if (node === node1 || node === node2) {
        return node;
      }
  
      const leftLCA = findLCA(node.left);
      const rightLCA = findLCA(node.right);
  
      if (leftLCA && rightLCA) {
        return node; // Current node is the lowest common ancestor.
      }
  
      return leftLCA || rightLCA;
    }
  
    return findLCA(this.root);
  }
  
}

module.exports = { BinaryTree, BinaryTreeNode };
