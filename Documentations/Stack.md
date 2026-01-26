## Stack Documentation
**Purpose**: Store elements in LIFO (Last In First Out) order.

### Methods:

- **`Stack(): void`**
  Create a new stack.
  
  **Example:**
  ```ts
  stack Stack = new Stack();

- **`isEmpty(): boolean`**  
  Check whether the Stack is empty or not.  

  **Example:**  
  ```ts
  if (stack.isEmpty()) {
      console.log("Stack is empty");
  } else {
      console.log("Stack has elements");
  }

- **`size(): number`**
  Returns the number of elements in the stack.

  **Example:**
  ```ts
  stack.push(10);
  console.log(stack.size()); // 1

- **`clear(): void`**  
  Remove all elements from the Stack, making it empty.  

  **Example:**  
  ```ts
  stack.clear();
  console.log(stack.isEmpty()); // true


- **`push(item: T): void`**  
  Adds an element `item` to the top of the stack.
   
  **Example:**  
  ```ts
  stack.push(5);

- **`pop(): T`**  
  Removes and returns the most recently added element (top of the Stack).  
  Throws `EmptyStackError` if the Stack is empty.  

  **Example:**  
  ```ts
  stack.push(10);
  console.log(stack.pop()); // 10

- **`peek(): T`**  
  Returns the top element of the Stack without removing it.  
  Throws `EmptyStackError` if the Stack is empty.  

  **Example:**  
  ```ts
  stack.push(20);
  console.log(stack.peek()); // 20
  console.log(stack.isEmpty()); // false


