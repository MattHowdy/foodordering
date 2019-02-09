

module.exports = (sequelize, type) => {
   return sequelize.define('users', {
      id: {
         type: type.INTEGER,
         primaryKey: true,
         autoIncrement: true
      },
      first_name : type.STRING,
      last_name : type.STRING,
      email: {
         type: type.STRING,
         unique: true,
         required: true,
         trim: true
      },
      password : {
         type: type.STRING,
         required: true,
      }
   })
};