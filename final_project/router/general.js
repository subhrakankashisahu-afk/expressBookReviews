const axios = require('axios');

// Get all books
exports.getAllBooks = async () => {
  const response = await axios.get('http://localhost:5000/');
  return response.data;
};

// Get book by ISBN
exports.getBookByISBN = async (isbn) => {
  const response = await axios.get(`http://localhost:5000/isbn/${isbn}`);
  return response.data;
};

// Get books by author
exports.getBooksByAuthor = async (author) => {
  const response = await axios.get(`http://localhost:5000/author/${author}`);
  return response.data;
};

// Get books by title
exports.getBooksByTitle = async (title) => {
  const response = await axios.get(`http://localhost:5000/title/${title}`);
  return response.data;
};
