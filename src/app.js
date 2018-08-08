const createError = require('http-errors');
const express = require('express');
const passport = require('passport');

const logger = require('morgan');
const cors = require('cors');
const fileupload = require('express-fileupload');

// express
var app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// middlewares
app.use(logger('dev'));
app.use(cors());
app.use(fileupload());

// passport
require('./middlewares/passport')(passport);
app.use(passport.initialize());
app.use(passport.session()); //로그인 세션 유지

// route
app.use('/', require('./routes/index'));
app.use('/files', require('./routes/fileupload'));
app.use('/users', require('./routes/users-handler'));
app.use('/auth', require('./routes/auth'));

// error handler
app.use(function(req, res, next) {
  next(createError(404));
});

app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

console.log(`server environment: ${process.env.NODE_ENV}`);
module.exports = app;
