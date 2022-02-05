// Binary Search Tree

class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }
    insert(val) {
        let newNode = new Node(val);

        if (!this.root) {
            this.root = newNode;
        } else {
            let current = this.root;

            while (true) {
                if (val === current.value) return undefined;
                if (val < current.value) {
                    if (current.left === null) {
                        current.left = newNode;
                        return this;
                    }
                    current = current.left;
                } else {
                    if (current.right === null) {
                        current.right = newNode;
                        return this;
                    }
                    current = current.right;
                }
            }
        }

        return this;
    }
    find(val) {
        if (!this.root) return false;
        let current = this.root;

        while (current) {
            if (val === current) return true;
            if (val < current.value) {
                current = current.left;
            } else if (val > current.value) {
                current = current.right;
            } else {
                return true;
            }
        }

        return false;
    }
    BFS() {
        let data = [],
            queue = [],
            node = this.root;
        queue.push(node);

        while (queue.length) {
            node = queue.shift();
            data.push(node.value);
            if (node.left) {
                queue.push(node.left);
            }
            if (node.right) {
                queue.push(node.right);
            }
        }

        return data;
    }
    DFSPreOrder() {
        let data = [];
        function traverse(node) {
            data.push(node.value);
            if (node.left) {
                traverse(node.left);
            }
            if (node.right) {
                traverse(node.right);
            }
        };

        traverse(this.root);

        return data;
    }
    DFSPostOrder() {
        let data = [];
        function traverse(node) {
            if (node.left) traverse(node.left);
            if (node.right) traverse(node.right);
            data.push(node.value);
        };

        traverse(this.root);
        return data;
    }
    DFSInOrder() {
        let data = [];
        function traverse(node) {
            if (node.left) traverse(node.left);
            data.push(node.value);
            if (node.right) traverse(node.right);
        };

        traverse(this.root);
        return data;
    }
}

let tree = new BinarySearchTree();
tree.insert(10);
tree.insert(15);
tree.insert(7);
tree.insert(2);