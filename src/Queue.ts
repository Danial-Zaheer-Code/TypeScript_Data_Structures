export class Queue<T>{
	size(): number {
		return this.items.length - this.head;
	}

	pop() : T{
		if(this.isEmpty()){
			throw new Queue.EmptyQueueError();
		}

		const value =  this.items[this.head];
		this.head++;

		if(this.head === 50 && this.head * 2 >= this.items.length){
			this.items = this.items.slice(this.head);
			this.head = 0;
		}

		return value!;
	}

	peek() : T{
		if(this.isEmpty()){
			throw new Queue.EmptyQueueError();
		}

		return this.items[this.head]!;
	}

	private items : T[] = [];
	private head : number = 0;
	
	push(value: T) {
		this.items.push(value);
	}

	isEmpty(): boolean {
		return this.size() === 0;
	}

	static EmptyQueueError = class extends Error {
	constructor() {
	  super("Queue is empty");
	  this.name = "EmptyQueueError";
	}
  };

}