### Conceptual Exercise

Answer the following questions below:

- What are some ways of managing asynchronous code in JavaScript?
  Callbacks, promises, and using async/await

- What is a Promise?
  Promises are objects that represent a future event will be completed, whether completed or failure, it will be reach one of the two.

- What are the differences between an async function and a regular function?
  Async functions always return a promise, while regular functions don't always return functions. This means that async functions can be used to run astnchronous operations

- What is the difference between Node.js and Express.js?
  The difference between Node and Express is that Node is the foundation and Express is the framework that is being used. Node isn't a framework, but it can be used to build frameworks

- What is the error-first callback pattern?
  Error-first callback pattern is a way of handling error in asynchronous code. It passes a function as the first argument to another ufnction, which will be called if an erro occurs. The second argument to the callback function is the error object.

- What is middleware?
  Middleware is used to intercept requests and responses before they reach the application code. Which allowed middleware to do authentication, authorization, logging, error handling, caching, and rate limiting

- What does the `next` function do?
  The next function executes the next middleware in the stack. Which is commonly used to pass control to the next middleware function in the chain after the current function has finished

- What are some issues with the following code? (consider all aspects: performance, structure, naming, etc)

```js
async function getUsers() {
  const elie = await $.getJSON('https://api.github.com/users/elie');
  const joel = await $.getJSON('https://api.github.com/users/joelburton');
  const matt = await $.getJSON('https://api.github.com/users/mmmaaatttttt');

  return [elie, matt, joel];
}
```

Instead of awaiting each action, you can await them all at once by using `Promise.all()`. This wasy, the code will speed up, and it will also handle the errors if there are any that arise.