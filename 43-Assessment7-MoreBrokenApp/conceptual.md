### Conceptual Exercise

Answer the following questions below:

- What is a JWT?
  A JWT is a JSON Web Token and it is a self-contained way to represent information between two things in the form of a JSON object, which is usually used for authentication and authorization.

- What is the signature portion of the JWT?  What does it do?
  The signature portion is one of three components that are apart of the JWT. The signature is responsible for the integrity and the authenticity of the JWT.

- If a JWT is intercepted, can the attacker see what's inside the payload?
  Yes because the payload isn't encrypted by deafault.

- How can you implement authentication with a JWT?  Describe how it works at a high level.
  You can create a digitally signed token to a user after authorization. This is how you can have a user repeatedly use the JWT with just one authorization method

- Compare and contrast unit, integration and end-to-end tests.
  Unit tests are for individual compontents, integration tests are for interactions between different components, and end-to-end tests are for the entire application or the system from the user's perspective.

- What is a mock? What are some things you would mock?
  A mock is a simulated object that is used during testing to replace real, production level dependencies or collaborators.

- What is continuous integration?
  Continuous integration detects and addresses integration issues and bugs early in the development cycle, promoting collaboration, code quality, and a streamlined release process

- What is an environment variable and what are they used for?
  An environment variable is a variable that is part of the operating system's environment and is used to store configuration settings, system paths, or other information.

- What is TDD? What are some benefits and drawbacks?
  TDD stands for Test Driven Development, which is a method that writes tests first before writing the actual code.

- What is the value of using JSONSchema for validation?
  Using JSON Schema for validation ensures that JSON data adheres to predefined structures, constraints, and data types, promoting data integrity and consistency while providing documentation and validation capabilities.

- What are some ways to decide which code to test?
  Decide which code to test based on its criticality, complexity, potential for defects, and its role in the core functionality of your application.

- What does `RETURNING` do in SQL? When would you use it?
  `RETURNING` is used in certain database systems (e.g., PostgreSQL) to retrieve the values of columns affected by an `INSERT`, `UPDATE`, or `DELETE` operation, which is useful when you need to obtain or verify the changes made by the query.

- What are some differences between Web Sockets and HTTP?
  Web Sockets provide a full-duplex, bidirectional, and long-lived connection for real-time communication, while HTTP is a stateless, request-response protocol primarily designed for one-way, client-to-server interactions.

- Did you prefer using Flask over Express? Why or why not (there is no right
  answer here --- we want to see how you think about technology)?
  I like Flask more because of how easy it was to use, install, test, and work with. 