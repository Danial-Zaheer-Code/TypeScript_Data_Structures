
/**
 * A generic Double-Ended Queue implementation.
 *
 * It can store and remove elements from both ends.
 *
 * @typeParam T - Type of elements stored in the deque
 */
export class Deque<T> {
	private items: T[] = [];

	/**
	 * Adds an element to the back of the deque.
	 * 
	 * @param value - Element to add
	 */
	pushBack(value: T): void {
		this.items.push(value);
	}

	/**
	 * Romoves and returns the value at the back of the deque.
	 * 
	 * @throws EmptyDequeError if the deque is empty.
	 */
	popBack(): T {
		if (this.isEmpty()) {
			throw new Deque.EmptyDequeError();
		}
		return this.items.pop()!;
	}

	/**
	 * Returns the value at the back of the deque.
	 * 
	 * @throws EmptyDequeError if the deque is empty.
	 */
	peekBack(): T {
		if (this.isEmpty()) {
			throw new Deque.EmptyDequeError();
		}
		return this.items[this.items.length - 1]!;
	}

	/**
	 * Adds an element to the front of the deque.
	 * 
	 * @param value - Element to add
	 */
	pushFront(value: T): void {
		this.items.unshift(value);
	}

	/**
	 * Romoves and returns the value at the front of the deque.
	 * 
	 * @throws EmptyDequeError if the deque is empty.
	 */
	popFront(): T {
		if (this.isEmpty()) {
			throw new Deque.EmptyDequeError();
		}
		return this.items.shift()!;
	}

	/**
	 * Returns the value at the front of the deque.
	 * 
	 * @throws EmptyDequeError if the deque is empty.
	 */
	peekFront(): T {
		if (this.isEmpty()) {
			throw new Deque.EmptyDequeError();
		}
		return this.items[0]!;
	}

	/**
	 * Checks whether the deque is empty.
	 */
	isEmpty(): boolean {
		return this.size() === 0;
	}

	/**
	 * Returns the number of elements currently in the deque.
	 */
	size(): number {
		return this.items.length;
	}

	/**
	 * Clear all the elements from deque.
	 */
	clear(): void {
		this.items = [];
	}

	/**
	 * Error thrown when attempting to access or remove
	 * an element from an empty deque.
	 */
	static EmptyDequeError = class extends Error {
		constructor() {
			super("Deque is empty");
			this.name = "EmptyDequeError";
		}
	};
}
