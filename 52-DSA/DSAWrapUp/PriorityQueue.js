class Node{
    constructor(value, priority){
        this.value = value
        this.priority = priority
    }
}

class PriorityQueue{
    constructor(){
        this.heap = []
    }
    enqueue(val, priority){
        const newNode = new Node(val, priority)
        this.heap.push(newNode)
        this.heapifyUp()
    }

    heapifyUp(){
        let index = this.heap.length - 1
        const element = this.heap[index]
        while(index > 0){
            let parentIdx = Math.floor((index - 1) / 2)
            let parent = this.heap[parentIdx]
            if(element.priority > parent.priority){
                break
            }
            this.heap[parentIdx] = element
            this.heap[index] = parent
            index = parentIdx
        }
    }

    dequeue(){
        if(!this.heap.length){
            return null
        }
        if(this.heap.length == 1){
            return this.heap.pop().value
        }
        const top = this.heap[0]
        this.heap[0] = this.heap.pop()
        this.heapifyDown()
        return top.value
    }

    heapifyDown() {
        let index = 0;
        const length = this.heap.length;
        const element = this.heap[0];

        while (true) {
            const leftChildIdx = 2 * index + 1;
            const rightChildIdx = 2 * index + 2;
            let leftChild, rightChild;
            let swap = null;

            if (leftChildIdx < length) {
                leftChild = this.heap[leftChildIdx];
                if (leftChild.priority < element.priority) {
                    swap = leftChildIdx;
                }
            }
            if (rightChildIdx < length) {
                rightChild = this.heap[rightChildIdx];
                if (
                    (swap === null && rightChild.priority < element.priority) ||
                    (swap !== null && rightChild.priority < leftChild.priority)
                ) {
                    swap = rightChildIdx;
                }
            }
            if (swap === null) {
                break;
            }
            this.heap[index] = this.heap[swap];
            this.heap[swap] = element;
            index = swap;
        }
    }

    printQueue(){
        console.log(this.heap)
    }
}

const PQ = new PriorityQueue()
PQ.enqueue("A", 1)
PQ.enqueue("E", 5)
PQ.enqueue("C", 3)
PQ.enqueue("B", 2)
PQ.enqueue("D", 4)
PQ.enqueue("G", 7)
PQ.enqueue("F", 6)
PQ.printQueue()
PQ.dequeue()
PQ.dequeue()
PQ.dequeue()
PQ.dequeue()
PQ.dequeue()
PQ.printQueue()