const router = require('express').Router();
const { Student, Tutor, Teacher} = require('../models');
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

  router.get('/tutor', async (req, res) => {
    //try {
      //const studentData = await Students.findByPk(req.params.id, {
      //  include: [
         // {
           // model: User,
           // attributes: ['name'],
          //},
        //],
        res.render('Tutor');
    });
module.exports = router;
//generated 




module.exports = router;