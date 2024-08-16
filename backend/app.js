// const express = require('express');
// const mongoose = require('mongoose');
// const bcrypt = require('bcryptjs');
// const jwt = require('jsonwebtoken');
// const cookieParser = require('cookie-parser');
// const { signupDataValidate } = require('./middlewares/signupDataValidate');
// const { loginDataValidate } = require('./middlewares/loginDataValidate');
// const { authenticateUser } = require('./middlewares/authenticateUser');
// const User = require('./models/User');

// const app = express();
// app.use(express.json());
// app.use(cookieParser());

// mongoose.connect('mongodb://localhost:27017/instagramClone', { useNewUrlParser: true, useUnifiedTopology: true });

// app.post('/signup', signupDataValidate, async (req, res) => {
//     const { name, username, bio, email, password } = req.body;
//     const hashedPassword = await bcrypt.hash(password, 10);
//     const user = new User({ name, username, bio, email, password: hashedPassword });
//     await user.save();
//     res.status(201).send('User registered successfully');
// });

// app.post('/login', loginDataValidate, async (req, res) => {
//     const { username, password } = req.body;
//     const user = await User.findOne({ username });
//     if (!user) return res.status(400).send('Invalid credentials');

//     const isPasswordValid = await bcrypt.compare(password, user.password);
//     if (!isPasswordValid) return res.status(400).send('Invalid credentials');

//     const token = jwt.sign({ id: user._id }, 'secretKey', { expiresIn: '1h' });
//     res.cookie('token', token, { httpOnly: true });
//     res.send('Login successful');
// });

// app.get('/', authenticateUser, async (req, res) => {
//     const user = await User.findById(req.user.id);
//     res.send(user);
// });

// app.listen(3000, () => console.log('Server running on port 3000'));


const express = require('express');
const path = require('path');
const app = express();

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Serve the index.html file
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
