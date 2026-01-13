import { Queue } from "../src/Queue"

describe("Queue Tests", () => {
	let queue: Queue<number>;

	beforeEach(() => {
		queue = new Queue<number>();
	});

	test("Should be empty when nothing is enqueued.", () => {
		expect(queue.isEmpty()).toBe(true);
	});

	test("Should not be empty when 10 is enqueued.", () => {
		queue.push(10);
		expect(queue.isEmpty()).toBe(false);
	});

	test("Should be empty when 10 is enqueued and then dequeued.", () => {
		queue.push(10);
		queue.pop();
		expect(queue.isEmpty()).toBe(true);
	});

	test("Should not be empty after enqueuing 10, 20, and then dequeuing once.", () => {
		queue.push(10);
		queue.push(20);
		queue.pop();
		expect(queue.isEmpty()).toBe(false);
	});

	test("Size should be 0 when nothing is enqueued.", () => {
		expect(queue.size()).toEqual(0);
	});

	test("Size Should be one when 10 is enqueued.", () => {
		queue.push(10);
		expect(queue.size()).toBe(1);
	});

	test("Size should be 0 when 10 is enqueued and then dequeued.", () => {
		queue.push(10);
		queue.pop();
		expect(queue.size()).toEqual(0);
	});

	test("Size should be 1 after enqueuing 10, 20, and then dequeuing once.", () => {
		queue.push(10);
		queue.push(20);
		queue.pop();
		expect(queue.size()).toBe(1);
	});

	test("Calling pop on an empty queue should throw EmptyQueueError.", () => {
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

	test("Should pop 20 after pushing 10, 20, and then popping once.", () => {
		queue.push(10);
		queue.push(20);
		queue.pop();
		expect(queue.pop()).toEqual(20);	
	});

	test("Calling peek on an empty queue should throw EmptyQueueError.", () => {
		expect(() => queue.peek()).toThrow(Queue.EmptyQueueError);
	});

	test("Calling peek should return 10 after pushing 10.", () => {
		queue.push(10);
		expect(queue.peek()).toEqual(10);	
	});

	test("Calling peek should return 10 after pushing 10 and 20.", () => {
		queue.push(10);
		queue.push(20);
		expect(queue.peek()).toEqual(10);
	});

	test("Calling peek should return 20 after pushing 10, 20, and then popping once.", () => {
		queue.push(10);
		queue.push(20);
		queue.pop();
		expect(queue.peek()).toEqual(20);	
	});
});