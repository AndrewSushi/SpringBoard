### Conceptual Exercise

Answer the following questions below:

- What is PostgreSQL?
  PostgreSQL is an object-relational database.

- What is the difference between SQL and PostgreSQL?
  The difference is that PostgreSQL is object-relaitonal which means that it supports user defined types, functions, and operations. Whereas SQL isn't. 

- In `psql`, how do you connect to a database?
  You can either do `psql <database_name>` or `psql` then `\c <database_name>`

- What is the difference between `HAVING` and `WHERE`?
  Although both are used to filter data, `HAVING` refers to filtering the data AFTER grouping has been done, whereas `WHERE` refers to filtering the data BEFORE grouping has been done. 

- What is the difference between an `INNER` and `OUTER` join?
  `INNER` join returns the rows that have matching values in both of the tables, whereas `OUTER` join returns all of the rows even if there are no matches in the second table

- What is the difference between a `LEFT OUTER` and `RIGHT OUTER` join?
  `LEFT OUTER` join is specifying that the outer join will happen on the left side which returns all rows from the first table even if there are no matching in the second. And `RIGHT OUTER` is the opposite where it will return all rows from the second table even if there are no matching in the first table

- What is an ORM? What do they do?
  ORM is Object-Relational Mapping and it refers to the concept that you can perform CRUD operations using and with objects.

- What are some differences between making HTTP requests using AJAX 
  and from the server side using a library like `requests`?
  The biggest difference is that AJAX is asynchronous which means that they do not have to perform a server-side request therefore handling the data on the webpage. Another key difference is that AJAX requests are on the client side whereas HTTP requests are on the server side. This means that AJAX will happen on the web browser as opposed to the web server.

- What is CSRF? What is the purpose of the CSRF token?
  CSRF stands for Cross-site request forgery and the purpose oh the CSRF token is to prevent malicious/unwanted attemps at sending or reciving data from the server. The token will be embedded onto the page and when the submisison is made, the server will check for the token and if the token is not correct, it will block the request. But if it is correct, then it will handle like usual.

- What is the purpose of `form.hidden_tag()`?
  `form.hidden_tag()` is used to generate the hidden CSRF token onto the website. It is also commonly made hidden to prevent the user of seeing the token as well.