import { Queue } from "../src/Queue"

describe("Stack Tests", () => {
	let queue: Queue<number>;

	beforeEach(() => {
		queue = new Queue();
	})

	test("Is empty when nothing is pushed.", () => {
		expect(queue.isEmpty()).toBe(true);
	});

	test("Is not empty after push.", () => {
		queue.push(10);
		expect(queue.isEmpty()).toBe(false);
	});

	test("Size should be 0 when nothing is pushed.", () => {
		expect(queue.size()).toEqual(0);
	});

	test("Size should increase after push.", () => {
		const currentSize = queue.size();
		queue.push(10);
		expect(queue.size()).toEqual(currentSize + 1);
	});

	test("Size should decrease after pop.", () => {
		queue.push(10);
		const currentSize = queue.size();
		queue.pop();
		expect(queue.size()).toEqual(currentSize - 1);
	});

	test("Size become zero after clearing the stack.", () => {
		queue.push(10);
		queue.push(20);
		queue.clear();

		expect(queue.size()).toEqual(0);
	})

	test("Size should not change after peek.", () => {
		queue.push(10);
		const currentSize = queue.size();
		queue.peek();
		expect(queue.size()).toEqual(currentSize);

	})

	test("Calling pop on an empty stack should throw EmptyStackError.", () => {
		expect(() => queue.pop()).toThrow(Queue.EmptyQueueError);
	});

	test("Should pop 10 after pushing 10.", () => {
		queue.push(10);
		expect(queue.pop()).toEqual(10);
	});

	test("Should pop 10 after pushing 10 and 20.", () => {
		queue.push(10);
		queue.push(20);
		expect(queue.pop()).toEqual(10);
	});

	test("Should pop 20 after pushing 10, 20 and poping once.", () => {
		queue.push(10);
		queue.push(20);
		queue.pop();
		expect(queue.pop()).toEqual(20);

	});

	test("stack becomes empty after popping all elements", () => {
		queue.push(1);
		queue.push(2);
		queue.pop();
		queue.pop();
		expect(queue.isEmpty()).toBe(true);
	});

	test("Calling peek on an empty Stack should throw EmptyStackError.", () => {
	expect(() => queue.peek()).toThrow(Queue.EmptyQueueError);
	});

	test("Calling peek Should return 10 after pushing 10.", () => {
		queue.push(10);
		expect(queue.peek()).toEqual(10);
	});

	test("Calling peek should return 10 after pushing 10 and 20.", () => {
		queue.push(10);
		queue.push(20);
		expect(queue.peek()).toEqual(10);
	});

	test("stack works after being emptied", () => {
		queue.push(1);
		queue.pop();
		queue.push(2);
		expect(queue.pop()).toBe(2);
	});

})