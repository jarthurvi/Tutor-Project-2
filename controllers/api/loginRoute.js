const router = require('express').Router();
const { student, Tutor } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
  

  res.render('login');
});