var express = require('express');
var router = express.Router();

/* GET cases page */
router.get('/', function(req, res, next) {
  res.render('cases', 
  {
      title: "cases page!!!"
  });
});

module.exports = router;
