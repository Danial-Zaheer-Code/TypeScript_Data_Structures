import { mock } from "node:test";
import { Deque } from "../src/Deque"


describe("Deque Tests", () => {
	let deque: Deque<number>;

	beforeEach(() => {
		deque = new Deque<number>();
	})

	describe("size()", () => {
		test("Size is 0 when nothing is pushed.", () => {
			expect(deque.size()).toEqual(0);
		})

		test("Size is 1 when 10 is pushed.", () => {
			deque.pushBack(10);
			expect(deque.size()).toEqual(1);
		})

		test("Size is 2 when after pushing 10 and 20.", () => {
			deque.pushBack(10);
			deque.pushBack(20);
			expect(deque.size()).toEqual(2);
		})

		test("Size is 1 after pushing 10, 20 and popping once.", () => {
			deque.pushBack(10);
			deque.pushBack(20);
			deque.popBack();
			expect(deque.size()).toEqual(1);
		})

		test("Size is 0 when deque is cleared.", () => {
			deque.pushBack(10);
			deque.pushBack(20);
			deque.clear();
			expect(deque.size()).toEqual(0);
		})
	})

	describe("isEmpty()", () => {
		test("Is empty when nothing is pushed.", () => {
			expect(deque.isEmpty()).toBe(true);
		})

		test("Is not empty when 10 is pushed.", () => {
			deque.pushBack(10);
			expect(deque.isEmpty()).toBe(false);
		})

		test("Is empty after deque is cleared.", () => {
			deque.pushBack(10);
			deque.pushBack(20);
			deque.clear();
			expect(deque.isEmpty()).toBe(true);
		})
	})

	describe("popBack()", () => {
		test("Calling popBack on an empty deque should throw EmptyDequeError.", () => {
			expect(() => deque.popBack()).toThrow(Deque.EmptyDequeError);
		})

		test("Calling popBack after pushing 10 should return 10.", () => {
			deque.pushBack(10);
			expect(deque.popBack()).toEqual(10);
		})

		test("Calling popBack after pushing 10 and 20 on back should return 20.", () => {
			deque.pushBack(10);
			deque.pushBack(20);
			expect(deque.popBack()).toEqual(20);
		})

		test("Calling popBack after pushing 10 and 20 on back, and popBack once should return 10.", () => {
			deque.pushBack(10);
			deque.pushBack(20);
			deque.popBack();
			expect(deque.popBack()).toEqual(10);
		})
	})

	describe("peekBack()", () => {
		test("Calling peekBack on an empty deque should throw EmptyDequeError.", () => {
			expect(() => deque.peekBack()).toThrow(Deque.EmptyDequeError);
		})

		test("Calling peekBack after pushing 10 on back should return 10.", () => {
			deque.pushBack(10);
			expect(deque.peekBack()).toEqual(10);
		})

		test("Calling peekBack after pushing 10 an 20 on back should return 20.", () => {
			deque.pushBack(10);
			deque.pushBack(20);
			expect(deque.peekBack()).toEqual(20);
		})
	})

	describe("popFront()", () => {
		test("Calling popFront on an empty deque should throw EmptyDequeError.", () => {
			expect(() => deque.popFront()).toThrow(Deque.EmptyDequeError);
		})

		test("Calling popFront after pushing 10 on front should return 10.", () => {
			deque.pushFront(10);
			expect(deque.popFront()).toEqual(10);
		})

		test("Calling popFront after pushing 10 and 20 on front should return 20.", () => {
			deque.pushFront(10);
			deque.pushFront(20);
			expect(deque.popFront()).toEqual(20);
		})

		test("Calling popFront after 10 and 20 on front, and calling popFront Once should return 10.", () => {
			deque.pushFront(10);
			deque.pushFront(20);
			deque.popFront();
			expect(deque.popFront()).toEqual(10);
		})
	})

	describe("peekFront()", () => {
		test("Calling peekFront on an empty deque should throw EmptyDequeError.", () => {
			expect(() => deque.peekFront()).toThrow(Deque.EmptyDequeError);
		})

		test("Calling peekFront after pushing 10 on front should return 10.", () => {
			deque.pushFront(10);
			expect(deque.peekFront()).toEqual(10);
		})

		test("Calling peekFront after pushing 10 an 20 on Front should return 20.", () => {
			deque.pushFront(10);
			deque.pushFront(20);
			expect(deque.peekFront()).toEqual(20);
		})
	})
});