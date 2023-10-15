### Conceptual Exercise

Answer the following questions below:

- What is React? When and why would you use it?
    React is a JS library that is for building user interfaces. React is good for building single page web apps where all the UI is rendered on a single web page

- What is Babel?
    Babel is a JS transpiler that converts ES6+ code to ES5 code that can be run on older browsers

- What is JSX?
    JSX is an extention of JS that allows the user to write HTML-like code within JS files. This is used commonly in React to describe what the UI should look like.

- How is a Component created in React?
    A component is a defined function or class that returns JSX code, representing the component's UI. 

- What are some difference between state and props?
    Props are immutable and are used to pass data from a parent component to a child ocmponent. They are read only and cannot be modified by the child component. State is mutable and is used to manage a component's internal data. State is usedfor managing dynamic data within a component

- What does "downward data flow" refer to in React?
    Downward data flow in React refers to the practice of passing data from parent components to child components through props. 

- What is a controlled component?
    A controlled component in React is an input element whose value is controlled by React's stae. 

- What is an uncontrolled component?
    An uncontrolled component is an input elemtn where the value is not controlled by React's state. Instead, it relies on the DOM for its value.

- What is the purpose of the `key` prop when rendering a list of components?
    The `key` prop is used to give React a way to uniquely identify and track elements when rendering lists of components. It helps React efficiently update the DOM by identifying which elements have been added, removed, or reordered in a list.

- Why is using an array index a poor choice for a `key` prop when rendering a list of components?
    Using an array index as a key prop can lead to issues in certain scenarios, such as when items are added or removed from the list. This approach doesn't provide a stable identity for the elements, which can lead to incorrect rendering and behavior. It's better to use a unique and stable identifier as the key prop.

- Describe useEffect.  What use cases is it used for in React components?
    useEffect is a built-in React hook that allows you to perform side effets in your functional components. It is often used for tasks such as data fetching, DOM manipulation, and subscribing to external data sources. 

- What does useRef do?  Does a change to a ref value cause a rerender of a component?
    useRef is a built-in React hook that creates a mutable reference object which can hold a reference to a DOM element or other values. 

- When would you use a ref? When wouldn't you use one?
    You would use a ref when you need to access or manipulate a DOM element directly or when you want to store a  mutable value that doesn't require triggering component re-renders.

- What is a custom hook in React? When would you want to write one?
    A custom hook in React is a JS function that utilizes one or more built-in hooks to encapsulate and shore logic acros multiple components. Custom hooks premore code reusability and separation of concerns. You would want to write a custom hook when you have common logic or side effects that are used in multiple components, and you want to abstract that logic into a reusable function. 