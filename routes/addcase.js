const express = require('express');
const router = express.Router();
const caseFunctions = require('../data/cases');

const scripts = [
  { script: '/public/js/setCurrentDate.js' }];

// stylesheets sent to layout.hbs
const stylesheets = [
  { stylesheet: '/public/css/sidebar-menu-addcase.css' }];


/* GET addcase page */
router.get('/', async (req, res, next) => {
  res.render('addcase', {
    title: 'Add Case',
    scripts: scripts,
    stylesheets: stylesheets
  });
});

router.post('/submitIntake', async (req, res) => {
  await caseFunctions.addCase(req.body);
  console.log(req.body);
});

module.exports = router;
