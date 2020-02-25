var express = require('express');
var router = express.Router();

/* GET cases page */
router.get('/', function (req, res, next) {
  res.render('cases', {
    layout: 'caseslayout'
  });
});

router.get('/referral', function (req, res, next) {
  res.render('cases/referral', {
    layout: 'caseslayout'
  });
});

router.get('/patients', function (req, res, next) {
  res.render('cases/patients', {
    layout: 'caseslayout'
  });
});

router.get('/medical', function (req, res, next) {
  res.render('cases/medical', {
    layout: 'caseslayout'
  });
});

router.get('/family', function (req, res, next) {
  res.render('cases/family', {
    layout: 'caseslayout'
  });
});

router.get('/history', function (req, res, next) {
  res.render('cases/family', {
    layout: 'caseslayout'
  });
});

router.get('/services', function (req, res, next) {
  res.render('cases/services', {
    layout: 'caseslayout'
  });
});

router.get('/staff', function (req, res, next) {
  res.render('cases/staff', {
    layout: 'caseslayout'
  });
});

router.get('/mentalhealth', function (req, res, next) {
  res.render('cases/mentalhealth', {
    layout: 'caseslayout'
  });
});

router.get('/recommendation', function (req, res, next) {
  res.render('cases/recommendation', {
    layout: 'caseslayout'
  });
});

router.get('/familyrecommendation', function (req, res, next) {
  res.render('cases/familyrecommendation', {
    layout: 'caseslayout'
  });
});

router.get('/notes', function (req, res, next) {
  res.render('cases/notes', {
    layout: 'caseslayout'
  });
});

module.exports = router;
