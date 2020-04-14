const express = require('express');
const router = express.Router();

/* GET admin page */
router.get('/', async (req, res, next) => {
  res.render('admin', {
    title: 'Admin'
  });
});

module.exports = router;
