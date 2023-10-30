class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }

  /** insert(val): insert a new node into the BST with value val.
   * Returns the tree. Uses iteration. */

  insert(val) {
    let newNode = new Node(val)
    if(!this.root){
      this.root = newNode
      return this
    }
    let temp = this.root
    while(temp){
      if(val < temp.val){
        if(!temp.left){
          temp.left = newNode
          return this
        }
        temp = temp.left
      }else{
        if(!temp.right){
          temp.right = newNode
          return this
        }
        temp = temp.right
      }
    }
  }

  /** insertRecursively(val): insert a new node into the BST with value val.
   * Returns the tree. Uses recursion. */

  insertRecursively(val, temp=this.root) {
    if(!temp){
      this.root = new Node(val)
      return this
    }
    if(val < temp.val){
      if(!temp.left){
        temp.left = new Node(val)
        return this
      }else{
        return this.insertRecursively(val, temp.left)
      }
    }else{
      if(!temp.right){
        temp.right = new Node(val)
        return this
      }else{
        return this.insertRecursively(val, this.right)
      }
    }
  }

  /** find(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses iteration. */

  find(val) {
    let temp = this.root
    while(temp){
      if(val == temp.val){
        return temp
      }else if(val > temp.val){
        temp = temp.right
      }else{
        temp = temp.left
      }
    }
    return undefined
  }

  /** findRecursively(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses recursion. */

  findRecursively(val, temp = this.root) {
    if(!temp){
      return undefined
    }
    if(val == temp.val){
      return temp
    }else if(val > temp.val){
      return this.findRecursively(val, temp.right)
    }else{
      return this.findRecursively(val, temp.left)
    }
  }

  /** dfsPreOrder(): Traverse the array using pre-order DFS.
   * Return an array of visited nodes. */

  dfsPreOrder(node = this.root, result = []) {
    if(node){
      result.push(node.val)
      this.dfsPreOrder(node.left, result)
      this.dfsPreOrder(node.right, result)
    }
    return result
  }

  /** dfsInOrder(): Traverse the array using in-order DFS.
   * Return an array of visited nodes. */

  dfsInOrder(node = this.root, result = []) {
    if(node){
      this.dfsInOrder(node.left, result)
      result.push(node.val)
      this.dfsInOrder(node.right, result)
    }
    return result
  }

  /** dfsPostOrder(): Traverse the array using post-order DFS.
   * Return an array of visited nodes. */

  dfsPostOrder(node = this.root, result = []) {
    if(node){
      this.dfsPostOrder(node.left, result)
      this.dfsPostOrder(node.right, result)
      result.push(node.val)
    }
    return result
  }

  /** bfs(): Traverse the array using BFS.
   * Return an array of visited nodes. */

  bfs() {
    const result = []
    const queue = []
    if(this.root){
      queue.push(this.root)
    }
    while(queue.length){
      const node = queue.shift()
      result.push(node.val)
      if(node.left){queue.push(node.left)}
      if(node.right){queue.push(node.right)}
    }
    return result
  }

  /** Further Study!
   * remove(val): Removes a node in the BST with the value val.
   * Returns the removed node. */

  remove(val, node = this.root) {
    if(!node){
      return null
    }
    if(val < node.val){
      node.left = this.remove(val, node.left)
    }else if(val > node.val){
      node.right = this.remove(val, node.right)
    }else{
      if(!node.left && !node.right){
        return null
      }else if(!node.left){
        return node.right
      }else if(!node.right){
        return node.left
      }else{
        const minValue = this.findMinValue(node.right)
        node.val = minValue
        node.right = this.remove(minValue, node.right)
      }
    }
    return node
  }

  findMinValue(node){
    while(node.left){
      node = node.left
    }
    return node.val
  }

  /** Further Study!
   * isBalanced(): Returns true if the BST is balanced, false otherwise. */

  isBalanced() {
    return this.checkBalance(this.root) != -1
  }

  checkBalance(node){
    if(!node){return 0}
    
    const leftHeight = this.checkBalance(node.left)
    if(leftHeight == -1){return -1}
    
    const rightHeight = this.checkBalance(node.right)
    if(rightHeight == -1){return -1}
    
    const heightDifference = Math.abs(leftHeight - rightHeight)
    if(heightDifference > 1){return -1}

    return 1 + Math.max(leftHeight, rightHeight)
  }

  /** Further Study!
   * findSecondHighest(): Find the second highest value in the BST, if it exists.
   * Otherwise return undefined. */

  findSecondHighest() {
    if(!this.root){return undefined}

    let temp = this.root
    let parent = null

    while(temp.right){
      parent = temp
      temp = temp.right
    }
    if(!temp.left){
      return parent ? parent.val : undefined
    }

    temp = temp.left
    while(temp.right){
      temp = temp.right
    }
    return temp.val
  }
}

module.exports = BinarySearchTree;
