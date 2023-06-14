const express = require('express');
const dotenv = require("dotenv");
const App = express();
const cookieParser = require("cookie-parser");

require('./DB/conn');
App.use(express.json());
App.use(cookieParser());

// Middleware
const middleware = (req, res, next) => {
  console.log('my middleware');
  next();
};

App.use(middleware);

// Routes
App.use(require('./router/auth'));

// App.get('/', (req, res) => {
//   console.log(`${req.cookies.jwtoken}`);
//   res.send(`Hello world from the server`);
// }); 

App.get('/',(req,res) => {
    
  res.send(`PHello world from the server`);
}); 

App.get('/login', (req, res) => {
  res.send(`Hello world from the server`);
  console.log('fick off');
});

App.get('/signup', (req, res) => {
  res.send(`Hello world from the server`);
  console.log('Fuck off');
});

App.get('/ProductM', (req, res) => {
  res.send(`Hello world from the server`);
});

const PORT = process.env.PORT;
App.listen(PORT, () => {
  console.log(`Subscribe to M on ==>${PORT}`);
});
