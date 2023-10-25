### Conceptual Exercise

Answer the following questions below:

- What is the purpose of the React Router?
  React router is used to handle routing within single page applications by allowing you to define how different components are rendered in response to URL changes

- What is a single page application?
  A single page application is a web application or website that loads a single HTML page and dynamically updates the content as the user interacts with it.
  
- What are some differences between client side and server side routing?
  Client Side routing has the routing logic and navigation handled in the browser, where as Server Side routing sends a request to the server which processes the request and sends back the appropriate HTML page.

- What are two ways of handling redirects with React Router? When would you use each?
  One way is using the redirect component which allows you to specify a destination route that the user should be redirected to when a certain condition is met. Another way is using history.push() or history.replace() which accesses the router's history abjecdt and uses push() or replace() methods to change the URL and navigate to a different route.

- What are two different ways to handle page-not-found user experiences using React Router? 
  You can use a catch all route which defines a route with a path of * at the end of your route configuration. You can also use the Switch component which renders the first matching route by placing a 404 route at the end. And any unmatched URLs will trigger the rendering of the 404 page.

- How do you grab URL parameters from within a component using React Router?
  To access URL parameters from within a comopnent, you can use the useParams hook which allowes you to access the parameters defined in your route path.

- What is context in React? When would you use it?
  Context in React is a mechanism for sharing data between components without having to explicitly pass props down the component tree. It's used to make certain data such as user authentication status or theme preferences available to many components within an appolication. Context is useful when multiple comopnenets need access to the same data or state, and passing props at multiple levels becomes a lot of work.

- Describe some differences between class-based components and function
  components in React.
  Class based components have a state property and can use lifecycle methods while function components are simple JS functions. Function components tend to perform better because they are optimized by React. 

- What are some of the problems that hooks were designed to solve?
  Hooks reduce the need for deeply nested component hierarchies and make it easier to share stateful logic between components. Hooks also allow you to reuse and reduce code by allowing you to encapsulate and share behavior across components.