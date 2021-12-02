const Tutor = require('./Tutor');
const Students = require('./Students');

Tutor.hasMany(Students, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Students.belongsTo(Tutor, {
  foreignKey: 'user_id'
});

module.exports = { Tutor, Students };
