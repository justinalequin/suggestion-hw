var createError = require('http-errors');
var express = require('express');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require("mongoose");

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const suggestionRouter = require('./routes/suggestion/suggestionRouter');


mongoose.connect("mongodb://localhost:27017/suggestion-hw",{
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(()=>{
  console.log("MONGODB CONNECTED");
}).catch((e)=>{
  console.log(e);
});

var app = express();



app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());


app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/api/suggestion', suggestionRouter);


app.use(function(req, res, next) {
  next(createError(404));
});

app.use(function(err, req, res, next) {

  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
