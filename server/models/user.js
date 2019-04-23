

module.exports = function (sequelize, type){
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
      },
      tokens : {
         type : type.ARRAY(type.STRING)
         // type: type.STRING,
         // get: function() {
         //    return JSON.parse(this.getDataValue('tokens'));
         // },
         // set: function(val) {
         //    return this.setDataValue('tokens', JSON.stringify(val));
         // }
      }

   })
}