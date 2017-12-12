const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  nickname: {
    type:String,
    required:true,
  },
  id:{
    type:String,
    unique:true,
    required:true,
  },
  img: String,
  background: String,
  quote: String,
  author: String,
  stared:[String]
})
const User = mongoose.model('user', UserSchema);

module.exports = User;
