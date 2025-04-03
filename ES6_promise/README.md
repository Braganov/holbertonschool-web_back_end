# ES6 Promises

This project focuses on JavaScript Promises, async/await, and error handling in ES6. Through various tasks, you'll learn how to use promises to handle asynchronous operations effectively.

## Learning Objectives

By the end of this project, you will understand:

- Promises and why they're used
- How to use the `then`, `resolve`, `catch` methods
- How to use the `every`, `some` and `race` methods
- How to create a simple Promise
- How to use `async`/`await` syntax
- How to handle errors with try/catch

## Requirements

- All files will be executed on Ubuntu 18.04 LTS using NodeJS 12.11.x
- Code should use the js extension
- Testing with Jest and ESLint
- All files will be interpreted/compiled on Ubuntu 18.04 LTS using `node` (version 12.x.x)
- All files should end with a new line
- A `README.md` file is mandatory
- Code should use the `.js` extension
- Code will be tested using Jest
- Code will be verified against lint using ESLint
- Code needs to pass all tests and lint. You can verify the entire project by running `npm run full-test`

## Setup

```bash
# Install dependencies
npm install

# Run a specific file
npm run dev [filename]

# Example
npm run dev 0-main.js
```

## Tasks Overview

### 0. Keep every promise you make and only make promises you can keep
Return a Promise using the provided prototype function `getResponseFromAPI()`

### 1. Don't make a promise...if you know you can't keep it
Return a promise that resolves or rejects based on a boolean parameter

### 2. Catch me if you can!
Append three handlers to the function to handle promise resolution and rejection

### 3. Handle multiple successful promises
Collectively resolve all promises and log the result

### 4. Simple promise
Return a resolved promise with user information

### 5. Reject the promises
Return a Promise rejecting with an Error and a specific string

### 6. Handle multiple promises
Use Promise.allSettled to handle multiple promises with their status and values

### 7. Load balancer
Return the value from the promise that resolves first using Promise.race

### 8. Throw error / try catch
Create a function that throws an error for specific conditions

### 9. Throw error / try catch
Create a guardrail function that handles errors and always returns a specific message

## Tasks Detail

Each task requires implementing specific promise functionality:

1. **Basic Promise Creation**: Create simple promises that resolve or reject
2. **Promise Handling**: Use then, catch, and finally methods
3. **Multiple Promises**: Work with multiple promises simultaneously
4. **Error Handling**: Implement proper error handling in promises
5. **Advanced Patterns**: Race conditions and combined promise handling

## File Descriptions

- `0-promise.js`: Basic promise that always resolves
- `1-promise.js`: Promise that conditionally resolves or rejects
- `2-then.js`: Promise with multiple handlers
- `3-all.js`: Handling multiple promises with Promise.all
- `4-user-promise.js`: Creating a promise with user data
- `5-photo-reject.js`: Implementing a promise that always rejects
- `6-final-user.js`: Advanced handling of promises with Promise.allSettled
- `7-load_balancer.js`: Using Promise.race for performance optimization
- `8-try.js`: Error handling with try/catch
- `9-try.js`: Advanced error handling with guardrail pattern
- `utils.js`: Helper functions for testing promise behavior

## Author

Holberton School Student
