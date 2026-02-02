## Deque Documentation
**Purpose**: A double ended queue that can push and pop elements from both ends.

### Methods:

- **`Deque(): void`**
  Create a new deque.
  
  **Example:**
  ```ts
  Deque: Deque = new Deque();

- **`isEmpty(): boolean`**  
  Check whether the Deque is empty or not.  

  **Example:**  
  ```ts
  if (deque.isEmpty()) {
      console.log("Deque is empty");
  } else {
      console.log("Deque has elements");
  }

- **`size(): number`**
  Returns the number of elements in the deque.

  **Example:**
  ```ts
  deque.push(10);
  console.log(deque.size()); // 1

- **`clear(): void`**  
  Remove all elements from the deque, making it empty.  

  **Example:**  
  ```ts
  deque.clear();
  console.log(deque.isEmpty()); // true


- **`pushFront(item: T): void`**  
  Adds an element `item` to the front of the deque.
   
  **Example:**  
  ```ts
  deque.pushFront(5);

- **`pushBack(item: T): void`**  
  Adds an element `item` to the back of the deque.
   
  **Example:**  
  ```ts
  deque.pushBack(5);

- **`popBack(): T`**  
  Removes and returns the element on the back of the deque.  
  Throws `EmptyDequeError` if the Deque is empty.  

  **Example:**  
  ```ts
  deque.pushBack(10);
  deque.pushBack(20);
  console.log(deque.popBack()); // 20

- **`popFront(): T`**  
  Removes and returns the element on the front of the deque.  
  Throws `EmptyDequeError` if the Deque is empty.  

  **Example:**  
  ```ts
  deque.pushFront(10);
  deque.pushFront(20);
  console.log(deque.popFront()); // 20


- **`peekBack(): T`**  
  Returns the element on the back of the Deque without removing it.  
  Throws `EmptyDequeError` if the Deque is empty.  

  **Example:**  
  ```ts
  deque.pushBack(10);
  deque.pushBack(20);
  console.log(deque.peekBack()); // 20
  console.log(deque.isEmpty()); // false


- **`peekFront(): T`**  
  Returns the element on the front of the Deque without removing it.  
  Throws `EmptyDequeError` if the Deque is empty.  

  **Example:**  
  ```ts
  deque.pushFront(20);
  deque.pushFront(20);
  console.log(deque.peekFront()); // 20
  console.log(deque.isEmpty()); // false
