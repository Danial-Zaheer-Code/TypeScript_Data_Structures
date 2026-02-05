import { Deque } from "./Deque.js";

/**
 * A generic Stack implementation.
 *
 * Stores elements in LIFO (Last-In, First-Out) order.
 *
 * @typeParam T - Type of elements stored in the stack
 */
export class Stack<T> {
	private deque : Deque<T> = new Deque<T>();

	/**
	 * Adds an element to the top of the stack.
	 *
	 * @param value - Element to push onto the stack
	 */
	push(value: T): void {
		this.deque.pushBack(value);
	}

	/**
	 * Removes and returns the top element of the stack.
	 *
	 * @throws EmptyStackError if the stack is empty
	 */
	pop(): T {
		if (this.isEmpty()) {
			throw new Stack.EmptyStackError();
		}

		return this.deque.popBack();
	}

	/**
	 * Returns the element at the top of the stack without removing it.
	 *
	 * @throws EmptyStackError if the stack is empty
	 */
	peek(): T {
		if (this.isEmpty()) {
			throw new Stack.EmptyStackError();
		}

		return this.deque.peekBack();
	}

	/**
	 * Checks whether the stack is empty.
	 */
	isEmpty(): boolean {
		return this.size() === 0;
	}

	/**
	 * Returns the number of elements in the stack.
	 */
	size(): number {
		return this.deque.size();
	}

	/**
	 * Clear all the elements from the stack.
	 */
	clear(): void {
		this.deque.clear();
	}

	/**
	 * Error thrown when attempting to access or remove
	 * an element from an empty stack.
	 */
	static EmptyStackError = class extends Error {
		constructor() {
			super("Stack is empty");
			this.name = "EmptyStackError";
		}
	};
}
