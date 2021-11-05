'use strict';
module.exports = (sequelize, DataTypes) => {
  const skills = sequelize.define('skills', {
    skillname: DataTypes.STRING,
    category: DataTypes.STRING
  }, {});
  skills.associate = function(models) {
   
   skills.belongsToMany(models.devs, {through: 'devskills',foreignKey: 'skillId'})
  };
  return skills;
};