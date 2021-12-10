const router = require('express').Router();
const {Student} = require('../../models');
const withAuth = require('../../utils/auth');


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