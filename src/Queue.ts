import { Deque } from "./Deque.js";

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
	private deque: Deque<T> = new Deque();

	/**
	 * Adds an element to the back of the queue.
	 *
	 * @param value - Element to add
	 */
	push(value: T): void {
		this.deque.pushBack(value);
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

		return this.deque.popFront();
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

		return this.deque.peekFront();
	}

	/**
	 * Returns the number of elements currently in the queue.
	 */
	size(): number {
		return this.deque.size();
	}

	/**
	 * Checks whether the queue is empty.
	 */
	isEmpty(): boolean {
		return this.size() === 0;
	}

	/**
	 * Clear all the elements from the queue.
	 */
	clear(){
		this.deque.clear();
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
