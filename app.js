const express = require('express');
const morgan = require('morgan');

const blogRoutes = require('./routes/blogRoutes');

const mongoose = require('mongoose');
const res = require('express/lib/response');
const { render } = require('express/lib/response');

const app = express();

const dbURI =
  'mongodb+srv://Ayoluwa:%40Faithie123@cluster0.nm9b8.mongodb.net/PolyMather?retryWrites=true&w=majority';

mongoose
  .connect(dbURI)
  .then((result) => app.listen(3000))
  .catch((err) => console.log(err));

//Register View Engines.

app.set('view engine', 'ejs');
app.use(morgan('tiny'));
app.use(express.urlencoded({ extended: true }));

// app.get('/add-blog', (req, res) => {
//   const blog = new Blog({
//     title: 'a new blog 2',
//     snippet: 'About my new blog',
//     body: 'body of my new blog',
//   });
//   blog
//     .save()
//     .then((result) => {
//       res.send(result);
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// });

// app.get('/all-blogs', (req, res) => {
//   Blog.find()
//     .then((result) => {
//       res.send(result);
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// });

// app.get('/single-blog', (req, res) => {
//   Blog.findById('620f575d907c44e4ad9c3c47')
//     .then((result) => {
//       res.send(result);
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// });

//Middleware and Static Files.
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.redirect('/blogs');
});

app.get('/about', (req, res) => {
  //   res.send('<p>The About Page</p>');

  res.render('about', { title: 'About Page' });
});

app.use('/blogs', blogRoutes);

app.use((req, res) => {
  res.status(404).render('404', { title: 'Error 404 Page' });
});

// Listen for Requests
// const port = 4000;

// app.listen(port, () => {
//   console.log(`We are listening at port ${port}`);
// });
