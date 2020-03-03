const express = require('express');
const router = express.Router();

// scripts sent to layout.hbs (lines 13-15)
const scripts = [
  { script: 'modules/@fullcalendar/core/main.min.js' },
  { script: 'modules/@fullcalendar/daygrid/main.min.js' },
  { script: 'javascripts/calendar.js' }];

// stylesheets sent to layout.hbs (lines 71-72)
const stylesheets = [
  { stylesheet: 'modules/@fullcalendar/core/main.min.css' },
  { stylesheet: 'modules/@fullcalendar/daygrid/main.min.css' }]

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('home', {
    title: 'Express',
    scripts: scripts,
    stylesheets: stylesheets
  });
});

module.exports = router;
