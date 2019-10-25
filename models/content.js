'use strict';
module.exports = (sequelize, DataTypes) => {
  const content = sequelize.define('content', {
    posting: DataTypes.TEXT
  }, {});
  content.associate = function(models) {
    models.content.belongsTo(models.Users, { foreignKey: 'UserId' });
  };
  return content;
};