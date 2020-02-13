var express = require('express');
var router = express.Router();

// stylesheets sent to layout.hbs
var stylesheets = [
    { stylesheet: '/stylesheets/simple-sidebar.css' }];

/* GET addcase page */
router.get('/', function(req, res, next) {
  res.render('addcase', {
    stylesheets: stylesheets
  });
});

module.exports = router;
