class _Node {
	constructor(value, next, prev) {
		this.value = value;
		this.next = next;
		this.prev = prev;
	}
}

class QueueDLL {
	constructor() {
		this.first = null;
		this.last = null;
	}
	enqueue(data) {
		const node = new _Node(data);

		if (!this.first) {
			this.first = node;
			this.last = node;
			node.next = null;
		}
		if (this.last) {
			this.last.next = node;
			node.prev = this.last;
			this.last = node;
		}
		this.first.prev = null;
		this.last.next = null;
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
	console.log(queue);
};
const starTrekQ = new QueueDLL();
starTrekQ.enqueue('Kirk');
starTrekQ.enqueue('Spock');
starTrekQ.enqueue('Uhura');
starTrekQ.enqueue('Sulu');
starTrekQ.enqueue('Checkov');
console.log(peek(starTrekQ));
// console.log(' ');
// console.log(`Is Empty: `);
// console.log(isEmpty(starTrekQ));
// console.log(' ');
display(starTrekQ);
console.log(' ');
// console.log(`Serving Kirk and Spock`);
// console.log(' ');
// starTrekQ.dequeue();
// starTrekQ.dequeue();
// display(starTrekQ);
module.exports = QueueDLL;
