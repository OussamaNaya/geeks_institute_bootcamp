const express = require('express');

const app = express();
const PORT = 5000;

app.use(express.json());

let books = [
  { id: 1, title: 'Clean Code', author: 'Robert C. Martin', publishedYear: 2008 },
  { id: 2, title: 'The Pragmatic Programmer', author: 'Andrew Hunt', publishedYear: 1999 },
  { id: 3, title: 'You Don’t Know JS', author: 'Kyle Simpson', publishedYear: 2015 }
];

app.get('/api/books', (req, res) => {
  res.status(200).json(books);
});

app.get('/api/books/:bookId', (req, res) => {
  const bookId = parseInt(req.params.bookId, 10);
  const book = books.find(b => b.id === bookId);

  if (!book) {
    return res.status(404).json({ message: 'Book not found' });
  }

  res.status(200).json(book);
});

app.post('/api/books', (req, res) => {
  const { title, author, publishedYear } = req.body;

  if (!title || !author || !publishedYear) {
    return res.status(400).json({ message: 'title, author and publishedYear are required' });
  }

  const newBook = {
    id: books.length ? books[books.length - 1].id + 1 : 1,
    title,
    author,
    publishedYear
  };

  books.push(newBook);
  res.status(201).json(newBook);
});

app.listen(PORT, () => {
  console.log(`Book API running on http://localhost:${PORT}`);
});

