class Node {
	constructor(data) {
		this.data = data;

		this.next = null;
	}
}

class LinkedList {
	constructor() {
		this.head = null;

		this.size = 0;
	}

	addBack(data) {
		var node = new Node(data); // create new node

		var current; // to store current Node

		if (this.head == null) this.head = node;
		else {
			current = this.head;

			while (current.next != null) {
				current = current.next;
			}

			current.next = node;
		}

		this.size++;
	}

	addFront(data) {
		var node = new Node(data); // create new Node

		var current; //to store current node

		if (this.head == null) this.head = node;
		else {
			current = this.head;

			node.next = current;

			this.head = node;
		}

		this.size++;
	}

	length() {
		return this.size;
	}

	getFirst() {
		if (this.head == null) return -1;
		else {
			return this.head.data;
		}
	}

	getLast() {
		if (this.head == null) return -1;
		else {
			var current = this.head;

			while (current.next) {
				current = current.next;
			}

			return current.data;
		}
	}
}

let ll = new LinkedList();

ll.addFront(1);

ll.addFront(2);

ll.addBack(9);

console.log('Front element is => ', ll.getFirst());

console.log('Last Element is => ', ll.getLast());

console.log('Length is => ', ll.length());
