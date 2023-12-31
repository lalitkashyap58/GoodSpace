// server/index.js
const express = require('express');
const http = require('http');
const socketIO = require('socket.io');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require('./models/User');
const Message = require('./models/Message');

const app = express();
const server = http.createServer(app);
const io = socketIO(server);

const PORT = process.env.PORT || 3001;

app.use(express.json());

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/chatApp', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Socket.io setup
io.on('connection', (socket) => {
  console.log('A user connected');

  // Retrieve chat history
  Message.find().sort({ createdAt: -1 }).limit(10).exec((err, messages) => {
    if (err) throw err;
    socket.emit('chatHistory', messages.reverse());
  });

  // Listen for new messages
  socket.on('sendMessage', (data) => {
    const { user, text } = data;
    const newMessage = new Message({ user, text });

    newMessage.save((err, message) => {
      if (err) throw err;
      io.emit('receiveMessage', message);
    });
  });

  // Handle other socket events here
});

app.post('/register', async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = new User({ username, password });
    await user.save();
    res.status(201).json({ message: 'User registered successfully.' });
  } catch (error) {
    console.error('Error registering user:', error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.post('/login', async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(401).json({ error: 'Invalid username or password.' });
    }

    const isPasswordValid = await user.comparePassword(password);
    if (!isPasswordValid) {
      return res.status(401).json({ error: 'Invalid username or password.' });
    }

    // Generate JWT token for authentication
    const token = jwt.sign({ userId: user._id, username: user.username }, 'your-secret-key');
    res.status(200).json({ token });
  } catch (error) {
    console.error('Error logging in:', error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
