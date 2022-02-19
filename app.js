const express = require('express');
const morgan = require('morgan');

const mongoose = require('mongoose');

const app = express();

const dbURI =
  'mongodb+srv://Ayoluwa:%40Faithie123@cluster0.nm9b8.mongodb.net/PolyMather?retryWrites=true&w=majority';

mongoose
  .connect(dbURI)
  .then((result) => console.log('Now connected to the Database'))
  .catch((err) => console.log(err));

//Register View Engines.

app.set('view engine', 'ejs');
app.use(morgan('tiny'));

//Middleware and Static Files.
app.use(express.static('public'));

app.get('/', (req, res) => {
  //   res.send('<p>Home Page</p>');
  const blogs = [
    {
      title: 'Yoshi finds eggs',
      snippet: 'Lorem ipsum dolor sit amet consectetur',
    },
    {
      title: 'Mario finds stars',
      snippet: 'Lorem ipsum dolor sit amet consectetur',
    },
    {
      title: 'How to defeat Bowser',
      snippet: 'Lorem ipsum dolor sit amet consectetur',
    },
  ];

  res.render('index', { title: 'Home', blogs });
});

app.get('/about', (req, res) => {
  //   res.send('<p>The About Page</p>');

  res.render('about', { title: 'About Page' });
});

app.get('/blogs/create', (req, res) => {
  res.render('create', { title: 'Create Post' });
});

app.use((req, res) => {
  res.status(404).render('404', { title: 'Error 404 Page' });
});

// Listen for Requests
const port = 4000;

app.listen(port, () => {
  console.log(`We are listening at port ${port}`);
});
