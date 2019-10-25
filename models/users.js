'use strict';
module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define('Users', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    password: DataTypes.STRING,
    email: DataTypes.STRING,
    profile_pic: DataTypes.STRING
  }, {});
  Users.associate = function(models){
   
  };
  return Users;
<<<<<<< HEAD
};
=======
}; 
>>>>>>> 0c548c8053c47cf87e397271384114113afdf724
