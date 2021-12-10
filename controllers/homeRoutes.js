const router = require('express').Router();
const {Teacher, Students} = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
  

  res.render('login');
});

router.get('/students', async (req, res) => {
  //try {
    //const studentData = await Students.findByPk(req.params.id, {
    //  include: [
       // {
         // model: User,
         // attributes: ['name'],
        //},
      //],
      res.render('students');
  });
module.exports = router;
//generated 