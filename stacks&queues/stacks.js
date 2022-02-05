// Stacks
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.first = null;
        this.last = null;
        this.length = 0;
    }
    push(val) {
        let newNode = new Node(val);
        if (!this.first) {
            this.first = newNode;
            this.last = newNode;
        } else {
            let temp = this.first;
            this.first = newNode;
            this.first.next = temp;
        }

        return this.length++;
    }
    pop() {
        if (!this.first) return null;

        let temp = this.first;

        if (this.first === this.last) {
            this.last = null;
        }

        this.first = this.first.next;
        this.length--;

        return temp.value;
    }
}

let stack = new Stack;

stack.push('Hello');
stack.push('World');
stack.push('!');
stack.push('!');