export class Deque<T> {
	private items: T[] = [];

	pushBack(value: T): void {
		this.items.push(value);
	}

	popBack(): T {
		if (this.isEmpty()) {
			throw new Deque.EmptyDequeError();
		}
		return this.items.pop()!;
	}

	peekBack(): T {
		if (this.isEmpty()) {
			throw new Deque.EmptyDequeError();
		}
		return this.items[this.items.length - 1]!;
	}

	pushFront(value: T): void {
		this.items.unshift(value);
	}

	popFront(): T {
		if (this.isEmpty()) {
			throw new Deque.EmptyDequeError();
		}
		return this.items.shift()!;
	}

	peekFront(): T {
		if (this.isEmpty()) {
			throw new Deque.EmptyDequeError();
		}
		return this.items[0]!;
	}

	isEmpty(): boolean {
		return this.items.length === 0;
	}

	size(): number {
		return this.items.length;
	}

	clear(): void {
		this.items = [];
	}

	static EmptyDequeError = class extends Error {
		constructor() {
			super("Deque is empty");
			this.name = "EmptyDequeError";
		}
	};
}
