class _Node {
	constructor(data, next) {
		this.data = data;
		this.next = next;
	}
}

class Stack {
	constructor() {
		this.top = null;
	}
	push(data) {
		// if stack is empty, then the node will be on top of the stack
		if (!this.top) {
			this.top = new _Node(data, null);
			return this.top;
		}
		// if the stack is not empty, create a new node, add data and have the pointer point to the top
		const node = new _Node(data, this.top);
		this.top = node;
	}
	pop() {
		if (!this.top) return null;
		const node = this.top;
		this.top = node.next;
		return node.data;
	}
}
module.exports = Stack;
