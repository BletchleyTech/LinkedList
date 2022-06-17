module.exports = class LinkedList {
	#head;
	#length;
	constructor() {
		this.#head = {
			prev: null,
			next: null,
			data: null,
		};
		this.#length = 0;
	}
	get head() {
		return this.#head;
	}
	get length() {
		return this.#length;
	}
	get list() {
		let current = this.#head;
		let list = [];
		while (current !== null) {
			list.push(current.data);
			current = current.next;
		}
		return list.join(" -> ");
	}
	add(nodeData) {
		if (this.#head.data === null) {
			this.#head.data = nodeData;
		} else {
			let current = this.#head;
			while (current.next !== null) {
				current = current.next;
			}
			const newNode = {
				prev: current,
				next: null,
				data: nodeData,
			};
			current.next = newNode;
			newNode.prev = current;
		}
		this.#length++;
	}
	addMany(...nodes) {
		nodes.flat().forEach((node) => this.add(node));
	}
	remove(position) {
		const current = this.#getPosition(position);
		if (current === this.head) {
			this.#head = current.next;
		} else if (current.next === null) {
			current.prev.next = null;
		} else {
			current.prev.next = current.next;
			current.next.prev = current.prev;
		}
		this.#length--;
		return current;
	}
	#getPosition(position) {
		if (position <= 0 || position > this.#length) {
			throw new Error("Position out of bounds");
		}
		let current = this.#head;
		let counter = 1;
		while (counter < position) {
			current = current.next;
			counter++;
		}
		return current;
	}
	nodeAt(position) {
		return this.#getPosition(position);
	}
	valueAt(position) {
		return this.#getPosition(position).data;
	}
};
