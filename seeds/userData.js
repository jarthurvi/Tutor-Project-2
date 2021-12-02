const { Teacher } = require("../models")

const teacherData = [
  {
    "id": 1,
    "name": "Teacher",
    "email": "admin@myschool.com",
    "password": "tutor"
  }
]

const seedTeacher = () => Teacher.bulkCreate(teacherData);

module.exports = seedTeacher;
