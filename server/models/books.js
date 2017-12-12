const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BookSchema = new Schema ({
  id:{
    type:String,
    unique:true
  },
  title: String,
  img: String,
  selfLink: String,

});
const Books = mongoose.model('books', BookSchema);

module.exports = Books;
