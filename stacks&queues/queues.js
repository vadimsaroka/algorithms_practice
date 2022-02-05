// Queues

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.length = 0;
    }
    enqueue(val) {
        let newNode = new Node(val);
        if (!this.first) {
            this.first = newNode;
            this.last = newNode;
        } else {
            let temp = this.last;
            temp.next = newNode;
            this.last = newNode;
        }

        return this.length++;
    }
    dequeue() {
        if (!this.first) return null;
        if (this.first === this.last) {
            this.last = null;
        }

        let removedNode = this.first;
        this.first = removedNode.next;
        this.length--;

        return removedNode;
    }
}

let queue = new Queue;
queue.enqueue("Hello");
queue.enqueue("World");
queue.enqueue("!");