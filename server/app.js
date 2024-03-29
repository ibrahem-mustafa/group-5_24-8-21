var express = require('express');
var logger = require('morgan');


const {connectToDB} = require('./config/db.config')
const cors = require('cors')
const articleRouter = require('./routes/article.routes')
const authRouter = require('./routes/auth.routes');

var app = express();

connectToDB();
app.use(cors())
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/article', articleRouter)
app.use('/auth', authRouter)

// app.use('/auth', authRouter)

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(new Error('Page Not Found'))
});

// error handler
app.use(function(err, req, res, next) {
  console.log(err)
  res.status(err.status || 500);
  res.json({ err })
});

module.exports = app;