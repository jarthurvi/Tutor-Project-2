const router = require('express').Router();
const {Tutors} = require('../../models');
const withAuth = require('../../utils/auth');


router.get('/tutor', async (req, res) => {
    //try {
      //const studentData = await Students.findByPk(req.params.id, {
      //  include: [
         // {
           // model: User,
           // attributes: ['name'],
          //},
        //],
        res.render('tutor');
    });