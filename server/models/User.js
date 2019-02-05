const mongoose = require('mongoose');

let UserSchema = new mongoose.Schema({
   name : String,
   email : String,
   token : String,
   cart : Array,
});


module.exports = mongoose.model('User', UserSchema);