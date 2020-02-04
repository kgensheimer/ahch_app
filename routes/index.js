var express = require('express');
var router = express.Router();

var scripts = [{ script: 'modules/@fullcalendar/core/main.min.js' }, { script: 'modules/@fullcalendar/daygrid/main.min.js' }, { script: 'javascripts/calendar.js' }];
var stylesheets = [{ stylesheet: 'modules/@fullcalendar/core/main.min.css'}, { stylesheet: 'modules/@fullcalendar/daygrid/main.min.css'}]

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', {
    title: 'Express',
    scripts: scripts,
    stylesheets: stylesheets
  });
});

module.exports = router;
