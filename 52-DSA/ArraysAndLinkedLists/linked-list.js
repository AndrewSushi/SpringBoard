/** Node: node for a singly linked list. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** LinkedList: chained together nodes. */

class LinkedList {
  constructor(vals = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    for (let val of vals) this.push(val);
  }

  /** push(val): add new value to end of list. */

  push(val) {
    let newNode = new Node(val)
    if(!this.head){
      this.head = newNode
      this.tail = this.head
    }else{
      this.tail.next = newNode
      this.tail = newNode
    }
    this.length++
  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {
    let newNode = new Node(val)
    if(!this.head){
      this.head = newNode
    }else{
      newNode.next = this.head
      this.head = newNode
    }
    if(!this.length){
      this.tail = this.head
    }
    this.length++
  }

  /** pop(): return & remove last item. */

  pop() {
    if (!this.head) {
      return null;
    }

    if (this.head === this.tail) {
      let last = this.head;
      this.head = null;
      this.tail = null;
      this.length = 0;
      return last.val;
    }

    let temp = this.head;
    while (temp.next.next != null) {
      temp = temp.next;
    }
    let last = temp.next;
    temp.next = null;
    this.tail = temp;
    this.length--;
    return last.val;
  }

  /** shift(): return & remove first item. */

  shift() {
    if(!this.head){
      return null
    }
    let first = this.head
    this.head = first.next
    if(!this.head){
      this.tail = null
    }
    this.length--
    return first.val
  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {
    if(idx < 0 || idx >= this.length){
      return null
    }
    let temp = this.head
    for(let i = 0; i < idx; i++){
      temp = temp.next
    }
    return temp.val
  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {
    if(idx < 0 || idx >= this.length){
      return null
    }
    let temp = this.head
    for(let i = 0; i < idx; i++){
      temp = temp.next
    }
    temp.val = val
  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {
    if(idx < 0 || idx > this.length){
      return null
    }

    if(idx == 0){
      this.unshift(val)
    }else if(idx == this.length){
      this.push(val)
    }else{
      let newNode = new Node(val)
      let temp = this.head
      for(let i = 0; i < idx - 1; i++){
        temp = temp.next
      }
      newNode.next = temp.next
      temp.next = newNode
      this.length++
    }
  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {
    if(idx < 0 || idx >= this.length){
      return null
    }

    if(idx == 0){
      this.shift()
    }else if(idx == this.length){
      this.pop()
    }else{
      let temp = this.head
      for(let i = 0; i < idx - 1; i++){
        temp = temp.next
      }
      let removed = temp.next
      temp.next = removed.next
      this.length--

      return removed.val
    }
  }

  /** average(): return an average of all values in the list */

  average() {
    if(!this.length){
      return 0
    }

    let sum = 0
    let temp = this.head
    while(temp){
      sum += temp.val
      temp = temp.next
    }
    return sum / this.length
  }
}

module.exports = LinkedList;
