var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var hbs = require('express-handlebars');

/*
Routing file setup:
After creating a new routing file, it must be required here
*/
var indexRouter = require('./routes/index');
var adminRouter = require('./routes/admin');
var addcaseRouter = require('./routes/addcase');
var casesRouter = require('./routes/cases');

var app = express();

// View engine setup
app.engine('hbs', hbs({extname: 'hbs', defaultLayout: 'layout', layoutsDir: __dirname + '/views/layouts'}));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Redirecting node modules to static folder
app.use('/modules', express.static(path.join(__dirname, 'node_modules')))

/*
  Routing file setup:
  Each router added above mut be used by the app, with the respective name of the route
*/
app.use('/', indexRouter);
app.use('/admin', adminRouter);
app.use('/addcase', addcaseRouter);
app.use('/cases', casesRouter);

// Catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// Error handler
app.use(function (err, req, res, next) {
  // Set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // Render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
