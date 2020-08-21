class _Node {
	constructor(value) {
		this.value = value;
	}
}

class Queue {
	constructor() {
		this.first = null;
		this.last = null;
	}
	enqueue(data) {
		const node = new _Node(data);

		if (!this.first) {
			this.first = node;
		}
		if (this.last) {
			this.last.next = node;
		}
		this.last = node;
	}
	dequeue() {
		if (!this.first) return;
		const node = this.first;
		this.first = this.first.next;
		if (node === this.last) {
			this.last = null;
		}
		return node.value;
	}
}
module.exports = Queue;
