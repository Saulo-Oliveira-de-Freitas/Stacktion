'use strict';
module.exports = (sequelize, DataTypes) => {
  const users_skills = sequelize.define('users_skills', {
    users_id: DataTypes.NUMBER,
    skills_id: DataTypes.NUMBER,
    skill_level: DataTypes.STRING
  }, {});
  users_skills.associate = function(models) {
    // associations can be defined here
  };
  return users_skills;
};