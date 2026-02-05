# danial-ts-containers

## Introduction

This repository provides a collection of reusable and well-tested data structures implemented in TypeScript.  
The goal of this project is to offer clean, generic, and easy-to-use implementations for learning and practical use.


**url**: https://github.com/Danial-Zaheer-Code/danial-ts-containers

## List of Data Structures

- Stack
- Queue
- Deque

## Documentation

Detailed documentation for each data structure is available at: https://github.com/Danial-Zaheer-Code/danial-ts-containers/tree/main/docs.

## Installation

You can install **danial-ts-containers** via npm, yarn, or pnpm:

### Using npm

 ```bash
npm install danial-ts-containers
```

### Using yarn

```bash
yarn add danial-ts-containers
```

### Using pnpm

```bash
pnpm add danial-ts-containers
```

### Usage
Import the data structures you need in your TypeScript project:

```ts
import { Stack, Queue, Deque } from "danial-ts-containers";

// Example: Using Stack
const stack = new Stack<number>();
stack.push(10);
stack.push(20);
console.log(stack.pop()); // Output: 20
```

### Notes

- Written in TypeScript with full type declarations (.d.ts) for type safety.
- Compatible with Node.js, browser, or any TypeScript project.

## Versioning

This project follows Semantic Versioning (SemVer):
MAJOR.MINOR.PATCH (e.g., 1.0.0).

## Contribution Guidelines

Contributions are welcome!  
Please open an issue or submit a pull request for improvements or new data structures.
Just remember to throughly test your code before opening a pull request.

## License

This project is licensed under the MIT License.
