const express = require('express');
const mongoose = require('mongoose');

const users = require('./routes/api/users');
const profile = require('./routes/api/profile');
const posts = require('./routes/api/posts');

const app = express();

//DB Config
const db = require('./config/keys').mongoURI;

//Connect to MongoDB
mongoose
  .connect(db, { useUnifiedTopology: true, useNewUrlParser: true })
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

//Init Middleware
app.use(express.json({ extended: false }));

app.get('/', (req, res) => res.send('API running'));

//Use routes
app.use('/api/users', require('./routes/api/users'));
app.use('/api/profile', require('./routes/api/profile'));
app.use('/api/posts', require('./routes/api/posts'));

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));