var express = require('express');
var router = express.Router();

var stylesheets = [
  { stylesheet: '/stylesheets/simple-sidebar.css' }];

/* GET cases page */
router.get('/', function (req, res, next) {
  res.render('cases', {
    stylesheets: stylesheets
  });
});

router.get('/referral', function (req, res, next) {
  res.render('cases/referral', {
    stylesheets: stylesheets
  });
});

router.get('/patients', function (req, res, next) {
  res.render('cases/patients', {
    stylesheets: stylesheets
  });
});

router.get('/medical', function (req, res, next) {
  res.render('cases/medical', {
    stylesheets: stylesheets
  });
});

router.get('/family', function (req, res, next) {
  res.render('cases/family', {
    stylesheets: stylesheets
  });
});

router.get('/history', function (req, res, next) {
  res.render('cases/family', {
    stylesheets: stylesheets
  });
});

router.get('/services', function (req, res, next) {
  res.render('cases/services', {
    stylesheets: stylesheets
  });
});

router.get('/staff', function (req, res, next) {
  res.render('cases/staff', {
    stylesheets: stylesheets
  });
});

router.get('/mentalhealth', function (req, res, next) {
  res.render('cases/mentalhealth', {
    stylesheets: stylesheets
  });
});

router.get('/recommendation', function (req, res, next) {
  res.render('cases/recommendation', {
    stylesheets: stylesheets
  });
});

router.get('/familyrecommendation', function (req, res, next) {
  res.render('cases/familyrecommendation', {
    stylesheets: stylesheets
  });
});

router.get('/notes', function (req, res, next) {
  res.render('cases/notes', {
    stylesheets: stylesheets
  });
});

module.exports = router;
