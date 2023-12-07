# Alura Books Server

## Overview

Welcome to the Alura Books Server repository! This Node.js server is designed to complement the Alura Books application, serving as the backend to handle CRUD operations on a local database (`livros.json`). The primary focus of this project is to enhance skills in CRUD operations, working with a local database, and implementing routes for delete, get, post, and patch operations on any book identified by its unique ID.

## Features

- **CRUD Operations:** The server supports Create, Read, Update, and Delete operations on book data.
  
- **Local Database:** Book data is stored in a local database file (`livros.json`), providing a simple and easy-to-use storage solution.

- **RESTful API:** The server follows RESTful principles, offering clear and predictable endpoints for interacting with book data.

- **API Endpoints:**

GET /livros: Retrieve a list of all books.

GET /livros/:id: Retrieve details of a specific book identified by its ID.

POST /livros: Add a new book to the database.

PATCH /livros/:id: Update details of a specific book identified by its ID.

DELETE /livros/:id: Delete a book from the database based on its ID.

## Conclusion

This project serves as a practical exercise for improving CRUD skills, working with local databases, and implementing RESTful routes. Feel free to explore and modify the code to further enhance your understanding and proficiency in Node.js and backend development. If you have any questions or feedback, please don't hesitate to reach out.

Happy coding! 🚀
