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
			node.next = this.first;
			this.first = node;
			this.last = node;
		}
		if (this.last) {
			this.last.next = node;
			this.last = node;
		}
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

/**
 * Create a queue called starTrekQ and add Kirk, Spock, Uhura, Sulu, and Checkov to the queue.
 *
 *
 */
const peek = (queue) => {
	return queue.first;
};
const isEmpty = (queue) => {
	return queue.first ? false : true;
};
const display = (queue) => {
	console.log(JSON.stringify(queue));
};
const starTrekQ = new Queue();
starTrekQ.enqueue('Kirk');
starTrekQ.enqueue('Spook');
starTrekQ.enqueue('Uhura');
starTrekQ.enqueue('Sulu');
starTrekQ.enqueue('Checkov');
console.log(peek(starTrekQ));
console.log(' ');
console.log(`Is Empty: `);
console.log(isEmpty(starTrekQ));
console.log(' ');
display(starTrekQ);
console.log(' ');
console.log(`Serving Kirk and Spock`);
console.log(' ');
starTrekQ.dequeue();
starTrekQ.dequeue();
display(starTrekQ);
module.exports = Queue;
