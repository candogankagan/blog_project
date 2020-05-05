const express = require('express');
const app = express();
const articleRouter = require('./routes/articles');

app.set('view engine', 'ejs');
app.use('/articles', articleRouter);
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
  const options = {
    day: 'numeric',
    month: '2-digit',
    year: 'numeric',
  };
  const articles = [
    {
      title: 'Test Article',
      createdAt: new Date(),
      description: 'Test Description',
    },
    {
      title: 'Test Article 2',
      createdAt: new Date(),
      description: 'Test Description 2',
    },
  ];
  res.render('articles/index', { articless: articles, options: options });
});

app.listen(5000);
