const express = require('express');
const dotenv = require("dotenv");
const app = express();
const cookieParser = require("cookie-parser");
require('./DB/conn');
app.use(express.json());
app.use(cookieParser());
const razorRouter = require('./razor');

app.use('/create-order', razorRouter);

// Middleware
const middleware = (req, res, next) => {
  console.log('my middleware');
  next();
};

app.use(middleware);

// Routes
app.use(require('./router/auth'));

app.get('/', (req, res) => {
  res.send(`Hello world from the server`);
});

app.get('/cart-detail', (req, res) => {
  res.send('Hello, this is the cart detail page');
});

app.get('/login', (req, res) => {
  res.send(`Hello world from the server`);
  console.log('fick off');
});

app.get('/signup', (req, res) => {
  res.send(`Hello world from the server`);
  console.log('Fuck off');
});

app.get('/ProductM', (req, res) => {
  res.send(`Hello world from the server`);
});

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
