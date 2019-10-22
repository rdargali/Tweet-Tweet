'use strict';
module.exports = (sequelize, DataTypes) => {
  const content = sequelize.define('content', {
    posting: DataTypes.STRING
  }, {});
  content.associate = function(models) {
    Content.belongsTo(model.Users);
  };
  return content;
};