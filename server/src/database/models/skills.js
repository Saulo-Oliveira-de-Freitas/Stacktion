'use strict';
module.exports = (sequelize, DataTypes) => {
  const skills = sequelize.define('skills', {
    skillname: DataTypes.STRING,
    category: DataTypes.STRING
  }, {});
  skills.associate = function(models) {
    // associations can be defined here
  };
  return skills;
};