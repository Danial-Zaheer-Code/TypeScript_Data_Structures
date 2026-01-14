/**
 * A generic Queue implementation.
 *
 * Stores elements in FIFO (First-In, First-Out) order.
 *
 * @typeParam T - Type of elements stored in the queue
 */
export class Queue<T> {
	private items: T[] = [];
	private head: number = 0;

	/**
	 * Returns the number of elements currently in the queue.
	 */
	size(): number {
		return this.items.length - this.head;
	}

	/**
	 * Checks whether the queue is empty.
	 */
	isEmpty(): boolean {
		return this.size() === 0;
	}

	/**
	 * Adds an element to the back of the queue.
	 *
	 * @param value - Element to add
	 */
	push(value: T): void {
		this.items.push(value);
	}

	/**
	 * Removes and returns the element at the front of the queue.
	 *
	 * @throws EmptyQueueError if the queue is empty
	 */
	pop(): T {
		if (this.isEmpty()) {
			throw new Queue.EmptyQueueError();
		}

		const value = this.items[this.head];
		this.head++;

		// Reclaims unused space when the head grows large
		if (this.head === 50 && this.head * 2 >= this.items.length) {
			this.items = this.items.slice(this.head);
			this.head = 0;
		}

		return value!;
	}

	/**
	 * Returns the element at the front of the queue without removing it.
	 *
	 * @throws EmptyQueueError if the queue is empty
	 */
	peek(): T {
		if (this.isEmpty()) {
			throw new Queue.EmptyQueueError();
		}

		return this.items[this.head]!;
	}

	/**
	 * Error thrown when attempting to access or remove
	 * an element from an empty queue.
	 */
	static EmptyQueueError = class extends Error {
		constructor() {
			super("Queue is empty");
			this.name = "EmptyQueueError";
		}
	};
}
