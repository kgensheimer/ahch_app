const express = require('express');
const router = express.Router();

// stylesheets sent to layout.hbs
const stylesheets = [
  { stylesheet: '/stylesheets/simple-sidebar.css' }];


/* GET addcase page */
router.get('/', function(req, res, next) {
  res.render('addcase', {
    stylesheets: stylesheets
  });
});

module.exports = router;
