require('dotenv').config({path : '../.env'});

const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

// JWT secret key
const JWT_SECRET = '123456';

const uri = process.env.MONGO_CONNECTION_URL;

// Connect to MongoDB
mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

// Define User Schema
const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String
});

// Define Book Schema
const bookSchema = new mongoose.Schema({
  bookname: String,
  author: String,
  summary: String
});

const User = mongoose.model('User', userSchema);
const Book = mongoose.model('Book', bookSchema);

// Signup Endpoint
app.post('/api/signup', async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(password, 10);  // Hash password
    const newUser = new User({ name, email, password: hashedPassword });
    await newUser.save();
    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    res.status(400).json({ error: 'Email already exists' });
  }
});

// Login Endpoint
app.post('/api/login', async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) {
    return res.status(400).json({ error: 'Invalid email' });
  }

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    return res.status(400).json({ error: 'Invalid password' });
  }

  const token = jwt.sign({ userId: user._id }, JWT_SECRET, { expiresIn: '1h' });
  res.json({ token });
});

app.post('/api/login2', async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
  
    if (!user) {
      return res.status(400).json({ error: 'Invalid email', correctPassword: user?.password });
    }
  
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ error: 'Invalid password', correctPassword: user.password });
    }
  
    const token = jwt.sign({ userId: user._id }, JWT_SECRET, { expiresIn: '1h' });
    res.json({ token });
  });
  

// Middleware to authenticate the token
const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  if (!token) return res.sendStatus(401);

  jwt.verify(token, JWT_SECRET, (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
};

// View All Books Endpoint
app.get('/api/books', async (req, res) => {
  const books = await Book.find();
  res.json(books);
});

// Search Books by Name or Author Endpoint
app.get('/api/books/search', async (req, res) => {
  const { query } = req.query;  
  const books = await Book.find({
    $or: [
      { bookname: new RegExp(query, 'i') },
      { author: new RegExp(query, 'i') }
    ]
  });
  res.json(books);
});

// Get Book by ID Endpoint
app.get('/api/books/:id', async (req, res) => {
    const { id } = req.params;
    
    try {
      const book = await Book.findById(id);
      
      if (!book) {
        return res.status(404).json({ message: 'Book not found' });
      }
      
      res.json(book);
    } catch (error) {
      console.error('Error fetching book by ID:', error);
      res.status(500).json({ message: 'Server error' });
    }
  });

  app.put('/api/books/:id/issue', async (req, res) => {
    const { id } = req.params;
    const { issued } = req.body;  // Expect the issued status in the request body
  
    try {
      const book = await Book.findByIdAndUpdate(id, { issued: issued }, { new: true });
      if (!book) {
        return res.status(404).json({ error: 'Book not found' });
      }
      res.json({ message: `Book ${issued ? 'issued' : 'returned'} successfully`, book });
    } catch (error) {
      res.status(500).json({ error: 'Error updating book status' });
    }
  });
  

// Start the server
app.listen(5000, () => {
  console.log('Server is running on port 5000');
});
