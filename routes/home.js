const express = require('express');
const router = express.Router();

// scripts sent to layout.hbs (lines 13-15)
const scripts = [
  { script: '/@fullcalendar/core/main.min.js' },
  { script: '/@fullcalendar/daygrid/main.min.js' },
  { script: '/public/js/calendar.js' }];

// stylesheets sent to layout.hbs (lines 71-72)
const stylesheets = [
  { stylesheet: '/@fullcalendar/core/main.min.css' },
  { stylesheet: '/@fullcalendar/daygrid/main.min.css' }]

/* GET home page. */
router.get('/', async (req, res, next) => {
  res.render('home', {
    title: 'AHCH IMS',
    scripts: scripts,
    stylesheets: stylesheets
  });
});

module.exports = router;
