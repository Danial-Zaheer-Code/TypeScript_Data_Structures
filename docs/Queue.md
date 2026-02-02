## Queue Documentation
**Purpose**: Store elements in FIFO (First In First Out) order.

### Methods:

- **`Queue(): void`**
  Create a new Queue.
  
  **Example:**
  ```ts
  queue: Queue = new Queue();

- **`isEmpty(): boolean`**  
  Check whether the Queue is empty or not.  

  **Example:**  
  ```ts
  if (queue.isEmpty()) {
      console.log("Queue is empty");
  } else {
      console.log("Queue has elements");
  }

- **`size(): number`**
  Returns the number of elements in the queue.

  **Example:**
  ```ts
  queue.push(10);
  console.log(queue.size()); // 1

- **`clear(): void`**  
  Remove all elements from the Queue, making it empty.  

  **Example:**  
  ```ts
  queue.clear();
  console.log(queue.isEmpty()); // true


- **`push(item: T): void`**  
  Adds an element `item` to the frnt of the queue.
   
  **Example:**  
  ```ts
  queue.push(5);

- **`pop(): T`**  
  Removes and returns the element on the back of the Queue.  
  Throws `EmptyQueueError` if the Queue is empty.  

  **Example:**  
  ```ts
  queue.push(10);
  console.log(queue.pop()); // 10

- **`peek(): T`**  
  Returns the element on the back of the Queue without removing it.  
  Throws `EmptyQueueError` if the Queue is empty.  

  **Example:**  
  ```ts
  queue.push(20);
  console.log(queue.peek()); // 20
  console.log(queue.isEmpty()); // false


