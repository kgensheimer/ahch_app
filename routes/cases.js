var express = require('express');
var router = express.Router();

var stylesheets = [
  { stylesheet: '/stylesheets/simple-sidebar.css' }];

/* GET admin page */
router.get('/', function (req, res, next) {
  res.render('cases', {
    stylesheets: stylesheets
  });
});

module.exports = router;
