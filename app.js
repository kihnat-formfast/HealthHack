var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var bodyParser = require('body-parser');

var task = require('./routes/task');
var module = require('./routes/module');
var badge = require('./routes/badge');
var book = require('./routes/book');
var app = express();

var mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
mongoose.connect('mongodb://localhost/mean-angular5', { useMongoClient: true, promiseLibrary: require('bluebird') })
  .then(() =>  console.log('connection succesful'))
  .catch((err) => console.error(err));

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({'extended':'false'}));
app.use(express.static(path.join(__dirname, 'dist')));
app.use('/modules', express.static(path.join(__dirname, 'dist')));
app.use('/module', module);
app.use('/badges', express.static(path.join(__dirname, 'dist')));
app.use('/badge', badge);
app.use('/tasks', express.static(path.join(__dirname, 'dist')));
app.use('/task', task);
app.use('/books', express.static(path.join(__dirname, 'dist')));
app.use('/book', book);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
