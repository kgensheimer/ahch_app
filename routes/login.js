const express = require('express');
const bcrypt = require('bcryptjs')
const router = express.Router();

/* GET admin page */
router.get('/', async (req, res, next) => {
  res.render('login', {
    title: 'Log In'
  });
});

router.post('/login/', async (req, res) => {
  const username = req.body.username
  const password = req.body.password

  if (!username)
})

module.exports = router;
