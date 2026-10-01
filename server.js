const express = require("express");

const app = express();

const PORT = process.env.PORT || 3000;

// Books data
const books = [
  {
    id: 1,
    title: "The Alchemist",
    author: "Paulo Coelho",
    year: 1988
  },
  {
    id: 2,
    title: "Wings of Fire",
    author: "A. P. J. Abdul Kalam",
    year: 1999
  },
  {
    id: 3,
    title: "Harry Potter and the Philosopher's Stone",
    author: "J. K. Rowling",
    year: 1997
  }
];

// Home route
app.get("/", (req, res) => {
  res.json({
    message: "E54 Assignment 15 - Books API",
    endpoints: [
      "/books",
      "/books/1",
      "/books/2",
      "/books/3"
    ]
  });
});

// Get all books
app.get("/books", (req, res) => {
  res.json(books);
});

// Get a single book by ID
app.get("/books/:id", (req, res) => {
  const id = parseInt(req.params.id);

  const book = books.find((book) => book.id === id);

  if (!book) {
    return res.status(404).json({
      message: "Book not found"
    });
  }

  res.json(book);
});

// Start server
app.listen(PORT, "0.0.0.0", () => {
  console.log(`Books API running on port ${PORT}`);
});