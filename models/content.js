'use strict';
module.exports = (sequelize, DataTypes) => {
  const content = sequelize.define('content', {
    posting: DataTypes.TEXT
  }, {});
  content.associate = function(models) {
    
  };
  return content;
};