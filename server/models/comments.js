const mongoose = require('mongoose');
const Schema = mongoose.Schema;
require('mongoose-long')(mongoose);
var SchemaTypes = mongoose.Schema.Types;

const CommentSchema = new Schema ({
  id:{
    type:String,
    unique:true
  },
  title: String,
  comments:[{
    creator:String,
    creator_id:String,
    text:String,
    vote:Number,
    up:[],
    down:[],
    response:[{
      creator:String,
      creator_id:String,
      text:String,
      vote:Number,
      up:[],
      down:[],
      creator_img:String,
    }],
    creator_img: String
  }],
  stared:[String],




});
const Comments = mongoose.model('comments', CommentSchema);

module.exports = Comments;
