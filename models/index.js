const Tutor = require('./Tutor');
const Students = require('./Students');

User.hasMany(Students, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Project.belongsTo(User, {
  foreignKey: 'user_id'
});

module.exports = { Tutor, Students };
